// GalaxyA14.js
import React from 'react';
import Product from './product';
import Galaxyphone from '../images/galaxy14.jpg';
import iphoneImage from '../images/iphone.jpg';

const GalaxyA14 = ({ addToCart }) => {
  const product1 = {
    id: 3,
    name: 'Samsung Galaxy A14 (4GB Memory)',
    price: 1437.69,
    imageSrc: Galaxyphone, 
    caption: 'Wishlist',
    description: 'No Cost EMI starts from ₹ 1437.69/month. Full HD+ Display, Triple rear camera (50MP Main), 13 MP Front, 5000mAh Battery',
  };

  const product2 = {
    id: 4,
    name: 'Apple iPhone 15 (128GB, Blue)',
    price: '71,490.00',
    imageSrc: iphoneImage, // Use forward slashes
    caption: 'Special Offer',
    description: 'Description of the second product goes here.',
  };

  return (
    <>
      <Product
        id={product1.id}
        name={product1.name}
        price={product1.price}
        addToCart={addToCart}
        imageSrc={product1.imageSrc}
        caption={product1.caption}
        description={product1.description}
      />
      <Product
        id={product2.id}
        name={product2.name}
        price={product2.price}
        addToCart={addToCart}
        imageSrc={product2.imageSrc}
        caption={product2.caption}
        description={product2.description}
      />
    </>
  );
};

export default GalaxyA14;
