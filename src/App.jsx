import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LuminaLandingPage from './assets/Layouts/LuminaLandingPage';
import Login from './assets/Layouts/Login';

function App() {
  return (
    <Router>
      <Routes>
        {/* الصفحة الرئيسية للـ Landing Page */}
        <Route path="/" element={<LuminaLandingPage />} />
        
        {/* صفحة الـ Login المنفصلة */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;