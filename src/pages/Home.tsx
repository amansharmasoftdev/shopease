import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Home.css";
import { RootState } from "../store/store";
import { getProductTypes } from "../store/types/productType";
import { cartTypes, Product } from "../store/types/cartType";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );
  const { cartItems, loading: cartLoading } = useSelector(
    (state: RootState) => state.cart
  );
  const isAuthenticated = useSelector((state: RootState) => state.auth);
  console.log(isAuthenticated, "==isAuthenticated on home page");

  console.log(cartLoading, "==cartLoading");
  //   const cart = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch({ type: getProductTypes.GET_PRODUCTS_REQUEST });
  }, [dispatch]);

  const handleAddToCart = (product: Product) => {
    dispatch({
      type: cartTypes.ADD_TO_CART,
      payload: product,
    });
  };

  //   if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="home-container">
      <h1 className="home-title">Shop Our Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <div className="product-info">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-category">{product.category}</p>
              <p className="product-price">${product.price.toFixed(2)}</p>
              <p className="product-rating">
                Rating: {product.rating.rate} ({product.rating.count})
              </p>
              <button
                className="add-to-cart-button"
                onClick={() => handleAddToCart(product)}
              >
                {cartLoading ? "Loading" : "Add to Cart"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
