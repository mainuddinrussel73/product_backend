// src/utils/auth.js

export const isAuthenticated = () => {
    // Check if the user is logged in by verifying the token
    const token = localStorage.getItem('authToken');
    return token ? true : false;
  };
  
  export const login = (token) => {
    // Store token to signify successful login
    localStorage.setItem('authToken', token);
  };
  
  export const logout = () => {
    // Remove token to signify logout
    localStorage.removeItem('authToken');
  };
  