import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ProductForm(props) {
  const [productName, setProductName] = useState('');

  const handleInputChange = (event) => {
    setProductName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (productName.trim() !== '') {
      props.onAddProduct(productName);
      setProductName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="product-name">Product Name:</label>
      <input
        type="text"
        id="product-name"
        value={productName}
        onChange={handleInputChange}
        minLength={8}
        maxLength={64}
        required
      />
      <button type="submit">Add Product</button>
    </form>
  );
}

ProductForm.propTypes = {
  onAddProduct: PropTypes.func.isRequired,
};

//testando mudanças no github
//cadê mudanças?
//alterado no github
//quero ver mudanças

export default ProductForm;
