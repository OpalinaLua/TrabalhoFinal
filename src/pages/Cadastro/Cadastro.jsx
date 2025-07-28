import { useNavigate } from "react-router";
import { criarProdutos } from "../../service/apiService";
import { FormularioP } from "../../components/FormularioP/FormularioP";
import styles from "./Cadastro.module.css";
import { useState } from "react";

const produtoInicial = {
  nome: "",
  valor: "",
  descricao: "",
  imagem: "",
};

export const Cadastro = () => {
  const [produto, setProdutos] = useState(produtoInicial);
  const navegacao = useNavigate();

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
    </div>
  );
};
