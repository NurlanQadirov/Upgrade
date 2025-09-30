import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-12 h-12 text-upgrade-blue" />,
      title: "E-poçt",
      detail: "info@upgrade.az",
      href: "mailto:info@upgrade.az",
    },
    {
      icon: <Phone className="w-12 h-12 text-upgrade-blue" />,
      title: "Telefon",
      detail: "(+994 12) 526 66 99",
      href: "tel:+994125266699",
    },
    {
      icon: <MapPin className="w-12 h-12 text-upgrade-blue" />,
      title: "Ünvan",
      detail: "Ə. Rəcəbli 241B, Çinar Park BM 2, AZ1075",
      href: "https://maps.google.com/?q=Ə. Rəcəbli 241B, Bakı",
    }
  ];

  return (
    <div className="pt-20 bg-slate-950">
      {/* Səhifə Başlığı */}
      <div className="py-16 text-center bg-slate-950 px-4">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Bizimlə <span className="text-upgrade-blue">Əlaqə</span>
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-400 max-w-3xl mx-auto mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Layihəniz var? Sualınız var? Komandamız sizə kömək etməyə hazırdır.
          </motion.p>
      </div>

      {/* İnteraktiv Əlaqə Kartları */}
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 border border-slate-800 rounded-lg p-8 text-center flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05, boxShadow: '0 10px 20px rgba(0, 85, 255, 0.15)' }}
            >
              <div className="mb-6">{method.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3">{method.title}</h3>
              <p className="text-gray-400 text-lg">{method.detail}</p>
            </motion.a>
          ))}
        </div>
      </div>
      
      {/* Xəritə Bölməsi */}
      <div className="w-full h-[500px] mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.163299718428!2d49.8706245766299!3d40.40523475573434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4030631315b81db3%3A0x1d46df317a361323!2sChinar%20Park%20Business%20Center!5e0!3m2!1sen!2saz!4v1727088934149!5m2!1sen!2saz"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-300"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;