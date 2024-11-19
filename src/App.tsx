import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import "./App.css";
import Header from "./component/Header";
import GlobalLoader from "./component/Loader";
import Home from "./pages/Home";
import Cart from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import PostPage from "./pages/PostPage";
import NotFoundPage from "./pages/404Page";

const App: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth);

  return (
    <Router>
      <div className="App">
        {/* Show Header only when the user is authenticated */}
        {isAuthenticated && <Header />}
        <GlobalLoader />
        <Routes>
          {/* Protected Routes */}
          {isAuthenticated ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/posts" element={<PostPage />} />
              {/* Fallback for authenticated users */}
              <Route path="/login" element={<Navigate to="/" />} />
            </>
          ) : (
            <>
              {/* Public Routes */}
              <Route path="/login" element={<LoginPage />} />
              {/* Redirect all other paths to login */}
            </>
          )}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
