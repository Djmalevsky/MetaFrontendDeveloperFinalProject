import React from 'react';
import FooterImg from './icons_assets/Logo.svg';

function Footer() {
  return (
    <footer className='footer'>
      <img src={FooterImg} alt="Footer"></img>
      <ul className="Navigation">
        <p>Navigation</p>
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Menu</a></li>
        <li><a href="/reservations">Reservations</a></li>
        <li><a href="/order">Order Online</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
      <ul className="social-media">
        <p>Social Media</p>
        <li><a href="https://facebook.com/littlelemon">Facebook</a></li>
        <li><a href="https://twitter.com/littlelemon">Twitter</a></li>
      </ul>
      <ul className="Contact">
      <p>Contact</p>
        <li>Address: 123 Little Lemon</li>
        <li>Email us at: <a href="mailto:info@littlelemon.com">info@littlelemon.com</a></li>
        <li>Call Us: <a href="tel:12355555555">123-555-5555</a></li>
      </ul>
    </footer>
  );
}

export default Footer;
