import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { FETCH_PRODUCTS_REQUEST } from "../store/types/getProductTypes";
import "./ProductsPage.css";

// Helper functions
const getRandomPrice = () => (Math.random() * 100).toFixed(2);
const getRandomImage = () =>
  `https://picsum.photos/400?random=${Math.floor(Math.random() * 1000)}`;

const ProductsPage: React.FC = () => {
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector(
    (state: RootState) => state.products
  );

  React.useEffect(() => {
    dispatch({ type: FETCH_PRODUCTS_REQUEST });
  }, [dispatch]);

  return (
    <div className="products-section">
      <h2>Our Products</h2>
      {loading ? (
        <p>Loading products...</p>
      ) : error ? (
        <p className="error">Error: {error}</p>
      ) : (
        <div className="grid">
          {products.map((product: any) => (
            <div key={product.id} className="card">
              <img
                src={getRandomImage()}
                alt={product.title}
                className="card-image"
              />
              <h3 className="card-title">{product.title}</h3>
              <p className="card-price">Price: ${getRandomPrice()}</p>
              <button className="buy-button">Buy Now</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
