import React from 'react'
import './Footer.css'
import {Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faShieldAlt, faShippingFast, faHeadset } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
      <footer>
        <div className="top-bar">
          <div className="p1"><FontAwesomeIcon icon={faTrophy} />High Quality <br />crafted from top materials</div>
          <div  className="p2"><FontAwesomeIcon icon={faShieldAlt} /> Warranty Protection <br/> Over 2 years</div>
          <div  className="p3"><FontAwesomeIcon icon={faShippingFast} /> Free Shipping <br /> Order over 150 $</div>
          <div  className="p4"><FontAwesomeIcon icon={faHeadset} /> 24 / 7 Support <br /> Dedicated support</div>
        </div>
        <div className="footer">
            <div className="container">
                <div className="column">
                    <h3>Funiro.</h3>
                    <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
                </div>
                <div className="column">
                    <h3>Links</h3>
                    <Link to="/">Home</Link>
                    <Link to="/Shop">Shop</Link>
                    <a href="#">About</a>
                    <Link to="/contact">Contact</Link>
                </div>
                <div className="column">
                    <h3>Help</h3>
                    <a href="#">Payment Options</a>
                    <a href="#">Returns</a>
                    <a href="#">Privacy Policies</a>
                </div>
                <div className="column newsletter">
                    <h3>Newsletter</h3>
                    <form>
                        <input type="email" placeholder="Enter Your Email Address"/>
                        <input type="submit" value="SUBSCRIBE"/>
                    </form>
                </div>
              </div>
            <div className="bottom-bar">
                2023 funiro. All rights reserved
            </div>
        </div>


      </footer>
    )
  };
  
export default Footer;