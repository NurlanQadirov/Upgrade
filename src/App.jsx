// src/App.jsx
import React from 'react';
import Home from './pages/Home';
import Header from './components/layout/Header';
import ServicesSection from './components/sections/ServicesSection';
import PartnersSection from './components/sections/PartnersSection';
import AboutUsSection from './components/sections/AboutUsSection';
import ContactSection from './components/sections/ContactSection'; // Yeni komponenti import edirik
import Footer from './components/layout/Footer'; // Yeni komponenti import edirik

function App() {
  return (
    <div className="bg-slate-950 text-white">
      <Header />
      <main>
        <div id="home"><Home /></div>
        <div id="services"><ServicesSection /></div>
        <div id="partners"><PartnersSection /></div>
        <div id="about"><AboutUsSection /></div>
        <div id="contact"><ContactSection /></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;