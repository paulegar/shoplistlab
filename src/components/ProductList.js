import React from 'react';
import PropTypes from 'prop-types';

function ProductList(props) {
  const { products } = props;

  return (
    <ul>
      {products.map((product, index) => (
        <li key={index}>{product}</li>
      ))}
    </ul>
  );
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductList;
