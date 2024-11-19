import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";
import { useDispatch } from "react-redux";
import { LOGIN } from "../store/actions/common";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const abc = useSelector((state: RootState) => state.auth);
  console.log(abc, "==abc");
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: LOGIN });
    // Placeholder for login logic
    if (!email || !password) {
      setErrorMessage("Please fill in both fields.");
    } else {
      // Proceed with login (e.g., API call)
      console.log("Logging in with", { email, password });
      setErrorMessage("");
      // After successful login, redirect or handle further actions
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-title">Sign-In</h1>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="login-form">
          <div className="input-container">
            <label htmlFor="email" className="input-label">
              Email or mobile phone number
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
            />
          </div>

          <div className="input-container">
            <label htmlFor="password" className="input-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
            />
          </div>

          {/* Error message */}
          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <button type="submit" className="login-button">
            Sign In
          </button>
        </form>

        {/* Register option */}
        <p className="register-text">
          New to ShopEase?{" "}
          <Link to="/signup" className="register-link">
            Create your account
          </Link>
        </p>

        {/* Forgot Password link */}
        <p className="forgot-password">
          <Link to="/forgot-password" className="forgot-password-link">
            Forgot your password?
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
