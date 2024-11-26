// src/components/Navbar.js
import React from 'react';
import '../styles/Navbar.css'; // Correct path to Navbar.css

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <a href="/" className="logo">ShopNow</a>
            </div>
            <div className="navbar-center">
                <ul className="nav-links">
                    <li><a href="/products">Products</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
            <div className="navbar-right">
                <input type="text" placeholder="Search products..." className="search-input" />
                <a href="/login" className="login-button">Login</a>
            </div>
        </nav>
    );
};

export default Navbar;