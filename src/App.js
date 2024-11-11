import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Text from './components/Text';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Text />
      <Routes>
        {/* Route for the signup page */}
        <Route path="/" element={<Form />} />
        
        {/* Route for the login page */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
