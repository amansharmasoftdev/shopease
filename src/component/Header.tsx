import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import {
  FaShoppingCart,
  FaHome,
  FaBox,
  FaGem,
  FaPlusCircle,
  FaComment,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Header: React.FC = () => {
  const { cartItems, loading, error } = useSelector(
    (state: RootState) => state.cart
  );
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/" className="logo-link">
            <h1>ShopEase</h1>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="nav-links">
          <Link to="/" className="nav-link">
            <FaHome className="nav-icon" />
            Home
          </Link>
          <Link to="/products" className="nav-link">
            <FaBox className="nav-icon" />
            Products
          </Link>
          <Link to="/jewelry" className="nav-link">
            <FaGem className="nav-icon" />
            Jewelry
          </Link>
          <Link to="/add-product" className="nav-link">
            <FaPlusCircle className="nav-icon" />
            Add Product
          </Link>
          <Link to="/post-comments" className="nav-link">
            <FaComment className="nav-icon" />
            Comments
          </Link>
        </nav>

        {/* Cart Icon */}
        <div className="cart">
          <Link to="/cart" className="cart-link">
            <FaShoppingCart size={24} />
            {cartItems?.length && (
              <span className="cart-count">{cartItems?.length}</span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
