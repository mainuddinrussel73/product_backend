// src/pages/Login.js
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../utils/auth';
import '../styles/Login.css';
import weblogo from '../images/logo.png'


const Login = ({ setIsAuthenticat })  => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsAuthenticat(true);
    // Example check: In real-world applications, authenticate with a backend API
    if (username === 'admin' && password === 'password') {
      login('fakeAuthToken'); // Store a token after a successful login
      navigate('/', { replace: true });
    } else {
      setError('Invalid credentials');
    }
  };


  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-logo-title" >
            {/* Logo */}
            <Link to="/">
              <img src={weblogo} alt="Book Shop Logo" className="navbar-logo" />
            </Link>
            {/* Website Title */}
            <h1 className="navbar-title">Groot Readers</h1>
        </div>
          <h2>Login</h2>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleLogin} className="login-form">
            <div className="input-group">
              <label>Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
          <p className="forgot-password">
            Forgot your password? <Link to="/forgot-password">Reset it here</Link>
          </p>
          <p className="signup-link">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
      </div>
    </div>
  );
};

export default Login;
