import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { Comment } from "../../node_modules/@types/estree/index.d";

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
          <Link to="/post-comments" className="nav-link">
            Post Comment
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
