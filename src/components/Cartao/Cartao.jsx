import { useEffect, useMemo, useState } from "react";
import { buscarProdutos } from "../../service/apiService";
import styles from "./Cartao.module.css";
import { useCart } from "../../contexts/CartContext";
import { Link } from "react-router";

export const Cartao = ({ search }) => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

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

  const produtosFiltrados = useMemo(() => {
    if (!search.trim()) {
      return produtos;
    }
    return produtos.filter((produto) => {
      const searchLower = search.toLowerCase();
      return (
        produto.nome.toLowerCase().includes(searchLower) ||
        produto.descricao.toLowerCase().includes(searchLower)
      );
    });
  }, [search, produtos]);

  useEffect(() => {
    getData();
  }, []);
  if (loading) return <h1>Carregando...</h1>;
  return (
    <>
      {produtosFiltrados.map((produto) => (
        <div key={produto.id} className={styles.cartao}>
          <div className={styles.imgConteiner}>
            <img
              src={produto.imagem}
              alt={produto.nome}
              className={styles.imagem}
            />
          </div>
          <div className={styles.caixa}>
            <p className={styles.nome}>{produto.nome}</p>
            <p className={styles.valor}>R${produto.valor}</p>
          </div>
          <p className={styles.descricao}>{produto.descricao}</p>
          <div className={styles.caixabotoes}>
            <button className={styles.botao} onClick={() => addToCart(produto)}>
              Adicionar ao carrinho
            </button>
            <Link className={styles.editar} to={`/edicao/${produto.id}`}>
              Editar
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};
