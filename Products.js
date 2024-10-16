// Products.js
import React from 'react';
import './Products.css'; // Add styling here

const Products = () => {
  // Sample product data; you can replace this with dynamic data from a database or API
  const productList = [
    { id: 1, name: 'Handloom Silk Saree', price: '$120', imgSrc: '/path/to/image1.jpg' },
    { id: 2, name: 'Handwoven Cotton Scarf', price: '$45', imgSrc: '/path/to/image2.jpg' },
    { id: 3, name: 'Handcrafted Tote Bag', price: '$70', imgSrc: '/path/to/image3.jpg' },
    { id: 4, name: 'Traditional Wool Shawl', price: '$95', imgSrc: '/path/to/image4.jpg' }
  ];

  return (
    <section className="products-section">
      <h2>Our Products</h2>
      <div className="products-container">
        {productList.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.imgSrc} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
