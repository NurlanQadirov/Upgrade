import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ServiceDetailPage from './pages/ServiceDetailPage'; 
import AboutUsPage from './pages/AboutUsPage';
import PartnersPage from './pages/PartnersPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
// YENİ: ScrollToTop komponenti import edilir
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      {/* YENİ: Komponent bura əlavə edildi */}
      <ScrollToTop />
      <div className="bg-slate-950 text-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;