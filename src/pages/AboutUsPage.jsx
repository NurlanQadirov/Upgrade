import React from 'react';
import { motion } from 'framer-motion';
import CertificationsSection from '../components/sections/CertificationsSection';
import { Award, Zap, Users, ShieldCheck, Clock, GitCommit, Target, Eye } from 'lucide-react';
import aboutUsImage from '../assets/about-us-image.webp';

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
    <div className="pt-20 bg-slate-950">
      <div className="py-16 text-center bg-slate-950 px-4">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Bizim <span className="text-upgrade-blue">Hekayəmiz</span>
          </motion.h1>
      </div>

      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Rəqəmsal Dünyanın <span className="text-upgrade-blue">Qoruyucuları</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            [cite_start]Biz, Upgrade Solutions, müasir texnologiyaların inkişafı ilə birlikdə artan kibertəhdidlərə qarşı etibarlı müdafiə təmin edən aparıcı kibertəhlükəsizlik şirkətiyik. [cite: 8]
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            [cite_start]Fəaliyyətimizin əsas məqsədi şəxslərin, özəl və dövlət qurumlarının rəqəmsal aktivlərini qorumaq, məlumatların gizliliyini, tamlığını və əlçatanlığını təmin etməkdir. [cite: 9]
          </p>
        </motion.div>
        <motion.div 
          className="w-full h-80 rounded-lg overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={aboutUsImage} alt="Upgrade Solutions Team" className="w-full h-full object-cover" />
        </motion.div>
      </div>
      
      <div className="bg-slate-900 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* DÜZƏLİŞ: Buradakı sintaksis xətası aradan qaldırıldı */}
          <motion.div initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.6}} viewport={{ once: true, amount: 0.5 }}>
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-upgrade-blue mr-4" />
              <h3 className="text-3xl font-bold">Missiyamız</h3>
            </div>
            <p className="text-gray-400 leading-loose">
              [cite_start]Rəqəmsal dünyada təhlükəsiz və etibarlı mühiti təmin etmək, müştərilərimizin biznes proseslərini davamlı və təhlükəsiz şəkildə idarə etməsinə kömək etmək. [cite: 18]
            </p>
          </motion.div>
          
          {/* DÜZƏLİŞ: Buradakı sintaksis xətası aradan qaldırıldı */}
          <motion.div initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.6, delay: 0.2}} viewport={{ once: true, amount: 0.5 }}>
            <div className="flex items-center mb-4">
              <Eye className="w-8 h-8 text-upgrade-blue mr-4" />
              <h3 className="text-3xl font-bold">Vizyonumuz</h3>
            </div>
            <p className="text-gray-400 leading-loose">
              [cite_start]Kibertəhlükəsizlik sahəsində innovativ həllər təqdim edərək, rəqəmsal dünyanın lider təhlükəsizlik təminatçısı olmaq. [cite: 20]
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-20 bg-slate-950 bg-grid-pattern px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Nə üçün <span className="text-upgrade-blue">Upgrade Solutions?</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((adv, index) => (
              <motion.div key={index} className="bg-slate-900 p-8 rounded-lg border border-slate-800 text-center hover:border-upgrade-blue hover:-translate-y-2 transition-all duration-300">
                <div className="inline-block p-4 bg-slate-800 rounded-full mb-6">{adv.icon}</div>
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