// App.js
import React, { useState } from 'react';
// import Product from './components/product';
import Cart from './components/cart';
import GalaxyA14 from './components/galaxy14';
const App = () => {
  const [cart, setCart] = useState([]);
//... it is used to create a new array or object by copying the elements or properties 
//from an existing array or object. In the case of your addToCart function:
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h1>React Shopping Cart Example</h1>
      <div style={{ display: 'flex' }}>
        {/* Product List */}
        <div style={{ flex: 1 }}>
          <h2>Product List</h2>
          <GalaxyA14 addToCart={addToCart} />
          
        </div>

        {/* Shopping Cart */}
        <div style={{ flex: 1 }}>
          <Cart cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default App;
