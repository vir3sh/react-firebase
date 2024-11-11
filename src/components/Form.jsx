import React from 'react';
import './Form.css';
import { Link } from 'react-router-dom';
import profileicon from './profileicon.png'

function Form() {
  return (
    <div className="container">
      <div className="left-section">
        <form action="#">
          <label htmlFor="Name">Name</label>
          <input type="text" id="Name" />

          <label htmlFor="Email">Email</label>
          <input type="email" id="Email" />

          <label htmlFor="Password">Password</label>
          <input type="password" id="Password" />
          <p>Already have an account?<Link to="/login"> Log in</Link></p>
        
          <button type="submit">Signup</button>
        </form>
      </div>
      <div className="right-section">
        <img src={profileicon} alt="Profile icon" />
      </div>
    </div>
  );
}

export default Form;
