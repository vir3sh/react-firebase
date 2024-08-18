import React from 'react';
import './login.css'; // Import the CSS file
import { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword ,onAuthStateChanged} from 'firebase/auth';
import { auth } from '../firebase'; // Import the auth object from firebase.js

function Login() {
  const[email, setEmail] =useState();
  const[password,setPassword]=useState();
  const navigate=useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      await signInWithEmailAndPassword(auth, email, password); // Use the imported auth object
      // Navigate to home page or show a success message
    } catch (error) {
      console.error("Error Logging in:", error.message);
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
    <div className="container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required  value={email} onChange={(e) =>{setEmail(e.target.value)}} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        </div>
        <button type="submit" onClick={handleLogin}>Login</button>
      </form>
      <p>
        Don't have an account? <a href="./Signup">Sign up</a>
      </p>
    </div>
  )
}

export default Login;
