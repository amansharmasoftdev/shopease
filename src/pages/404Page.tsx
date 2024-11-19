import React from "react";
import { Link } from "react-router-dom";
import "./404Page.css";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const NotFoundPage: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth);
  console.log(isAuthenticated, "=====isAuthenticated on 404page");
  return (
    <div className="not-found-page">
      <div className="not-found-container">
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">
          Uh-oh, the page you're looking for isn't here!
        </h2>
        <p className="not-found-text">
          The page you were trying to view does not exist. It might have been
          removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to={isAuthenticated ? "/" : "/login"} className="not-found-link">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
