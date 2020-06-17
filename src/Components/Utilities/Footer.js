import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">

                <div className="footer-section links">
                    <img src={"https://cdn0.iconfinder.com/data/icons/computer-and-hardware-free/32/Computer__Computer_Hardware_SSD_Storage_Technology-512.png"} height={"60rem"} width={"60rem"} alt="hellp" />
                    <h2 className="gridHeader">Innovation is key.</h2>
                    <br></br>
                    <ul id="footer-links">
                        <Link to={"/"}><li>Home</li></Link>
                        <Link to={"/products"}><li>Products</li></Link>
                        <Link to={"/contact"}><li>Contact</li></Link>
                    </ul>
                </div> <div className="footer-section about">
                    <h1 className="logo-text"><span>Titan</span>Solutions.</h1>
                    <p className="descriptionStyling">Our company is dedicated to offering home automation products
                        that are designed to make daily life easier.
                    </p>
                    <div className="contact">
                        <span><i className="fa fa-phone"></i>  704-9320-22</span>
                        <span><i className="fa fa-envelope-square"></i>  hi@gmail.com</span>
                        <span><i className="fa fa-address-card"></i>  123 Main Street</span>
                    </div>
                    <div className="socials">
                        <Link to={"https://www.facebook.com"}><i className="fa fa-facebook-f"></i></Link>
                        <a href="{https://www.instagram.com/}"><i className="fa fa-instagram"></i></a>
                        <a href="{https://www.twitter.com/}"><i className="fa fa-twitter"></i></a>
                    </div>
                </div>
                <div className="footer-section contact-form">
                    <h2>Contact Us</h2>
                    <br></br>
                    <form action="#">
                        <input type="email" name="email" className="text-input contact-input" placeholder="Your email address is..."></input>
                        <textarea name="message" className="text-input contact-input" placeholder="Your message..."></textarea>
                        <button type="submit" className="btn-form">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Footer;