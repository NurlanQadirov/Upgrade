import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Plasma from '../backgrounds/Plasma';

const Hero = () => {
  const containerRef = useRef(null);

  // Mouse hərəkəti üçün motion dəyərləri
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Mouse mövqeyinə görə fırlanma (rotate) dəyərlərini hesablamaq
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ['-10deg', '10deg']);

  const handleMouseMove = (event) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    // Mouse mövqeyini -0.5 və 0.5 aralığında normallaşdırırıq
    mouseX.set((event.clientX - left) / width - 0.5);
    mouseY.set((event.clientY - top) / height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-screen flex items-center justify-start overflow-hidden px-8 md:px-20" // Məzmunu sola çəkirik
      style={{ perspective: '1000px' }} // 3D effekt üçün perspektiv
    >
      <div className="absolute inset-0 z-0">
        <Plasma />
      </div>

      <motion.div
        className="relative z-10 text-left" // Mətni sola düzürük
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d', // 3D effekti qorumaq üçün
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
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
          className="text-lg md:text-xl text-gray-300 max-w-xl mb-8" // max-w-xl ilə enini məhdudlaşdırırıq
        >
          Upgrade Solutions, biznesinizi müasir təhdidlərdən qorumaq üçün
          innovativ kibertəhlükəsizlik və İT həlləri təqdim edir.
        </motion.p>
        
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(34,211,238)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold py-3 px-8 rounded-full transition-colors duration-300"
        >
          Xidmətlərimiz
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;