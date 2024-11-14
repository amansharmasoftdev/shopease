import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <h1>ShopEase</h1>
          <p>Your go-to shopping platform</p>
        </div>
        <nav className="nav-links">
          <Link to="/products" className="nav-link">
            Products
          </Link>
          <Link to="/jewelry" className="nav-link">
            Jewelry
          </Link>
          <Link to="/add-product" className="nav-link">
            Add Product
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
