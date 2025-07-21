import React, { useState } from 'react';

export default function PaymentForm() {
  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você faria a integração com o seu sistema de pagamento
    console.log('Dados do pagamento:', formData);
    alert('Pagamento enviado!');
  };

  return (
    <div style={styles.container}>
      <h2>Formulário de Pagamento</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label>
          Nome no Cartão:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Número do Cartão:
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            maxLength="16"
            required
          />
        </label>

        <label>
          Validade (MM/AA):
          <input
            type="text"
            name="expiry"
            value={formData.expiry}
            onChange={handleChange}
            placeholder="MM/AA"
            required
          />
        </label>

        <label>
          CVV:
          <input
            type="password"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            maxLength="4"
            required
          />
        </label>

        <button type="submit">Pagar</button>
      </form>
    </div>
  );
}






/*export const FormCompra = () => {
    return (
        <>
        <form action="">
            <div>
                <input type="text" />
            </div>
            <select name="pagamentos" id="asda">
                <option value="">pix</option>
                <option value="">debito</option>
                <option value="">credito</option>
                <option value="">boleto</option>
                <option value="">paypal</option>
                
                
            </select>
            <div>
                <input type="text" />
            </div>
            <div>
                <input type="text" />
            </div>
            <div>
                <input type="text" />
            </div>
            <div>
                <input type="text" />
            </div>
            <div>
                <input type="text" />
            </div>
            <button>Finalizar compra</button>
        </form>
        </>
    )
}
*/