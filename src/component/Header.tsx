import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FaShoppingCart } from "react-icons/fa";

const Header: React.FC = () => {
  const cartItemCount = 3; // Replace this with dynamic data from your state or context

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/" className="logo-link">
            <h1>ShopEase</h1>
            <p className="tagline">Your one-stop shopping destination</p>
          </Link>
        </div>

        <nav className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
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
            Comments
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </nav>

        <div className="cart">
          <Link to="/cart" className="cart-link">
            <FaShoppingCart size={24} />
            {cartItemCount > 0 && (
              <span className="cart-count">{cartItemCount}</span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
