import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("products"));
    if (savedProducts) {
      setProducts(savedProducts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const removeProduct = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  const toggleProduct = (productId, purchased) => {
    const updatedProducts = products.map((product) =>
      product.id === productId ? { ...product, purchased: purchased } : product
    );
    setProducts(updatedProducts);
  };

  const contextValues = {
    products,
    addProduct,
    removeProduct,
    toggleProduct,
  };

  return (
    <ProductContext.Provider value={contextValues}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
