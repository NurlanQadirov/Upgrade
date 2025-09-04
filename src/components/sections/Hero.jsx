import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '../../hooks/useIsMobile';

const Plasma = React.lazy(() => import('../backgrounds/Plasma'));

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative h-screen flex items-center justify-start overflow-hidden px-8 md:px-20">
      <div className="absolute inset-0 z-0">
        {!isMobile && (
          <Suspense fallback={<div className="w-full h-full bg-slate-950" />}>
            {/* DƏYİŞİKLİK BURADADIR */}
            <Plasma mouseInteractive={false} />
          </Suspense>
        )}
        {isMobile && <div className="w-full h-full bg-gradient-to-br from-slate-950 to-slate-900" />}
      </div>

      <div className="relative z-10 text-left">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="text-5xl md:text-7xl font-bold mb-4 text-white"
        >
          Rəqəmsal Dünyada <br />
          <span className="text-cyan-400">Təhlükəsizliyinizi</span> Yüksəldin
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeInOut' }}
          className="text-lg md:text-xl text-gray-300 max-w-xl mb-8"
        >
          Upgrade Solutions, biznesinizi müasir təhdidlərdən qorumaq üçün
          innovativ kibertəhlükəsizlik və İT həlləri təqdim edir.
        </motion.p>
        
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(34,211,288)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold py-3 px-8 rounded-full transition-colors duration-300"
        >
          Xidmətlərimiz
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
