import React from 'react';
import { motion } from 'framer-motion';
import AboutUsSection from '../components/sections/AboutUsSection';
import CertificationsSection from '../components/sections/CertificationsSection';
import { Award, Zap, Users, ShieldCheck, Clock, GitCommit } from 'lucide-react';

// Kataloqun 11-ci səhifəsindən götürülmüş üstünlüklər
const advantages = [
  {
    icon: <Award className="w-10 h-10 text-upgrade-blue" />,
    title: "Təcrübə və Ekspertiza",
    text: "Sertifikatlı kiber təhlükəsizlik mütəxəssislərindən ibarət komandamız uzun illərin təcrübə və bilikləri ilə sizə dəstək olacaq."
  },
  {
    icon: <Zap className="w-10 h-10 text-upgrade-blue" />,
    title: "Yenilənən Texnologiyalar",
    text: "Kiber təhlükəsizlik dinamik inkişaf edən bir sahədir. Biz ən son texnologiyalar və qabaqcıl təhlükəsizlik tədbirləri ilə sizi tanış edirik."
  },
  {
    icon: <Users className="w-10 h-10 text-upgrade-blue" />,
    title: "Fərdiləşdirilmiş Həllər",
    text: "Hər bir şirkətin təhlükəsizlik tələbləri unikaldır. Biz sizin spesifik ehtiyaclarınıza uyğun fərdiləşdirilmiş həllər hazırlayırıq."
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-upgrade-blue" />,
    title: "Proaktiv Yanaşma",
    text: "Potensial təhlükələri öncədən müəyyən edən proaktiv yanaşma tətbiq edərək, onların qarşısını vaxtında alırıq."
  },
  {
    icon: <Clock className="w-10 h-10 text-upgrade-blue" />,
    title: "24/7 Dəstək",
    text: "Kiber insidentlər hər an baş verə bilər. 24/7 dəstək xidmətimiz operativ müdaxilə imkanı yaradaraq problemlərin dərhal həllini təmin edir."
  },
  {
    icon: <GitCommit className="w-10 h-10 text-upgrade-blue" />,
    title: "Uzunmüddətli Tərəfdaşlıq",
    text: "Bizimlə tərəfdaşlıq etməklə, təhlükəsizlik strategiyanızın daim yenilənməsi və inkişaf etməsi üçün uzunmüddətli əlaqələr qurursunuz."
  }
];

const AboutUsPage = () => {
  return (
    <div className="pt-20">
      <AboutUsSection />
      
      {/* YENİ: Nə üçün biz? Bölməsi */}
      <div className="py-20 bg-slate-900 bg-grid-pattern px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
          >
            Nə üçün <span className="text-upgrade-blue">Upgrade Solutions?</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((adv, index) => (
              <motion.div
                key={index}
                className="bg-slate-950 p-8 rounded-lg border border-slate-800 text-center hover:border-upgrade-blue hover:-translate-y-2 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="inline-block p-4 bg-slate-800 rounded-full mb-6">
                  {adv.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{adv.title}</h3>
                <p className="text-gray-400 leading-relaxed">{adv.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <CertificationsSection />
    </div>
  );
};

export default AboutUsPage;