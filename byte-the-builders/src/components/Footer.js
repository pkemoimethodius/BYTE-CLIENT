// src/components/Footer.js
import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-info">
        <p>Contact us:</p>
        <div className="social-icons">
          <a href="https://facebook.com"><FaFacebook /></a>
          <a href="https://instagram.com"><FaInstagram /></a>
          <a href="https://whatsapp.com"><FaWhatsapp /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
