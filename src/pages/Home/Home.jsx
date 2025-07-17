import { useEffect, useState } from "react";
import { getProduct } from "../../service/apiService";
import  Header  from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";

export const Home = () => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const data = await getProduct();
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

  if (loading) return <h1>Carregando...</h1>;

  return (
    <>
    <Header/>
      <h1>Home</h1>
      {produtos.map((produto) => (
        <p key={produto.id}>{produto.nome}</p>
      ))}
      <Footer/>
    </>
  );
};
