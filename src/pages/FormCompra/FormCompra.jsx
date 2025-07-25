import { useState } from "react";
import styles from "./FormCompra.module.css";
import { criarCompras } from "../../service/comprasService";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from "../../contexts/CartContext";

export default function PaymentForm() {
  const navegacao = useNavigate();
  const { clearCart, cartItems } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    cidade: "",
    estado: "",
    endereco: "",
    cep: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formCompra = {
      ...formData,
      carrinho: cartItems,
    };
    try {
      await criarCompras(formCompra);
      toast.success("Compra finalizada com sucesso");
      setTimeout(() => {
        navegacao("/");
        clearCart();
      }, 1500);
    } catch (error) {
      console.error(error);
      toast.error("Erro ao finalizar a compra");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.titulo}>Formulário de Pagamento</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.titulo}>
            Nome do titular:
            <input
              className={styles.input}
              type="text"
              name="name"
              placeholder="Nome completo"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label className={styles.titulo}>
            Número do Cartão:
            <input
              className={styles.input}
              type="number"
              name="cardNumber"
              placeholder="XXXX XXXX XXXX XXXX"
              value={formData.cardNumber}
              onChange={handleChange}
              maxLength="16"
              required
            />
          </label>

          <label className={styles.titulo}>
            Validade (MM/AA):
            <input
              className={styles.input}
              type="number"
              name="expiry"
              value={formData.expiry}
              onChange={handleChange}
              placeholder="MM/AA"
              maxLength="4"
              required
            />
          </label>

          <label className={styles.titulo}>
            CVV:
            <input
              className={styles.input}
              type="number"
              name="cvv"
              placeholder="XXX"
              value={formData.cvv}
              onChange={handleChange}
              maxLength="3"
              required
            />
          </label>
          <label className={styles.titulo}>
            Estado:
            <input
              className={styles.input}
              type="text"
              name="estado"
              placeholder="São Paulo"
              value={formData.estado}
              onChange={handleChange}
              required
            />
          </label>
          <label className={styles.titulo}>
            Cidade:
            <input
              className={styles.input}
              type="text"
              name="cidade"
              placeholder="São Paulo"
              value={formData.cidade}
              onChange={handleChange}
              required
            />
          </label>
          <label className={styles.titulo}>
            Endereço:
            <input
              className={styles.input}
              type="text"
              name="endereco"
              placeholder="Bairro, Rua, Nº"
              value={formData.endereco}
              onChange={handleChange}
              required
            />
          </label>
          <label className={styles.titulo}>
            CEP:
            <input
              className={styles.input}
              type="text"
              name="cep"
              placeholder="XXXXX-XXX"
              value={formData.cep}
              onChange={handleChange}
              maxLength="8"
              required
            />
          </label>
          <button className={styles.botao} type="submit">
            Finalizar pagamento
          </button>
        </form>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </>
  );
}
