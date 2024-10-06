// src/pages/Login.js
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Login.css';
import { useAuth } from '../AuthContext'; // Import useAuth to access context
import { FaGoogle,FaGithub } from 'react-icons/fa'; // Import Google icon


const Login = ()  => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login, currentUser,loginWithGoogle, loginWithGitHub } = useAuth(); // Get the login function from the context

  useEffect(() => {
    if (currentUser) {
      navigate('/'); // Change to your preferred route
    }
  }, [currentUser, navigate]);


  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(email, password);
      console.log('User logged in:');
      navigate('/', { replace: true });

    } catch (error) {
      setError(error.message);
    }
   
  };
  const handleGoogleLogin = async () => {
    setError('');
    try {
      await loginWithGoogle();
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGitHubLogin = async () => {
    setError('');
    try {
      await loginWithGitHub();
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };



  return (
    <div className="login-container">
      <div className="login-box">
        
          <h2>Login</h2>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleLogin} className="login-form">
            <div className="input-group">
              <label>Email</label>
              <input
                type="text"
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
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
          <div className="auth-buttons">
            <button onClick={handleGoogleLogin} className="google-btn">
              <FaGoogle className="google-icon" /> Login with Google
            </button>
            <button onClick={handleGitHubLogin} className="github-btn">
              <FaGithub className="github-icon" /> Login with GitHub
            </button>
          </div>
         
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
