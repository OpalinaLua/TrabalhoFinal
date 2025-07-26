import { useEffect, useState } from "react";
import { buscarCompras } from "../../service/comprasService";
import styles from "./CartaoCompra.module.css";

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

  if (loading) return <h1>Carregando</h1>;
  return (
    <>
      {compras.map((compra) => (
        <div className={styles.container}>
          <div key={compra.id}>
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
          </div>
        </div>
      ))}
    </>
  );
};
