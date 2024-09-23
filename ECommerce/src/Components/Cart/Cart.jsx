import React, { useState, useHistory } from "react";



const Cart = () => {
  
  const [cartItems, setCartItems] = useState();

  const history = useHistory();

  const handleCheckout = () => {
    history.push('/checkout');
  };

  const toggleVisibility = (id) => {
    setCartItems(product.map(item => item.id === id ? { ...item, visible: !item.visible } : item));
};

    return (
      <>
     
     <div className="shopping-cart">
                        <h1>Shopping Cart</h1>
                        {cartItems.map(item => (
                            <div className="cart-item" key={item.id}>
                                <img src={item.image} alt={`Image of ${item.name}`} />
                                <div className="cart-item-details">
                                    <h2>{item.name}</h2>
                                    <p>1 x <span className="price">Rs. {item.price.toLocaleString()}</span></p>
                                </div>
                                <i className="fas fa-eye" onClick={() => toggleVisibility(item.id)}></i>
                            </div>
                        ))}
                        <div className="subtotal">
                            <span>Subtotal</span>
                            <span className="price">Rs. {subtotal.toLocaleString()}</span>
                        </div>
                        <div className="cart-button">
                            <button className="checkout-btn" onClick={handleCheckout}>
                                Check Out
                            </button>                        
                        </div>
                    </div>      
    </>
    );
  };
  
  export default Cart;