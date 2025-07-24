import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import {
  buscarProdutosPorID,
  deletarProdutos,
  editarProdutos,
} from "../../service/apiService";
import { FormularioP } from "../../components/FormularioP/FormularioP";
import styles from "./Edicao.module.css";

export const Edicao = () => {
  const { id } = useParams();
  const [produto, setProdutos] = useState({});
  const [produtoInicial, setProdutoinicial] = useState(null);
  const [loading, setLoading] = useState(true);
  const navegacao = useNavigate();
  const getData = async () => {
    try {
      const selecionadoProduto = await buscarProdutosPorID(id);
      setProdutos(selecionadoProduto);
      setProdutoinicial(selecionadoProduto);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const handleChange = (e) => {
    setProdutos({ ...produto, [e.target.name]: e.target.value });
  };

  const handleDelete = async () => {
    const confirm = window.confirm("Tem certeza que deseja apagar?");
    if (confirm) {
      await deletarProdutos(id);
      navegacao("/");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await editarProdutos(id, produto);
    navegacao("/");
  };

  const isChanged = () => {
    if (!produtoInicial) return false;
    return (
      produto.nome !== produtoInicial.nome ||
      produto.valor !== produtoInicial.valor ||
      produto.descricao !== produtoInicial.descricao ||
      produto.imagem !== produtoInicial.imagem
    );
  };
  if (loading) return <p>Carregando...</p>;
  return (
    <div className={styles.container}>
      <h1>Editar Produto</h1>
      <FormularioP
        produtos={produto}
        onChange={handleChange}
        onSubmit={handleSubmit}
        isEditing
        isChanged={isChanged}
      />
      <div className={styles.botoes}>
        <button className={styles.botao} onClick={handleDelete}>
          Deletar
        </button>
        <button className={styles.botao2} onClick={() => navegacao("/")}>
          Voltar
        </button>
      </div>
    </div>
  );
};
