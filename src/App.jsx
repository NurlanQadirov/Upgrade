import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ServiceDetailPage from './pages/ServiceDetailPage'; // Yeni səhifəni import edirik

function App() {
  return (
    <BrowserRouter>
      <div className="bg-slate-950 text-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* YENİ ROUTE */}
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;