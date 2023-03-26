import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = 'Carrinho de Compras';
  }, []);

  return (
    <div>
      {/* Conteúdo do aplicativo */}
    </div>
  );
}

export default App;
