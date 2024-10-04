// src/pages/Signup.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../utils/auth';
import '../styles/Login.css'

const Signup = ({ setIsAuthenticat})  => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    setIsAuthenticat(true);
    // Check if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Simulate signup process and redirect after success
    const newUser = {
      username,
      email,
      password, // In a real app, never store plain passwords! Use hashing.
    };

    // Simulate saving the user (in a real app, send to backend)
    localStorage.setItem('user', JSON.stringify(newUser));

    // Log the user in by storing a token (this should be from the backend)
    login('fakeSignupToken');

    // Redirect to home page after successful signup
    navigate('/');
  };
  
  return (
    <div className="login-container">
      <div className="login-box">
      <h1>Sign Up</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSignup}  className="login-form">
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
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <div className="input-group">
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button  className="login-button" type="submit">Sign Up</button>
      </form>
      </div>
     
    </div>
  );
};

export default Signup;
