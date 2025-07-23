import React, { useState } from "react";
import styles from "./FormCompra.module.css";

export default function PaymentForm() {
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você faria a integração com o seu sistema de pagamento
    console.log("Dados do pagamento:", formData);
    alert("Pagamento enviado!");
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
              type="text"
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
              type="text"
              name="expiry"
              value={formData.expiry}
              onChange={handleChange}
              placeholder="MM/AA"
              required
            />
          </label>

          <label className={styles.titulo}>
            CVV:
            <input
              className={styles.input}
              type="text"
              name="cvv"
              placeholder="XXX"
              value={formData.cvv}
              onChange={handleChange}
              maxLength="4"
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
          <button className={styles.button} type="submit">
            Finalizar pagamento
          </button>
        </form>
      </div>
    </>
  );
}
