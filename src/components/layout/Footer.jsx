import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'Services', href: '/#services' },
    { name: 'Partners', href: '/#partners' },
    { name: 'About Us', href: '/#about' },
  ];

  const socialLinks = [
    { icon: <Linkedin size={20} />, href: '#' },
    { icon: <Twitter size={20} />, href: '#' },
    { icon: <Facebook size={20} />, href: '#' },
  ];

  return (
    <footer className="bg-slate-950 text-white relative pt-20">
      {/* Dalğalı Keçid (SVG) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+1.3px)] h-[150px]"
          style={{ filter: 'drop-shadow(0 -5px 5px rgba(0,0,0,0.1))' }}
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-slate-900"
          ></path>
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Sütun 1: Loqo */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/#home" className="text-3xl font-bold font-heading">
              Upgrade<span className="text-upgrade-blue">.</span>
            </Link>
            <p className="text-gray-400 text-sm mt-4">
              Rəqəmsal dünyada etibarlı tərəfdaşınız.
            </p>
          </div>

          {/* Sütun 2: Keçidlər */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Menyu</h3>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-upgrade-blue transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sütun 3: Əlaqə */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Əlaqə</h3>
            <ul className="space-y-2 text-gray-400">
              <li>info@upgrade.az</li>
              <li>+994 (XX) XXX XX XX</li>
              <li>Bakı, Azərbaycan</li>
            </ul>
          </div>

          {/* Sütun 4: Sosial Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Bizi İzləyin</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-upgrade-blue transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Upgrade Solutions. Bütün hüquqlar qorunur.</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;