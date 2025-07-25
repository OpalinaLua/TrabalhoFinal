import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { criarProdutos } from "../../service/apiService";
import { FormularioP } from "../../components/FormularioP/FormularioP";
import styles from "./Cadastro.module.css";
import { buscarCompras } from "../../service/comprasService";

const produtoInicial = {
  nome: "",
  valor: "",
  descricao: "",
  imagem: "",
};

export const Cadastro = () => {
  const [produto, setProdutos] = useState(produtoInicial);
  const [compras, setCompras] = useState([]);
  const [loading, setLoading] = useState(true);
  const navegacao = useNavigate();

  const getCompras = async () => {
    try {
      const data = await buscarCompras();
      setCompras(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCompras();
  }, []);

  if (loading) return <h1>Carregando</h1>;

  const handleChange = (e) => {
    setProdutos({ ...produto, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await criarProdutos(produto);
    navegacao("/");
  };

  const isChanged =
    produto.nome.trim() !== produtoInicial.nome ||
    produto.valor.trim() !== produtoInicial.valor ||
    produto.descricao.trim() !== produtoInicial.descricao;

  return (
    <div>
      <h1 className={styles.titulo}>Novo Produto</h1>
      <FormularioP
        produtos={produto}
        onChange={handleChange}
        onSubmit={handleSubmit}
        isChanged={isChanged}
      />
      <button className={styles.botao} onClick={() => navegacao("/")}>
        Voltar
      </button>
      <div className={styles.container}>
        {compras.map((compra) => (
          <div key={compra.id}>
            <p className={styles.compras}>{compra.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
