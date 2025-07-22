import { createContext } from "react";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, cleanCart, getCartTotal }}
    >
      {children}1
    </CartContext.Provider>
  );
};

export const useCard = () => useContext(CardContext);
