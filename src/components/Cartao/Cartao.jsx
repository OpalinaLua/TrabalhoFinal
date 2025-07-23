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
  console.log(produtos);

  useEffect(() => {
    getData();
  }, []);
  if (loading) return <h1>Carregando...</h1>;
  return (
    <>
      {produtos.map((produto) => (
        <div key={produto.id} className={styles.cartao}>
          <div className={styles.imgConteiner}>
            <img
              src={produto.imagem}
              alt={produto.nome}
              className={styles.imagem}
            />
          </div>
          <div className={styles.cartao2}>
            <p className={styles.nome}>{produto.nome}</p>
            <p className={styles.valor}>R${produto.valor}</p>
          </div>
          <p className={styles.descricao}>{produto.descricao}</p>
        </div>
      ))}
    </>
  );
};
