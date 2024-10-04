// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth';

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    // Redirect to login page if not authenticated
    return <Navigate to="/login" />;
  }

  // If authenticated, render the protected page (e.g., Home)
  return children;
};

export default ProtectedRoute;
