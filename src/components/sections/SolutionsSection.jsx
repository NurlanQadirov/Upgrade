import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Database, Shield, Server } from 'lucide-react';

const solutionsData = [
  {
    icon: <Server size={40} className="text-upgrade-blue" />,
    title: "Data Mərkəzi Həlləri",
    description: "Müasir standartlara cavab verən, etibarlı və yüksək performanslı data mərkəzlərinin qurulması və idarə edilməsi.",
  },
  {
    icon: <Shield size={40} className="text-upgrade-blue" />,
    title: "Şəbəkə Təhlükəsizliyi", 
    description: "Fortinet, Cisco kimi qabaqcıl texnologiyalarla biznesinizi daxili və xarici təhdidlərdən qoruyan çoxsəviyyəli təhlükəsizlik.",
  },
  {
    icon: <Database size={40} className="text-upgrade-blue" />,
    title: "Məlumatların Qorunması",
    description: "Vacib məlumatlarınızın itirilməsinin qarşısını alan back-up və bərpa (disaster recovery) həlləri ilə fasiləsiz işləyin.",
  },
];

const SolutionsSection = () => {
  const containerRef = useRef(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end end'],
  });

  // Scroll progress-ə əsasən aktiv kartı müəyyən etmək
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const totalCards = solutionsData.length;
      const newIndex = Math.floor(latest * totalCards);
      const clampedIndex = Math.min(Math.max(newIndex, 0), totalCards - 1);
      setActiveCardIndex(clampedIndex);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div className="bg-slate-900">
      {/* Header bölməsi */}
      <div className="text-center py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Təklif Etdiyimiz <span className="text-upgrade-blue">Həllər</span>
        </h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          Biznesinizin ehtiyaclarına xüsusi olaraq hazırlanmış, etibarlılığı sübut edilmiş həllər.
        </p>
      </div>

      {/* Sticky cards konteyner */}
      <div 
        ref={containerRef} 
        className="relative"
        style={{ height: `${solutionsData.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen flex items-center justify-center px-4">
          {solutionsData.map((solution, index) => {
            const totalCards = solutionsData.length;
            
            // Hər kartın scroll aralığı
            const cardStart = index / totalCards;
            const cardEnd = (index + 1) / totalCards;
            
            // Kartın scale animasiyası
            const scale = useTransform(
              scrollYProgress,
              [cardStart, cardStart + 0.2, cardEnd - 0.2, cardEnd],
              [0.85, 1, 0.95, 0.8 - index * 0.05]
            );

            // Y pozisiyası
            const y = useTransform(
              scrollYProgress,
              [cardStart, cardStart + 0.2, cardEnd - 0.2, cardEnd],
              [100, 0, -20, -50 - index * 30]
            );

            // Kartın şəffaflığı
            const cardOpacity = useTransform(
              scrollYProgress,
              [cardStart, cardStart + 0.1, cardEnd - 0.1, cardEnd],
              [0, 1, 1, 0.4]
            );

            // Bu kartın aktiv olub-olmadığını yoxlayırıq
            const isActive = activeCardIndex === index;

            return (
              <motion.div
                key={index}
                style={{
                  scale,
                  y,
                  opacity: cardOpacity,
                  zIndex: totalCards - index,
                }}
                className="absolute w-full max-w-4xl"
              >
                <div className="bg-gradient-to-br from-slate-800 via-slate-800 to-slate-700 border border-slate-600/60 rounded-2xl shadow-2xl backdrop-blur-sm overflow-hidden">
                  <div className="h-80 w-full relative">
                    
                    {/* MƏZMUN - YALNIZ AKTİV KARTDA GÖRÜNÜr */}
                    {isActive && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between"
                      >
                        {/* Icon və başlıq */}
                        <div className="flex items-start gap-6">
                          <div className="bg-gradient-to-br from-cyan-400/25 to-blue-500/25 p-4 rounded-xl border border-cyan-400/40 flex-shrink-0 shadow-lg">
                            {solution.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                              {solution.title}
                            </h3>
                            <p className="text-lg text-gray-100 leading-relaxed font-medium">
                              {solution.description}
                            </p>
                          </div>
                        </div>

                        {/* Kart nömrəsi */}
                        <div className="flex justify-end mt-6">
                          <div className="text-6xl md:text-8xl font-black text-white/25 select-none">
                            0{index + 1}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Dekorativ elementlər */}
                    <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-cyan-400/8 to-transparent rounded-full blur-2xl"></div>
                    <div className="absolute bottom-4 left-4 w-20 h-20 bg-gradient-to-tr from-blue-500/8 to-transparent rounded-full blur-xl"></div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Alt boşluq */}
      <div className="h-32"></div>
    </div>
  );
};

export default SolutionsSection;