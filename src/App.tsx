import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import PostPage from "./pages/PostPage";
import GlobalLoader from "./component/Loader";
import Home from "./pages/Home";
import Cart from "./pages/CartPage";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <GlobalLoader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
