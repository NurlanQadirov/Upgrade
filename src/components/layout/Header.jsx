import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', latest => {
    setScrolled(latest > 10);
  });

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'Services', href: '/#services' },
    { name: 'Partners', href: '/#partners' },
    { name: 'About Us', href: '/#about' },
  ];
  
  const languages = ['AZ', 'EN', 'UZ', 'RU'];

  const mobileMenuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' },
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-900/50 backdrop-blur-lg border-b border-slate-800'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/#home" className="text-2xl font-bold text-white font-heading">
                Upgrade<span className="text-upgrade-blue">.</span>
              </Link>
            </div>

            {/* Desktop Naviqasiya */}
            <div className="hidden md:flex items-center space-x-8">
              <ul className="flex items-baseline space-x-4">
                {navLinks.map(link => (
                  <li key={link.name} className="relative group">
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {link.name}
                    </Link>
                    {/* DÜZƏLİŞ BURADADIR: "text-upgrade-blue" -> "bg-upgrade-blue" */}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-upgrade-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                  </li>
                ))}
              </ul>

              {/* Dil dəyişmə düyməsi (Hover ilə işləyən versiya) */}
              <div className="relative group">
                <div className="flex items-center text-gray-300 hover:text-white text-sm font-medium cursor-pointer">
                  <span>EN</span>
                  <ChevronDown size={16} className="ml-1 transition-transform duration-300 group-hover:rotate-180" />
                </div>
                
                <ul className="absolute top-full right-0 mt-2 w-24 bg-slate-800 border border-slate-700 rounded-md shadow-lg overflow-hidden
                               invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100">
                  {languages.map(lang => (
                    <li 
                      key={lang}
                      className="px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white cursor-pointer"
                    >
                      {lang}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Əlaqə Düyməsi (Desktop) */}
              <Link to="/#contact">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-upgrade-blue text-white font-bold py-2 px-5 rounded-full text-sm">
                  Contact Us
                </motion.button>
              </Link>
            </div>

            {/* Mobil Menyu Düyməsi */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobil Menyu */}
      <motion.div
        initial="closed"
        animate={isMobileMenuOpen ? 'open' : 'closed'}
        variants={mobileMenuVariants}
        transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
        className="fixed top-0 left-0 w-full h-screen bg-slate-950 z-20 md-hidden pt-20"
      >
        <ul className="flex flex-col items-center justify-center h-full space-y-8">
          {[...navLinks, { name: 'Contact Us', href: '/#contact' }].map(link => (
            <li key={link.name}>
              <Link
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-300 hover:text-white text-2xl font-medium"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="pt-8">
             <div className="relative group">
                <div className="flex items-center text-gray-300 hover:text-white text-xl font-medium cursor-pointer">
                  <span>EN</span>
                  <ChevronDown size={20} className="ml-1" />
                </div>
             </div>
          </li>
        </ul>
      </motion.div>
    </>
  );
};

export default Header;