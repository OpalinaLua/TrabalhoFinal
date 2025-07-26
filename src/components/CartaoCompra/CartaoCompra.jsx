import { useEffect, useState } from "react";
import { buscarCompras, deletarCompra } from "../../service/comprasService";
import styles from "./CartaoCompra.module.css";
import { useParams } from "react-router";

export const CartaoCompras = ({ compra }) => {
  const [compras, setCompras] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const handleDelete = async (compraID) => {
    const confirm = window.confirm(
      "Tem certeza que deseja deletar essa compra?"
    );

    if (confirm) {
      try {
        await deletarCompra(String(compraID));
        getCompras();
      } catch (error) {
        console.error(error);
      }
    }
  };

  if (loading) return <h1>Carregando</h1>;
  return (
    <>
      {compras.map((compra) => (
        <div key={compra.id} className={styles.container}>
          <div>
            <p className={styles.compras}>
              <strong>Nome: </strong> {compra.name}
            </p>
            <p className={styles.compras}>
              <strong>Número do cartão: </strong>
              {compra.cardNumber}
            </p>
            <p className={styles.compras}>
              <strong>Data de Validade: </strong>
              {compra.expiry}
            </p>
            <p className={styles.compras}>
              <strong>CVV: </strong> {compra.cvv}
            </p>
            <p className={styles.compras}>
              <strong>Cidade: </strong>
              {compra.cidade}
            </p>
            <p className={styles.compras}>
              <strong>Estado: </strong> {compra.estado}
            </p>
            <p className={styles.compras}>
              <strong>Endereço: </strong> {compra.endereco}
            </p>
            <p className={styles.compras}>
              <strong>CEP: </strong> {compra.cep}
            </p>
            {compra.carrinho.map((item) => (
              <div key={item.id}>
                <p>
                  <strong>Produto: </strong>
                  {item.nome}
                </p>
                <p>
                  <strong>Valor: </strong>
                  {item.valor}
                </p>
                <p>
                  <strong>Quantidade: </strong>
                  {item.quantity}
                </p>
              </div>
            ))}
            <button
              className={styles.delete}
              onClick={() => handleDelete(compra.id)}
            >
              Deletar
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
