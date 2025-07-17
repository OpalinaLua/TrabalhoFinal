import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import {
  buscarProdutosPorID,
  deletarProdutos,
  editarProdutos,
} from "../../service/apiService";
import { FormularioP } from "../../components/FormularioP/FormularioP";

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
      produto.descricao !== produtoInicial.descricao
    );
  };
  if (loading) return <p>Carregando...</p>;
  return (
    <div>
      <div>
        <button onClick={() => navegacao("/")}>Voltar</button>
        <h1>Deletar Produto</h1>
        <button onClick={handleDelete}>Deletar </button>
      </div>
      <h1>Editar Produtos</h1>
      <FormularioP
        produtos={produto}
        onChange={handleChange}
        onSubmit={handleSubmit}
        isEditing
        isChanged={isChanged}
      />
    </div>
  );
};
