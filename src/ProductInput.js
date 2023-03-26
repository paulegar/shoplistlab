
import React, { useState } from 'react';

function ProductInput() {
  const [productName, setProductName] = useState('');

  function handleChange(event) {
    const value = event.target.value;
    if (value.length >= 8 && value.length <= 64) {
      setProductName(value);
    }
  }

  return (
    <div>
      <label htmlFor="product-name">Nome do produto:</label>
      <input id="product-name" type="text" value={productName} onChange={handleChange} required minLength={8} maxLength={64} />
    </div>
  );
}

export default ProductInput;
