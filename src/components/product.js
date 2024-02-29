// Product.js
import React from 'react';

const Product = ({ id, name, price, addToCart, imageSrc, description, caption }) => {
  return (
    <div>
      <h3>{name}</h3>
      <img src={imageSrc} alt={name} style={{ maxWidth: '100%', height: 'auto' }} />
      <p>{description}</p>
      <p>Price: ${price}</p>
      <button onClick={() => addToCart({ id, name, price, imageSrc, description, caption })}>Add to Cart</button>
    </div>
  );
};

export default Product;
