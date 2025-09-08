// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';

function App() {
  return (
    // Bütün proqramı BrowserRouter ilə əhatə edirik
    <BrowserRouter>
      <div className="bg-slate-950 text-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Gələcəkdə digər səhifələr üçün marşrutlar (routes) bura əlavə olunacaq */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;