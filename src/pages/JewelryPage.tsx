import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { FETCH_JEW_REQUEST } from "../store/types/getJewType";
import "./JewelryPage.css";

// Helper functions
const getRandomPrice = () => (Math.random() * 100).toFixed(2);
const getRandomImage = () =>
  `https://picsum.photos/400?random=${Math.floor(Math.random() * 1000)}`;

const JewelryPage: React.FC = () => {
  const dispatch = useDispatch();
  const { loading, error, Jew } = useSelector(
    (state: RootState) => state.getJew
  );

  React.useEffect(() => {
    dispatch({ type: FETCH_JEW_REQUEST });
  }, [dispatch]);

  return (
    <div className="jewelry-section">
      <h2>Jewelry Collection</h2>
      {loading ? (
        <p>Loading jewelry...</p>
      ) : error ? (
        <p className="error">Error: {error}</p>
      ) : (
        <div className="grid">
          {Jew.map((item: any) => (
            <div key={item.id} className="card">
              <img
                src={getRandomImage()}
                alt={item.title}
                className="card-image"
              />
              <h3 className="card-title">{item.title}</h3>
              <p className="card-price">Price: ${getRandomPrice()}</p>
              <button className="buy-button">Buy Now</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JewelryPage;
