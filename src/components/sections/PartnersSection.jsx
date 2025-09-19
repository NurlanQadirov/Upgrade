import React from 'react';
import { motion } from 'framer-motion';

const partnerLogos = [
  "https://cdn.worldvectorlogo.com/logos/microsoft-5.svg",
  "https://cdn.worldvectorlogo.com/logos/cisco-2.svg",
  "https://cdn.worldvectorlogo.com/logos/microsoft-5.svg",
  "https://cdn.worldvectorlogo.com/logos/cisco-2.svg",
  "https://cdn.worldvectorlogo.com/logos/microsoft-5.svg",
  "https://cdn.worldvectorlogo.com/logos/cisco-2.svg",
  "https://cdn.worldvectorlogo.com/logos/microsoft-5.svg"
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

const PartnersSection = () => {
  return (
    <div className="bg-slate-900 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-3xl text-center text-gray-400 mb-12"
        >
          Etibar Edən Tərəfdaşlarımız
        </motion.h2>
        
        {/* Sonsuz hərəkət edən karusel üçün wrapper */}
        <div className="relative w-full">
          <motion.div
            className="flex"
            variants={carouselVariants}
            animate="animate"
          >
            {[...partnerLogos, ...partnerLogos].map((logoUrl, index) => (
              <div key={index} className="flex-shrink-0 mx-8 md:mx-12" style={{ minWidth: '150px' }}>
                <img
                  src={logoUrl}
                  alt={`Partner logo ${index + 1}`}
                  className="h-10 md:h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-110"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;