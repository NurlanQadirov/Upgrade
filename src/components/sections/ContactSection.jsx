import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-grid-pattern">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
        {/* Sol Sütun: Məlumat */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Bizimlə <span className="text-upgrade-blue">Əlaqə</span> Saxlayın
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Biznesiniz üçün ən yaxşı İT həllərini axtarırsınızsa, mütəxəssislərimizə güvənin.
          </p>
          {/* DƏYİŞİKLİK: Əlaqə məlumatları yeniləndi */}
          <div className="space-y-4">
            <a href="mailto:info@upgrade.az" className="flex items-center group">
              <Mail className="w-6 h-6 text-upgrade-blue mr-4" />
              <span className="text-gray-300 group-hover:text-white transition-colors">info@upgrade.az [cite: 401]</span>
            </a>
            <a href="tel:+994125266699" className="flex items-center group">
              <Phone className="w-6 h-6 text-upgrade-blue mr-4" />
              <span className="text-gray-300 group-hover:text-white transition-colors">(+994 12) 526 66 99 [cite: 400]</span>
            </a>
            <div className="flex items-start group">
              <MapPin className="w-6 h-6 text-upgrade-blue mr-4 mt-1 flex-shrink-0" />
              <span className="text-gray-300 group-hover:text-white transition-colors">Ə. Rəcəbli 241B, Çinar Park BM 2, AZ1075 [cite: 399]</span>
            </div>
          </div>
        </motion.div>

        {/* Sağ Sütun: Google Maps */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full h-80 md:h-full"
        >
          {/* DƏYİŞİKLİK: Google Maps linki real ünvana uyğunlaşdırıldı */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.163299718428!2d49.8706245766299!3d40.40523475573434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4030631315b81db3%3A0x1d46df317a361323!2sChinar%20Park%20Business%20Center!5e0!3m2!1sen!2saz!4v1727088934149!5m2!1sen!2saz"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-xl"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;