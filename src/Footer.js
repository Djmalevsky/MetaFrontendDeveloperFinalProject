import React from 'react';

function Footer() {
  return (
    <footer>
        <div className="copyright">
        2023 Little Lemon. All rights reserved.
      </div>
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
        {/* ... other social media links */}
      </ul>
      <div className="Contact">
      <p>Contact</p>
        <p>Address: 123 Little Lemon</p>
        <p>Email us at: <a href="mailto:info@littlelemon.com">info@littlelemon.com</a></p>
        Call Us: <a href="tel:12355555555">123-555-5555</a>
      </div>
    </footer>
  );
}

export default Footer;
