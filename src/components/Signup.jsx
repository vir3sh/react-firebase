import React, { useState, useEffect } from 'react';
import './signup.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase'; // Import the auth object from firebase.js
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      await createUserWithEmailAndPassword(auth, email, password); // Use the imported auth object
      // Navigate to home page or show a success message
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        navigate("/"); // Redirect to home if the user is logged in
      }
    });

    return () => unsubscribe(); // Cleanup the listener on component unmount
  }, [navigate]);

  return (
    <div>
      <div className="container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required  
              value={email}  
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              required 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <a href="./Login">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
