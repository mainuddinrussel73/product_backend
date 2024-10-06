// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  onAuthStateChanged, 
  signOut, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail as firebaseSendPasswordResetEmail

 } from 'firebase/auth';
import { auth } from './Firebase';

// Create the AuthContext
const AuthContext = createContext();

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const sendPasswordResetEmail = async (email) => {
    try {
      console.log(email)
      await firebaseSendPasswordResetEmail(auth, email);
    } catch (error) {
      throw error; // Propagate error to show it in the login form
    }
  };
  // Function to set the user after login
  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setCurrentUser(userCredential.user);
      console.log(userCredential.user)
    } catch (error) {
      throw error; // Propagate error to show it in the login form
    }
  };
  // Handle email/password registration
  const signup = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setCurrentUser(userCredential.user);
    } catch (error) {
      throw error; // Handle errors such as weak password or email already in use
    }
  };
  // Handle Google login
  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setCurrentUser(result.user);
    } catch (error) {
      throw error;
    }
  };

  // Handle GitHub login
  const loginWithGitHub = async () => {
    const provider = new GithubAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setCurrentUser(result.user);
    } catch (error) {
      throw error;
    }
  };
   // Handle login and registration with Google
  const registerWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setCurrentUser(result.user);
    } catch (error) {
      throw error;
    }
  };

  // Handle login and registration with GitHub
  const registerWithGitHub = async () => {
    const provider = new GithubAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setCurrentUser(result.user);
    } catch (error) {
      throw error;
    }
  };
  // Logout function to clear user from context
  const logout = async () => {
    await signOut(auth);
    setCurrentUser(null); // Clear user from the context
  };
  function getTimeLeft(timeout) {
    return Math.ceil((timeout._idleStart + timeout._idleTimeout - Date.now()) / 1000);
  }
  useEffect(() => {
    const startSessionTimer = () => {
      // Set a session timer for 30 minutes
      const sessionTimeout = setTimeout(() => {
        logout(); // Automatically log out after session expires
        console.log(getTimeLeft(sessionTimeout))
      }, 10 * 60 * 1000); // 30 minutes

      return () => clearTimeout(sessionTimeout); // Clean up the timer
    };

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        startSessionTimer(); // Start the session timer only when user is authenticated
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });

    // Clean up the session timeout and Firebase listener on unmount
    return () => {
      unsubscribe();
      clearTimeout(startSessionTimer);
    };
  }, [logout]);

  
  // Context value that can be accessed by any component
  const value = {
    currentUser,
    login,   // Pass login function to the context
    signup,
    logout,  // Pass logout function to the context
    loginWithGoogle, // Add Google login to the context
    loginWithGitHub, // Add GitHub login to the context
    registerWithGoogle, // Add Google registration to the context
    registerWithGitHub, // Add GitHub registration to the context
    sendPasswordResetEmail,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children} {/* Prevent rendering until loading is done */}
    </AuthContext.Provider>
  );
};
