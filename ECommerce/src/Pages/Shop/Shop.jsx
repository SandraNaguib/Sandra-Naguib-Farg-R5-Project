import React, { useEffect, useState } from 'react';
import './Shop.css';

function Shop() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  useEffect(() => {
    // Fetch products from API
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  
  const addProductToCart = (product) => {
    setCartItems([...cartItems, { ...product, quantity: 1, visible: true }]);
    setSubtotal(subtotal + product.price);
};

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container-shop">
      <div className="product-grid">
        {currentProducts.map(products => (
          <div className="product-item" key={products.id}>
            <img src={products.image} alt="" />
            <div className="overlay">
              <button className="add-to-cart" onClick={() => addProductToCart(item)}>Add to cart</button>
            </div>
            <div className="product-info">
              <h3>{products.title}</h3>
              <p>{products.description}</p>
              <p className="price">Rp {products.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {[...Array(Math.ceil(products.length / productsPerPage)).keys()].map(number => (
          <button
            key={number + 1}
            onClick={() => paginate(number + 1)}
            className={currentPage === number + 1 ? 'active' : ''}
          >
            {number + 1}
          </button>
        ))}
        <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(products.length / productsPerPage)}>
          Next
        </button>
      </div>

     
    </div>
  );
}

export default Shop;