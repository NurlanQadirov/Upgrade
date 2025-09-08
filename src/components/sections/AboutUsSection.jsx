// src/components/sections/AboutUsSection.jsx
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, animate } from 'framer-motion';
import aboutUsImage from '../../assets/about-us-image.webp'; // <-- PROBLEM BU SƏTRİN OLMAMASI İDİ

// Rəqəmləri canlandıran təkrar istifadə edilə bilən komponent
function AnimatedCounter({ to, text }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
      });
      // Rəqəm animasiyası
      animate(0, to, {
        duration: 2,
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = Math.round(value);
          }
        },
      });
    }
  }, [isInView, to, controls]);

  return (
    <motion.div 
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
    >
      <span ref={ref} className="text-4xl md:text-5xl font-bold text-upgrade-blue">0</span>
      <span className="text-4xl md:text-5xl font-bold text-upgrade-blue">+</span>
      <p className="text-sm md:text-base text-gray-400 mt-2">{text}</p>
    </motion.div>
  );
}


const AboutUsSection = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Sol Sütun: Şəkil */}
        <motion.div 
          className="w-full h-80 md:h-full rounded-lg overflow-hidden"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img 
            src={aboutUsImage} 
            alt="Upgrade Solutions Team"
            className="w-full h-full object-cover"
            width="600"
            height="800"
          />
        </motion.div>

        {/* Sağ Sütun: Mətn və Nailiyyətlər */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Rəqəmsal Təhlükəsizliyin <span className="text-upgrade-blue">Memarları</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Biz Upgrade Solutions olaraq, müasir bizneslərin qarşılaşdığı mürəkkəb texnoloji problemlərə innovativ və etibarlı həllər təqdim edirik. Məqsədimiz, tərəfdaşlarımızın rəqəmsal dünyada təhlükəsiz və rəqabətədavamlı olmasını təmin etməkdir.
          </p>
          
          <div className="grid grid-cols-3 gap-4">
            <AnimatedCounter to={10} text="İllik Təcrübə" />
            <AnimatedCounter to={50} text="Uğurlu Layihə" />
            <AnimatedCounter to={99} text="% Müştəri Məmnuniyyəti" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUsSection;