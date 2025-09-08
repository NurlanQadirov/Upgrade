// src/components/layout/Header.jsx
import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom'; // react-router üçün Link importu

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
              {/* Loqonun şrifti "font-heading" ilə yeniləndi */}
              <Link to="/#home" className="text-2xl font-bold text-white font-heading">
                Upgrade<span className="text-cyan-400">.</span>
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
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                  </li>
                ))}
              </ul>

              {/* Dil dəyişmə düyməsi */}
              <div className="relative group">
                <button className="flex items-center text-gray-300 hover:text-white text-sm font-medium">
                  <span>EN</span>
                  <ChevronDown size={16} className="ml-1" />
                </button>
              </div>

              {/* Əlaqə Düyməsi (Desktop) */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-cyan-500 text-slate-950 font-bold py-2 px-5 rounded-full text-sm"
              >
                Contact Us
              </motion.a>
            </div>

            {/* Mobil Menyu Düyməsi */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobil Menyu */}
      <motion.div
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={mobileMenuVariants}
        transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
        className="fixed top-0 left-0 w-full h-screen bg-slate-950 z-20 md:hidden pt-20"
      >
        <ul className="flex flex-col items-center justify-center h-full space-y-8">
          {[...navLinks, { name: 'Contact Us', href: '/#contact' }].map(link => (
            <li key={link.name}>
              <Link
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white text-2xl font-medium"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="pt-8">
             <button className="flex items-center text-gray-300 hover:text-white text-xl font-medium">
                  <span>EN</span>
                  <ChevronDown size={20} className="ml-1" />
              </button>
          </li>
        </ul>
      </motion.div>
    </>
  );
};

export default Header;