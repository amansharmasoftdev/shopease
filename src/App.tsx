import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import ProductsPage from "./pages/ProductsPage";
import JewelryPage from "./pages/JewelryPage";
import AddProductPage from "./pages/AddProductPage";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/jewelry" element={<JewelryPage />} />
          <Route path="/add-product" element={<AddProductPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
