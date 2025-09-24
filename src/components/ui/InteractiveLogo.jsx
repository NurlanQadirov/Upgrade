import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import logoSymbol from '../../assets/logo-symbol.png';

const InteractiveLogo = () => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, 400], [20, -20]);
  const rotateY = useTransform(x, [0, 400], [-20, 20]);

  const springRotateX = useSpring(rotateX, { stiffness: 400, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 400, damping: 30 });

  // YENİ: İşıq effektinin pozisiyası üçün
  const glowX = useTransform(x, [0, 400], [20, 80]);
  const glowY = useTransform(y, [0, 400], [20, 80]);
  const springGlowX = useSpring(glowX, { stiffness: 200, damping: 30 });
  const springGlowY = useSpring(glowY, { stiffness: 200, damping: 30 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    x.set(200);
    y.set(200);
  };
  
  // YENİ: Künc elementləri üçün animasiya variantları
  const cornerVariant = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 0.5, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.5, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      ref={ref}
      className="w-full h-full flex items-center justify-center"
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="relative flex items-center justify-center rounded-full"
        style={{
          transformStyle: 'preserve-3d',
          rotateX: springRotateX,
          rotateY: springRotateY,
          width: 'clamp(200px, 100%, 400px)',
          height: 'clamp(200px, 100%, 400px)',
        }}
        whileHover={{ scale: 1.05 }}
      >
        {/* YENİ: İşıq effekti (Glow) */}
        <motion.div
          className="absolute w-full h-full rounded-full"
          style={{
            background: `radial-gradient(circle at ${springGlowX.get()}% ${springGlowY.get()}%, rgba(0, 85, 255, 0.3), transparent 60%)`,
            scale: 1.5,
            opacity: 0.7,
            filter: 'blur(30px)',
          }}
        />

        {/* Logo şəkli */}
        <motion.img
          src={logoSymbol}
          alt="Upgrade Solutions Logo Symbol"
          className="w-auto h-auto max-w-[60%] md:max-w-[70%]"
          style={{
            transform: 'translateZ(50px)', // Şəkli bir az qabağa çıxarır
            filter: 'drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.4))',
          }}
        />
        
        {/* YENİ: İnteraktiv HUD çərçivəsi */}
        <AnimatePresence>
          {isHovered && (
            <>
              {/* Top-Left Corner */}
              <motion.div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-upgrade-cyan/70" variants={cornerVariant} initial="hidden" animate="visible" exit="exit" />
              {/* Top-Right Corner */}
              <motion.div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-upgrade-cyan/70" variants={cornerVariant} initial="hidden" animate="visible" exit="exit" />
              {/* Bottom-Left Corner */}
              <motion.div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-upgrade-cyan/70" variants={cornerVariant} initial="hidden" animate="visible" exit="exit" />
              {/* Bottom-Right Corner */}
              <motion.div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-upgrade-cyan/70" variants={cornerVariant} initial="hidden" animate="visible" exit="exit" />
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default InteractiveLogo;