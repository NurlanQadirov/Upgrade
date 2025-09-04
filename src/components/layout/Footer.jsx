// src/components/layout/Footer.jsx
import React from 'react';
import { Linkedin, Twitter, Facebook } from 'lucide-react'; // Sosial media ikonları üçün

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Header-dəki linkləri burada da istifadə edirik
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Partners', href: '#partners' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sütun 1: Loqo və Şirkət Məlumatı */}
        <div className="text-center md:text-left">
          <a href="#home" className="text-3xl font-bold text-white">
            Upgrade<span className="text-cyan-400">.</span>
          </a>
          <p className="text-gray-400 text-sm mt-4 max-w-xs mx-auto md:mx-0">
            Rəqəmsal dünyada etibarlı tərəfdaşınız. Biznesinizi ən son texnologiyalarla qoruyaq.
          </p>
        </div>

        {/* Sütun 2: Sürətli Keçidlər */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold text-white mb-4">Sürətli Keçidlər</h3>
          <ul className="space-y-2">
            {navLinks.map(link => (
              <li key={link.name}>
                <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Sütun 3: Əlaqə və Sosial Media */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold text-white mb-4">Sosial Media</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Facebook size={24} />
            </a>
          </div>
          <p className="text-gray-500 text-xs mt-8">
            &copy; {currentYear} Upgrade Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;