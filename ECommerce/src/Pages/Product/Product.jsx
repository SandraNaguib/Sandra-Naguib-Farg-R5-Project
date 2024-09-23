import React, { useEffect, useState } from "react";
import './Product.css'
const Product = ({ match }) => {
  const [product, setProduct] = useState(null);
  

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/1')
    .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);


   

 

  return (
    <div className="container-product">
      <div className="productdetail">
        <span>{Product.name}</span>
      </div>
      <div className="product-page">
        <div className="product-images">
          <img src={Product.image} alt={Product.name} />
          <div className="thumbnail-images">
            {Product.image.map((image, index) => (
              <img key={index} src={image} alt={`${Product.name} thumbnail ${index + 1}`} />
            ))}
          </div>
        </div>
        <div className="product-details">
          <h1>{Product.name}</h1>
          <div className="price">Rs. {Product.price}</div>
          <div className="rating">
            {[...Array(5)].map((_star, index) => (
              <i key={index} className={`fas fa-star${index < Product.rating ? '' : '-half-alt'}`}></i>
            ))}
            <span>{Product.reviews} Customer Review</span>
          </div>
          <p>{Product.description}</p>
          <div className="size">
            <span>Size</span>
            {Product.sizes.map((size, index) => (
              <button key={index} className={size === 'S' ? 'active' : ''}>{size}</button>
            ))}
          </div>
          <div className="color">
            <span>Color</span>
            {Product.colors.map((color, index) => (
              <button key={index} style={{ backgroundColor: color }} className={color === '#4b0082' ? 'active' : ''}></button>
            ))}
          </div>
          <div className="quantity">
            <span>Quantity</span>
            <button>-</button>
            <input type="text" value="1" readOnly />
            <button>+</button>
          </div>
          <button className="add-to-cart">Add To Cart</button>
          <div className="meta">
            <span>Category: {product.category}</span>
            <span>Tags: {product.tags.join(', ')}</span>
          </div>
          <div className="share">
            <span>Share</span>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>
      <div className="description">
        <h2>Description</h2>
        <p>{Product.longDescription}</p>
      </div>
    </div>
  );
};

export default Product;

function fetchProduct() {
  throw new Error("Function not implemented.");
}
