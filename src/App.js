import React, { useState, useEffect } from 'react';
import Header from './Header';
import ShoppingList from './ShoppingList';

function App() {
  const [products, setProducts] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);

  const handleAddProduct = (product) => {
    setProducts([...products, product]);
  };

  useEffect(() => {
    setShoppingList(products);
  }, [products]);

  return (
    <div>
      {/* Conteúdo do aplicativo */}
     
      <Header/>
      <ProductForm>onAddProduct={handleAddProduct}</ProductForm>
      <ProductList>products={products} </ProductList> 
      <ShoppingList>items={shoppingList} </ShoppingList>
  
    </div>
  );
}

export default App;
