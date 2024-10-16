import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './home';
import Profile from './Profile';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Services from './Services'; 
import './style.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<SignUp />} /> 
          <Route path="/signin" element={<SignIn />} />  
          <Route path="/services" element={<Services />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;