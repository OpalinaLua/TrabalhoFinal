import { useState } from "react";

export const Carrinho = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  const onAddProduct = (productToAdd) => {
    const productExists = allProducts.find(
      (item) => item.id === productToAdd.id
    );

    if (productExists) {
      const updatedProducts = allProducts.map((item) =>
        item.id === productToAdd.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setAllProducts(updatedProducts);
    } else {
      setAllProducts([...allProducts, { ...productToAdd, quantity: 1 }]);
    }

    setTotal((prevTotal) => prevTotal + productToAdd.price);
    setCountProducts((prevCount) => prevCount + 1);
  };

  const onDeleteProduct = (productToRemove) => {
    const productInCart = allProducts.find(
      (item) => item.id === productToRemove.id
    );

    if (productInCart.quantity > 1) {
      const updatedProducts = allProducts.map((item) =>
        item.id === productToRemove.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      setAllProducts(updatedProducts);
    } else {
      const filteredProducts = allProducts.filter(
        (item) => item.id !== productToRemove.id
      );
      setAllProducts(filteredProducts);
    }

    setTotal((prevTotal) => prevTotal - productToRemove.price);
    setCountProducts((prevCount) => prevCount - 1);
  };

  const onCleanCart = () => {
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
  };

  return (
    <div>
      <h1>Meu Carrinho ({countProducts} itens)</h1>
      <button onClick={onCleanCart}>Limpar Carrinho</button>

      {allProducts.length === 0 ? (
        <p>Seu carrinho está vazio!</p>
      ) : (
        <div>
          {allProducts.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ccc",
                margin: "10px",
                padding: "10px",
              }}
            >
              <h3>{product.name}</h3>
              <p>Preço unitário: R${product.price.toFixed(2)}</p>
              <p>Quantidade: {product.quantity}</p>
              <p>Subtotal: R${(product.price * product.quantity).toFixed(2)}</p>
              <button onClick={() => onDeleteProduct(product)}>
                Remover 1
              </button>
              {}
            </div>
          ))}
          <h2>Total do Carrinho: R${total.toFixed(2)}</h2>
        </div>
      )}
      {}
      {}
    </div>
  );
};
