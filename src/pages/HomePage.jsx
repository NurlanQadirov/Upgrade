import React, { Suspense } from 'react';
import Hero from '../components/sections/Hero';

// Bütün bölmələr import edilir
const ServicesSection = React.lazy(() => import('../components/sections/ServicesSection'));
// DÜZƏLİŞ: İtən SolutionsSection (sticky kartlar) geri əlavə edildi
const SolutionsSection = React.lazy(() => import('../components/sections/SolutionsSection')); 
const AboutUsSection = React.lazy(() => import('../components/sections/AboutUsSection'));
const ContactSection = React.lazy(() => import('../components/sections/ContactSection'));
const StatisticsSection = React.lazy(() => import('../components/sections/StatisticsSection'));
const CertificationsSection = React.lazy(() => import('../components/sections/CertificationsSection'));
const PartnersSection = React.lazy(() => import('../components/sections/PartnersSection'));
const ClientsSection = React.lazy(() => import('../components/sections/ClientsSection'));


const HomePage = () => {
  return (
    <main>
      <div id="home"><Hero /></div>

      <Suspense fallback={<div className="h-screen w-full flex items-center justify-center text-xl">Loading sections...</div>}>
        
        {/* DÜZƏLİŞ: Bölmələrin sıralaması daha məntiqi və estetik hala gətirildi */}
        
        <div id="services"><ServicesSection /></div>
        
        {/* "Sticky" kartlar olan bölmə geri qaytarıldı */}
        <SolutionsSection />
        
        <div id="about"><AboutUsSection /></div>
        
        <CertificationsSection />
        
        <div id="partners"><PartnersSection /></div>
        
        {/* İki karuseli bir-birindən ayırmaq üçün Statistika bölməsi ortaya yerləşdirildi */}
        <StatisticsSection />
        
        <ClientsSection /> 
        
        <div id="contact"><ContactSection /></div>
        
      </Suspense>
    </main>
  );
};

export default HomePage;