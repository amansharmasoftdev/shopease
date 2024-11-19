import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import {
  FaShoppingCart,
  FaHome,
  FaBox,
  FaGem,
  FaPlusCircle,
  FaComment,
  FaSignOutAlt,
} from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { LOGOUT } from "../store/actions/common";

const Header: React.FC = () => {
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({ type: LOGOUT });
    setShowLogoutPopup((prev) => !prev);
  };

  const toggleLogoutPopup = () => {
    setShowLogoutPopup((prev) => !prev);
  };

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

        {/* Logout Icon */}
        <div className="cart">
          <FaSignOutAlt size={24} onClick={toggleLogoutPopup} />
        </div>

        {/* Logout Confirmation Popup */}
        {showLogoutPopup && (
          <div className="logout-popup">
            <div className="popup-content">
              <h3>Are you sure you want to log out?</h3>
              <div className="popup-actions">
                <button onClick={handleLogout}>Yes, Log Out</button>
                <button onClick={toggleLogoutPopup}>Cancel</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
