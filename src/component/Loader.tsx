// GlobalLoader.tsx
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import CircularProgress from "@mui/material/CircularProgress";

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
      <CircularProgress color="inherit" />
    </div>
  );
};

export default GlobalLoader;
