import React from 'react';
import logo from './icons_assets/Logo.svg';

function Nav() {
  return (
    <div className="container">
        <img src={logo} alt="Little Lemon Logo" className="logo" />

        <nav className="nav">
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order">Order Online</a></li>
            <li><a href="/login">Login</a></li>
        </nav>
    </div>
  );
}

export default Nav;
