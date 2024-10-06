// src/pages/ForgotPassword.js
import React, { useState,useEffect } from 'react';
import '../styles/Login.css'
import { useNavigate,Link } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Import useAuth to access context
import { auth } from '../Firebase'; // Import your auth from Firebase setup


const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const { sendPasswordResetEmail,currentUser } = useAuth();
  const navigate = useNavigate();


  useEffect(() => {
    if (currentUser) {
      navigate('/'); // Change to your preferred route
    }
  }, [currentUser, navigate]);



  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    const trimmedEmail = email.trim();

    try {
      await sendPasswordResetEmail(trimmedEmail);
      setMessage('Check your inbox for a password reset link.');
      setTimeout(() => {
        navigate('/login'); // Redirect after 5 seconds
      }, 5000);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
     
      <h1 style={{ fontSize : "20px" }}>Forgot Password</h1>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit} className="login-form">
        <div className="input-group">
          <label>Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button className="login-button" type="submit">Send Password Reset Link</button>
      </form>
      </div>
     
    </div>
  );
};

export default ForgotPassword;
