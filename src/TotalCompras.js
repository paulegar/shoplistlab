import React from 'react';

function TotalCompras({ totalCompras }) {
  return (
    <p>
      Total de Compras: <strong>R${totalCompras.toFixed(2)}</strong>
    </p>
  );
}

export default TotalCompras;
