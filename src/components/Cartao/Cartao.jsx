import { useEffect, useState } from "react";
import { buscarProdutos } from "../../service/apiService";
import styles from "./Cartao.module.css";

export const Cartao = () => {
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
  if (loading) return <h1>Carregando...</h1>;
  return (
    <div className={styles.produto}>
      <>
        {produtos.map((produto) => (
          <p key={produto.id}>{produto.nome}</p>
        ))}
      </>
    </div>
  );
};
