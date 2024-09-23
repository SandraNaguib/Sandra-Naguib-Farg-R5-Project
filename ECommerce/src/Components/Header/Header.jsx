import React from "react";
import { Link } from "react-router-dom";
import '../Header/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {


  const { useState } = React;
  const [cartOpen, setCartOpen] = useState(false);

      const toggleCart = () => {
          setCartOpen(!cartOpen);
      };

    return (
      <>
      <div className="Header">
        <header className="header">
          <div className="logo">Furniro</div>
          <nav className="nav">
            <Link className="navlink1" to="/">Home</Link>
            <Link className="navlink2" to="/Shop">Shop</Link>
            <Link className="navlink3" to="/contact">Contact</Link>
          </nav>
          <div className="cart" onClick={toggleCart}>
            <FontAwesomeIcon icon={faShoppingCart} />
        </div>
      </header>

      <div className={`cart-slide ${cartOpen ? 'open' : ''}`}>
          <h2>Shopping Cart</h2>
          <FontAwesomeIcon icon={faRectangleXmark} />
          <p>Your cart is currently empty.</p>
          <button><Link to="/Checkout">Cart</Link></button>
      </div>
    </div>

     

      </>
    );
  };
  
  export default Header;