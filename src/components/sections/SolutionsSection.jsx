import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, BarChart2, KeyRound } from 'lucide-react'; // Dəyişiklik: İkonlar məzmuna uyğunlaşdırıldı

// DƏYİŞİKLİK: Məlumatlar kataloqdan götürüldü
const solutionsData = [
  {
    icon: <Shield size={40} className="text-upgrade-blue" />,
    title: "NGFW (Next-Generation Firewall)",
    description: "Ənənəvi firewall sistemlərindən daha qabaqcıl təhlükəsizlik funksiyaları təqdim edir, tətbiq səviyyəsində təhlükəsizliyi təmin edir və zərərli proqramları aşkar edir. [cite: 165, 166]",
  },
  {
    icon: <BarChart2 size={40} className="text-upgrade-blue" />,
    title: "SIEM (Security Information and Event Management)", 
    description: "Təhlükəsizlik hadisələrini real vaxt rejimində izləmək, analiz etmək və insidentlərə reaksiya vermək üçün mərkəzi platforma təqdim edən təhlükəsizlik həllidir. [cite: 181, 182, 183]",
  },
  {
    icon: <KeyRound size={40} className="text-upgrade-blue" />,
    title: "PAM (Privileged Access Management)",
    description: "Yüksək səlahiyyətli istifadəçilərin sistemlərə, şəbəkələrə və kritik məlumatlara giriş hüquqlarını idarə edən, məhdudlaşdıran və nəzarətdə saxlayan təhlükəsizlik həllidir. [cite: 195, 196]",
  },
];

const SolutionsSection = () => {
  const containerRef = useRef(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end end'],
  });

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
    // DƏYİŞİKLİK: Bölməyə ID əlavə edildi ki, naviqasiya işləsin
    <div id="solutions" className="bg-slate-900">
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
            
            const cardStart = index / totalCards;
            const cardEnd = (index + 1) / totalCards;
            
            const scale = useTransform(
              scrollYProgress,
              [cardStart, cardStart + 0.2, cardEnd - 0.2, cardEnd],
              [0.85, 1, 0.95, 0.8 - index * 0.05]
            );

            const y = useTransform(
              scrollYProgress,
              [cardStart, cardStart + 0.2, cardEnd - 0.2, cardEnd],
              [100, 0, -20, -50 - index * 30]
            );

            const cardOpacity = useTransform(
              scrollYProgress,
              [cardStart, cardStart + 0.1, cardEnd - 0.1, cardEnd],
              [0, 1, 1, 0.4]
            );
            
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
                  <div className="h-96 md:h-80 w-full relative">
                    
                    {isActive && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between"
                      >
                        <div className="flex items-start gap-6">
                          <div className="bg-gradient-to-br from-cyan-400/25 to-blue-500/25 p-4 rounded-xl border border-cyan-400/40 flex-shrink-0 shadow-lg">
                            {solution.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                              {solution.title}
                            </h3>
                            <p className="text-md md:text-lg text-gray-100 leading-relaxed font-medium">
                              {solution.description}
                            </p>
                          </div>
                        </div>

                        <div className="flex justify-end mt-6">
                          <div className="text-6xl md:text-8xl font-black text-white/25 select-none">
                            0{index + 1}
                          </div>
                        </div>
                      </motion.div>
                    )}
                    
                    <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-cyan-400/8 to-transparent rounded-full blur-2xl"></div>
                    <div className="absolute bottom-4 left-4 w-20 h-20 bg-gradient-to-tr from-blue-500/8 to-transparent rounded-full blur-xl"></div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      <div className="h-32"></div>
    </div>
  );
};

export default SolutionsSection;