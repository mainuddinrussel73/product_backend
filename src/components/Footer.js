import React from "react";
import '../styles/Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h2>Not so Good Readers</h2>
            <p>
              Discover your next great read at Not so Good Readers. We offer a wide range of books from classics to the latest releases. Join our community of book lovers!
            </p>
            <div className="socials">
              <a href="https://www.facebook.com/"><FaFacebookF /></a>
              <a href="https://www.facebook.com/"><FaTwitter /></a>
              <a href="https://www.facebook.com/"><FaInstagram /></a>
              <a href="https://www.facebook.com/"><FaLinkedin /></a>
            </div>
          </div>

          <div className="footer-section links">
            <h3 >Quick Links</h3>
            <ul>
              <li> 
                <Link  className='nav-item' to="/" >
                Home
                </Link>
              </li>
              <li>
                <Link  className='nav-item' to="/about" >
                About
                </Link>
              </li>
              <li>
                <Link  className='nav-item' to="/blog" >
                Blog
                </Link>
              </li>
              <li>
                <Link  className='nav-item' to="/faq" >
                FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-section contact">
            <h3>Contact Us</h3>
            <p><strong>Address:</strong> 123 Book St, Fictional City, 45678</p>
            <p><strong>Email:</strong> info@notsogoodreaders.com</p>
            <p><strong>Phone:</strong> +1 (123) 456-7890</p>
          </div>
          <div className="footer-section subscribe">
            <h3>Subscribe to Our Newsletter</h3>
            <p>Stay updated on new arrivals, promotions, and events. Sign up today!</p>
            <form className="subscribe-form">
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Book Shop | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
