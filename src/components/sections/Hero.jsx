import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedTextCharacter from '../ui/AnimatedTextCharacter';

const InteractivePlexus = React.lazy(() => import('../backgrounds/InteractivePlexus'));
// YENİ: İnteraktiv loqo komponenti import edilir
const InteractiveLogo = React.lazy(() => import('../ui/InteractiveLogo'));

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center overflow-hidden">
      
      <div className="absolute inset-0 z-0 bg-slate-950">
        <Suspense fallback={<div className="w-full h-full bg-slate-950" />}>
          <InteractivePlexus />
        </Suspense>
      </div>

      <div className="code-overlay absolute inset-0 z-10 opacity-50"></div>
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent"></div>

      <div className="relative z-30 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-8 sm:px-12 md:px-10">
        
        {/* Sol Sütun: Mətnlər */}
        <div className="text-left">
          <AnimatedTextCharacter 
            text="Secure with U.S." 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-heading mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 font-sans"
          >
            We provide risk-based approach to cybersecurity by "right" controls" in "right" time!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <Link to="/#services">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(0, 85, 255, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-upgrade-blue hover:bg-upgrade-blue-light text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 text-lg"
              >
                Our services
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Sağ Sütun: YENİ İnteraktiv Loqo */}
        <div className="w-full h-80 md:h-full">
           <Suspense fallback={null}>
             <InteractiveLogo />
           </Suspense>
        </div>

      </div>
    </section>
  );
};

export default Hero;