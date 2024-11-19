import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import Player from "lottie-react"; // Default import
import loadingAnimation from "../assets/Animation - 1732012299691.json";

const GlobalLoader: React.FC = () => {
  const { loading } = useSelector((state: RootState) => state.loader);

  if (!loading) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <Player
        autoplay
        loop
        animationData={loadingAnimation} // Use the imported JSON object
        style={{ height: "150px", width: "150px" }}
      />
    </div>
  );
};

export default GlobalLoader;
