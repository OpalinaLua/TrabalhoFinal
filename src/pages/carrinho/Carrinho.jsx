import { useCart } from "../../contexts/CartContext";

export const Carrinho = () => {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useCart();
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
          <h1>Total: ${getCartTotal()}</h1>
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
