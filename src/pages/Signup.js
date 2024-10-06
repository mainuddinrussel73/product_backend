// src/pages/Signup.js
import React, { useState, useEffect } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import '../styles/Login.css'
import { useAuth } from '../AuthContext'; // Import useAuth to access context
import { FaGoogle,FaGithub } from 'react-icons/fa'; // Import Google icon


const Signup = ()  => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signup, currentUser ,registerWithGoogle, registerWithGitHub} = useAuth(); // Get the login function from the context

  useEffect(() => {
    if (currentUser) {
      navigate('/'); // Change to your preferred route
    }
  }, [currentUser, navigate]);


  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      await signup(email, password);
      navigate('/');// Redirect to a protected page after successful registration
    } catch (error) {
      setError(error.message); // Display error if registration fails
    }
    
   
  };
  // Handle Google registration
  const handleGoogleRegister = async () => {
    setError('');
    try {
      await registerWithGoogle();
      navigate('/'); // Redirect after successful registration
    } catch (error) {
      setError(error.message);
    }
  };

  // Handle GitHub registration
  const handleGitHubRegister = async () => {
    setError('');
    try {
      await registerWithGitHub();
      navigate('/'); // Redirect after successful registration
    } catch (error) {
      setError(error.message);
    }
  };
  
  return (
    <div className="login-container">
      <div className="login-box">
      
      <h1>Sign Up</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSignup}  className="login-form">
       
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
      <div className="auth-buttons">
            <button onClick={handleGoogleRegister} className="google-btn">
              <FaGoogle className="google-icon" /> Register with Google
            </button>
            <button onClick={handleGitHubRegister} className="github-btn">
              <FaGithub className="github-icon" /> Register with GitHub
            </button>
      </div>

      <p className="forgot-password">
            Forgot your password? <Link to="/forgot-password">Reset it here</Link>
      </p>
      <p className="signup-link">
            Have an account? <Link to="/login">Login</Link>
      </p>
      
      </div>
     
    </div>
  );
};

export default Signup;
