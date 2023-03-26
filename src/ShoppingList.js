import React from 'react';
import PropTypes from 'prop-types';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
function ShoppingList(props) {
  const { products } = props;

  return (
    <div>
      <h2>Lista de Compras</h2>
      <ProductForm>onAddProduct={handleAddProduct}</ProductForm>
      <ProductList>products={products} </ProductList> 
    </div>
  );
}

ShoppingList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ShoppingList;


