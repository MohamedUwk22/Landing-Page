import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LuminaLandingPage from './assets/Layouts/LuminaLandingPage';
import Login from './assets/Layouts/Login';

function App() {
  return (
    <Router basename="/Landing-Page">
      <Routes>
        <Route path="/" element={<LuminaLandingPage />} />        
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;