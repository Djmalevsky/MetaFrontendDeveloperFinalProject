import React from 'react';
import logo from './icons_assets/Logo.svg';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="container">
        <img src={logo} alt="Little Lemon Logo" className="logo" />

        <nav className="nav">
            <li><a href="/">Home</a></li>
            <li><a href="/specials">Specials</a></li>
            <li><a href="/testimonials">Testimonials</a></li>
            <li><a href="/booking">Booking</a></li>
            <li><a href="/about-chicago">Chicago</a></li>
        </nav>
    </div>
  );
}

export default Nav;
