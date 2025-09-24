import React, { useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { DollarSign, ShieldAlert, Briefcase, ServerCrash, Users, Clock } from 'lucide-react';

const stats = [
  {
    icon: <DollarSign className="w-10 h-10 text-upgrade-blue" />,
    prefix: "$",
    value: 265,
    suffix: " Milyard",
    label: "Ransomware hücumlarının 2031-ci ilə qədər proqnozlaşdırılan zərəri.",
  },
  {
    icon: <Briefcase className="w-10 h-10 text-upgrade-blue" />,
    value: 43,
    suffix: "%",
    label: "Kiberhücumların hədəf aldığı kiçik bizneslərin faizi.",
  },
  {
    icon: <ServerCrash className="w-10 h-10 text-upgrade-blue" />,
    prefix: "$",
    value: 4.45,
    suffix: " Milyon",
    label: "2024-cü ildə məlumat sızmasının orta qiyməti.",
  },
  {
    icon: <Users className="w-10 h-10 text-upgrade-blue" />,
    value: 74,
    suffix: "%",
    label: "İnsan səhvləri (fişinq, yanlış konfiqurasiya) ilə bağlı sızmaların faizi.",
  },
  {
    icon: <ShieldAlert className="w-10 h-10 text-upgrade-blue" />,
    value: 60,
    suffix: "%",
    label: "Kiberhücuma məruz qalan və 6 ay ərzində fəaliyyətini dayandıran müəssisələr.",
  },
  {
    icon: <Clock className="w-10 h-10 text-upgrade-blue" />,
    value: 277,
    suffix: " gün",
    label: "Məlumat sızmasını müəyyən etmək üçün tələb olunan orta vaxt.",
  },
];

const AnimatedStat = ({ stat }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  React.useEffect(() => {
    if (isInView) {
      animate(0, stat.value, {
        duration: 2.5,
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = value.toFixed(stat.prefix === '$' && stat.value < 10 ? 2 : 0);
          }
        },
      });
    }
  }, [isInView, stat.value, stat.prefix]);

  return (
    <motion.div
      className="bg-slate-900 p-6 rounded-lg border border-slate-800/80 text-center flex flex-col items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {stat.icon}
      <div className="text-4xl md:text-5xl font-bold text-white my-3">
        {stat.prefix && <span>{stat.prefix}</span>}
        <span ref={ref}>0</span>
        <span>{stat.suffix}</span>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed">{stat.label}</p>
    </motion.div>
  );
};

const StatisticsSection = () => {
  return (
    <div className="py-20 bg-slate-950/50 bg-grid-pattern px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Təhlükələrdən <span className="text-upgrade-blue">Öndə Olun</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Kibertəhlükəsizlik dünyası rəqəmlərlə: Bilməli olduğunuz həyəcanverici faktlar.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <AnimatedStat key={index} stat={stat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;