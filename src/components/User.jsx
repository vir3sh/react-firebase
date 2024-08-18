import React, { useState,useEffect } from 'react';
import './user.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';

function User() {

  const [user,setUser] =useState();
  const navigate =useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) setUser(currentUser);
      else navigate ("/login");
    });
    return () => unsubscribe(); // Cleanup the listener on component unmount
    }, [navigate]);
    const handleSignOut = async () => {
     
  
      try {
        await signOut(auth); // Use the imported auth object
        navigate("/login")
      } catch (error) {
        console.error("Error signing Out:", error.message);
      }
    };

 
  return (
    <div>
      <div className="container">
        {/* <h2>User Profile</h2> */}
        <h1>Welcome {user ? user.email : 'Guest'}</h1>
        <button onClick={handleSignOut}>Sign Out</button>
        {/* Add more user details here */}
      </div>
    </div>
  );
}
export default User;
