import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import PostPage from "./pages/PostPage";
import GlobalLoader from "./component/Loader";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <GlobalLoader />

        <Header />
        <Routes>
          <Route path="/home" element={<PostPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
