// src/pages/HomePage.jsx
import React, { Suspense } from 'react';
import Hero from '../components/sections/Hero';

// Digər bölmələri lazy ilə import edirik
const ServicesSection = React.lazy(() => import('../components/sections/ServicesSection'));
const PartnersSection = React.lazy(() => import('../components/sections/PartnersSection'));
const AboutUsSection = React.lazy(() => import('../components/sections/AboutUsSection'));
const ContactSection = React.lazy(() => import('../components/sections/ContactSection'));

const HomePage = () => {
  return (
    <main>
      <div id="home"><Hero /></div>

      <Suspense fallback={<div>Loading...</div>}>
        <div id="services"><ServicesSection /></div>
        <div id="partners"><PartnersSection /></div>
        <div id="about"><AboutUsSection /></div>
        <div id="contact"><ContactSection /></div>
      </Suspense>
    </main>
  );
};

export default HomePage;