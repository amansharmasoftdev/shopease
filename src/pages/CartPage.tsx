import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./CartPage.css";
import { RootState } from "../store/store";
import { clearCart, removeFromCart } from "../store/actions/cartAction";
import { Product } from "../store/types/cartType";

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state: RootState) => state.cart);

  const handleRemoveFromCart = (item: Product) => {
    dispatch(removeFromCart(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2>Your Cart is Empty</h2>
          <p>Add some items to your cart to see them here!</p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="cart-item-img"
                />
                <div className="cart-item-details">
                  <h3>{item.title}</h3>
                  <p>${item.price.toFixed(2)}</p>
                  <button
                    className="remove-btn"
                    onClick={() => handleRemoveFromCart(item)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Total: ${calculateTotal()}</h3>
            <button className="clear-cart-btn" onClick={handleClearCart}>
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
