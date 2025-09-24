import React from 'react';
import { motion } from 'framer-motion';

// Müştəri loqoları kataloqdan götürüldü
const clientLogos = [
  "https://cdn.worldvectorlogo.com/logos/pasha-bank-1.svg",
  "https://cdn.worldvectorlogo.com/logos/azercosmos.svg",
  "https://cdn.worldvectorlogo.com/logos/azerbaijan-airlines-logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/f/f2/Logo_of_Az%C9%99rpo%C3%A7t.svg",
  "https://www.stp.az/frontend/assets/images/logo-light.svg",
  "https://upload.wikimedia.org/wikipedia/az/thumb/8/82/%C6%8Fm%C9%99k_v%C9%99_%C6%8Fhalinin_Sosial_M%C3%BCdafi%C9%99si_Nazirliyi_loqosu.svg/1200px-%C6%8Fm%C9%99k_v%C9%99_%C6%8Fhalinin_Sosial_M%C3%BCdafi%C9%99si_Nazirliyi_loqosu.svg.png",
  "https://www.basqalresort.az/images/logo-white.svg"
];

const carouselVariants = {
  animate: {
    x: ['0%', '-100%'],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 30,
        ease: 'linear',
      },
    },
  },
};

const ClientsSection = () => {
  return (
    <div className="bg-slate-950 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-3xl text-center text-gray-400 mb-12"
        >
          Bizə Etibar Edən Müştərilərimiz
        </motion.h2>
        
        <div className="relative w-full">
          <motion.div
            className="flex"
            variants={carouselVariants}
            animate="animate"
          >
            {[...clientLogos, ...clientLogos].map((logoUrl, index) => (
              <div key={index} className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center" style={{ minWidth: '150px', height: '50px' }}>
                <img
                  src={logoUrl}
                  alt={`Client logo ${index + 1}`}
                  className="max-h-full w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-110"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ClientsSection;