import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ServiceDetailPage from './pages/ServiceDetailPage'; 

// YENİ: Yeni səhifələr import edilir
import AboutUsPage from './pages/AboutUsPage';
import PartnersPage from './pages/PartnersPage';
import ServicesPage from './pages/ServicesPage';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-slate-950 text-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          
          {/* YENİ: Yeni səhifələr üçün route-lar əlavə edilir */}
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/services" element={<ServicesPage />} />

        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;