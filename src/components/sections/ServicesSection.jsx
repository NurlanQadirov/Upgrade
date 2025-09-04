// src/components/sections/ServicesSection.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Network, CloudCog, Briefcase } from 'lucide-react';

// Xidmətlər haqqında məlumatları burada saxlayaq
const servicesData = [
  {
    id: 1,
    title: 'Kibertəhlükəsizlik Həlləri',
    description: 'Şirkətinizin rəqəmsal aktivlərini ən son təhdidlərdən qorumaq üçün kompleks təhlükəsizlik auditləri, penetrasiya testləri və 24/7 monitorinq xidmətləri təqdim edirik.',
    icon: <ShieldCheck className="w-16 h-16 text-cyan-400 mb-4" />,
  },
  {
    id: 2,
    title: 'IT Konsaltinq və Strategiya',
    description: 'Biznesinizin hədəflərinə çatmaq üçün texnoloji infrastrukturunuzu optimallaşdırırıq. Mövcud sistemlərin analizi, gələcək üçün yol xəritəsinin hazırlanması və effektiv həllərin tətbiqi.',
    icon: <Briefcase className="w-16 h-16 text-cyan-400 mb-4" />,
  },
  {
    id: 3,
    title: 'Şəbəkə İnfrastrukturu',
    description: 'Sürətli, etibarlı və təhlükəsiz şəbəkə infrastrukturunun qurulması və idarə olunması. Lokal şəbəkələrdən (LAN) genişmiqyaslı (WAN) həllərə qədər bütün ehtiyaclarınızı qarşılayırıq.',
    icon: <Network className="w-16 h-16 text-cyan-400 mb-4" />,
  },
  {
    id: 4,
    title: 'Bulud (Cloud) Xidmətləri',
    description: 'Biznesinizi bulud texnologiyalarına miqrasiya edərək çeviklik və effektivlik qazandırırıq. AWS, Azure və Google Cloud platformaları ilə təhlükəsiz və dayanıqlı həllər.',
    icon: <CloudCog className="w-16 h-16 text-cyan-400 mb-4" />,
  },
  {
    id: 5,
    title: 'Cyber security',
    descript

  }
];

const ServicesSection = () => {
  // Hansı xidmətin seçildiyini izləmək üçün state
  const [selectedTab, setSelectedTab] = useState(servicesData[0]);

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-12"
        >
          Təqdim Etdiyimiz <span className="text-cyan-400">Xidmətlər</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 min-h-[400px]">
          {/* Sol Sütun: Xidmət Siyahısı */}
          <div className="w-full md:w-1/3 border-b-2 md:border-b-0 md:border-r-2 border-slate-800">
            <ul className="flex flex-row md:flex-col">
              {servicesData.map((item) => (
                <li
                  key={item.id}
                  className={`relative cursor-pointer p-4 text-sm md:text-lg text-center md:text-left font-medium w-full transition-colors ${
                    item.id === selectedTab.id ? 'text-cyan-400' : 'text-gray-400 hover:text-white'
                  }`}
                  onClick={() => setSelectedTab(item)}
                >
                  {item.title}
                  {item.id === selectedTab.id && (
                    <motion.div
                      className="absolute bottom-[-2px] left-0 right-0 h-0.5 md:bottom-0 md:top-0 md:right-[-2px] md:h-full md:w-0.5 bg-cyan-400"
                      layoutId="underline"
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Sağ Sütun: Xidmət Detalları */}
          <div className="w-full md:w-2/3 flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTab ? selectedTab.id : 'empty'}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="w-full"
              >
                {selectedTab.icon}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{selectedTab.title}</h3>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">{selectedTab.description}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;