import { useState } from "react";
import { useNavigate } from "react-router";
import { criarProdutos } from "../../service/apiService";

export const Cadastro = () => {
  const navegacao = useNavigate();
  const produtoInicial = {
    nome: "",
    valor: "",
    descricao: "",
  };

  const [produto, setProdutos] = useState(produtoInicial);

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
      <button onClick={() => navegacao("/")}>Voltar</button>
      <h1>Novo Produto</h1>
      <FormularioP
        produtos={produto}
        onChange={handleChange}
        onSubmit={handleSubmit}
        isChanged={isChanged}
      />
    </div>
  );
};
