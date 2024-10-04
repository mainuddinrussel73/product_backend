import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/" className="back-home-btn">
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
