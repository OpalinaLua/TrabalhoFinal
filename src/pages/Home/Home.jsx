import { useEffect, useMemo, useState } from "react";
import { buscarProdutos } from "../../service/apiService";

export const Home = ({ search }) => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const data = await buscarProdutos();
      setProdutos(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const produtosFiltrados = useMemo(() => {
    if (!search.trim()) {
      return produtos;
    }
    return produtos.filter((produto) => {
      const pesquisaMinuscula = search.toLowerCase();
      return produto.nome.toLowerCase().includes(pesquisaMinuscula);
      // || produto.categoria.toLowerCase().includes(pesquisaMinuscula)
    });
  }, [search, produtos]);

  if (loading) return <h1>Carregando...</h1>;

  return (
    <>
      {produtosFiltrados.map((produto) => (
        <p key={produto.id}>{produto.nome}</p>
      ))}
    </>
  );
};
