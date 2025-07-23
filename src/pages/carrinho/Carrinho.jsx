import { useNavigate } from "react-router";
import { useCart } from "../../contexts/CartContext";

export const Carrinho = () => {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useCart();
  const navigate = useNavigate();
  return (
    <div>
      <h1>Carrinho</h1>
      <div>
        {cartItems.map((item) => (
          <div key={item.id}>
            <div>
              <img src={item.imagem} alt={item.name} />
              <div>
                <h1>{item.nome}</h1>
                <p>{item.valor}</p>
              </div>
            </div>
            <div>
              <button
                onClick={() => {
                  addToCart(item);
                }}
              >
                +
              </button>
              <p>{item.quantity}</p>
              <button
                onClick={() => {
                  removeFromCart(item);
                }}
              >
                -
              </button>
            </div>
          </div>
        ))}
      </div>
      {cartItems.length > 0 ? (
        <div>
          <h1>Total: R${getCartTotal()}</h1>
          <div>
            <button onClick={() => navigate("/formCompras")}>
              Finalizar compra
            </button>
          </div>
          <button
            onClick={() => {
              clearCart();
            }}
          >
            Limpar carrinho
          </button>
        </div>
      ) : (
        <h1>Seu Carrinho está vazio</h1>
      )}
    </div>
  );
};
