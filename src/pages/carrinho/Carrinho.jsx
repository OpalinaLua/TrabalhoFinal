import { useNavigate } from "react-router";
import { useCart } from "../../contexts/CartContext";
import styles from "./Carrinho.module.css";

export const Carrinho = () => {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useCart();
  const navigate = useNavigate();
  return (
    <div className={styles.naosei}>
      <h1 className={styles.titulo}>Carrinho</h1>
      <div className={styles.carrinho}>
        {cartItems.map((item) => (
          <div className={styles.produto} key={item.id}>
            <div className={styles.imgcaixa}>
              <img
                className={styles.imagem}
                src={item.imagem}
                alt={item.name}
              />
            </div>
            <div className={styles.caixaNV}>
              <h1 className={styles.nome}>{item.nome}</h1>
              <p className={styles.valor}>R${item.valor}</p>
            </div>
            <div className={styles.caixaBQ}>
              <button
                className={styles.mais}
                onClick={() => {
                  addToCart(item);
                }}
              >
                +
              </button>
              <p className={styles.quantidade}>{item.quantity}</p>
              <button
                className={styles.menos}
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
        <div className={styles.caixaT}>
          <h1 className={styles.total}>Total: R${getCartTotal()}</h1>
          <button
            className={styles.limpar}
            onClick={() => {
              clearCart();
            }}
          >
            Limpar carrinho
          </button>
        </div>
      ) : (
        <h1 className={styles.vazio}>Seu Carrinho está vazio</h1>
      )}
    </div>
  );
};
