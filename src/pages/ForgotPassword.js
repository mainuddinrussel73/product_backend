// src/pages/ForgotPassword.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleForgotPassword = (e) => {
    e.preventDefault();

    // Simulate sending reset link (in a real app, send to backend)
    if (email) {
      // Simulate success response
      setMessage(
        `If the email ${email} is registered, a password reset link has been sent to it.`
      );
      setEmail('');

      // Optional: Redirect user to login after a few seconds
      setTimeout(() => {
        navigate('/login');
      }, 5000);
    } else {
      setError('Please enter a valid email address.');
    }
  };

  return (
    <div>
      <h1>Forgot Password</h1>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleForgotPassword}>
        <div>
          <label>Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send Password Reset Link</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
