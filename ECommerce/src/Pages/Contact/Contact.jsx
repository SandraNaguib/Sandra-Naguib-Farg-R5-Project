import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import './Contact.css'

const Contact = () => {
    return (
      <>
        <div className="container-contant">
                    <div className="header">
                        <h1>Get In Touch With Us</h1>
                        <p>For More Information About Our Product & Services, Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
                    </div>
                    <div className="contact-info">
                        <div>
                        <FontAwesomeIcon icon={faMapMarkerAlt} /><h3>Address</h3>
                            <p>236 5th SE Avenue, New York NY10000, United States</p>
                        </div>
                        <div>
                        <FontAwesomeIcon icon={faPhoneAlt} />
                            <h3>Phone</h3>
                            <p>Mobile: +(<span>84</span>) 546-6789</p>
                            <p>Hotline: +(<span>84</span>) 456-6789</p>
                        </div>
                        <div>
                        <FontAwesomeIcon icon={faClock} />
                            <h3>Working Time</h3>
                            <p>Monday-Friday: 9:00 - 22:00</p>
                            <p>Saturday-Sunday: 9:00 - 21:00</p>
                        </div>
                    </div>
                    <div className="contact-form">
                        <label htmlFor="name">Your name</label>
                        <input type="text" id="name" name="name" placeholder="Abc" />
                        
                        <label htmlFor="email">Email address</label>
                        <input type="email" id="email" name="email" placeholder="Abc@def.com" />
                        
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" name="subject" placeholder="This is an optional" />
                        
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message"  placeholder="Hi! I'd like to ask about"></textarea>
                        
                        <button type="submit">Submit</button>
                    </div>
                </div>
      </>
    )
  };
  
  export default Contact;