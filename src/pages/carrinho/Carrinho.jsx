import { useEffect, useState } from "react";

export const Carrinho = () => {
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );

  const addToCart = (item) => {
    const isItemInCart = cartitems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItem.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  return (
    <div>
      <h1>Carrinho</h1>
      <div>
        {cartItems.map((item) => (
          <div key={item.id}>
            <div>
              <img src={item.thumbnail} alt={item.title} />
              <div>
                <h1>{item.title}</h1>
                <p>{item.price}</p>
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
