import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="container">
          <div className="row">
            <div className="footer-col ft-1">
              <h3><span>Tipsy</span>Alley GH</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ea quo ex ullam laboriosam magni totam, facere eos iure voluptate.</p>
              <div className="social">
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-whatsapp"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
            <div className="footer-col ft-2">
              <h5>Quick Links</h5>
              <ul>
                <li className="nav-item"><a href="./Home">Home</a></li>
                <li className="nav-item"><a href="./about">About Us</a></li>
                <li className="nav-item"><a href="./product">Products</a></li>
                <li className="nav-item"><a href="./events">Events</a></li>
                <li className="nav-item"><a href="./contact">Contact Us</a></li>
              </ul>
            </div>
            <div className="footer-col ft-2">
              <h5>Products</h5>
              <ul>
                <li className="nav-item"><a href="/">Cocktails</a></li>
                <li className="nav-item"><a href="/">Mocktails</a></li>
                <li className="nav-item"><a href="/">Boba Drinks</a></li>
              </ul>
            </div>
            <div className="footer-col ft-3">
              <h5>Contact Us</h5>
              <p><i className="fa-solid fa-phone-volume"></i> +233 555 555 555</p>
              <p><i className="fa-solid fa-envelope"></i> tipsyalley@gmail.com</p>
              <p><i className="fa-solid fa-location"></i> University of Ghana, Legon.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p className='copytext'>&copy; {new Date().getFullYear()} Tipsy Alley. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
