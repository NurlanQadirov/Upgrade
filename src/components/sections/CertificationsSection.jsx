import React from 'react';
import { motion } from 'framer-motion';

const certifications = [
  // Kataloqdakı sertifikatlardan nümunələr
  { name: 'AWS Certified Security', imgSrc: 'https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Security-Specialty_badge.634b76ba5b21e0569f74325a50d20d43521b2890.png' },
  { name: 'Azure Administrator Associate', imgSrc: 'https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg' },
  { name: 'Red Hat Certified Engineer', imgSrc: 'https://static.redhat.com/rhdc/managed-files/rh-certified-engineer-logomark-rgb-wht-300x293.png' },
  { name: 'CISM', imgSrc: 'https://www.isaca.org/-/media/images/isacadigital/digital-badges/cism-2022-rgb.png' },
  { name: 'CISSP', imgSrc: 'https://www.isc2.org/-/media/ISC2/Core/badges/CISSP_color_2021.svg' },
  { name: 'Certified Ethical Hacker', imgSrc: 'https://cyber-world.nyc3.cdn.digitaloceanspaces.com/2023/04/CEH-v12-logo.png' },
  { name: 'Fortinet Certified Professional', imgSrc: 'https://static.credly.com/images/158f969b-bb51-401d-a94c-81b29a28e9ae/image.png' },
  { name: 'Google Cloud Architect', imgSrc: 'https://google.accredible.com/wp-content/uploads/2022/08/Google-Cloud-Certified-Professional-Cloud-Architect.png' },
  { name: 'CCNP Security', imgSrc: 'https://images.credly.com/images/8f521b47-6add-415d-91b1-21e10223f2f1/ccnp-security.png' },
  { name: 'ITIL Foundation', imgSrc: 'https://www.axelos.com/getmedia/e9b508f7-331f-4a0b-9c3a-86a07629b3a9/itil-4-foundation-badge-2020.aspx?width=280&height=280&ext=.png' },
  { name: 'Palo Alto PCNSA', imgSrc: 'https://static.credly.com/images/3d62325a-4467-460a-9774-3252a1a8a08d/PCNSA.png' },
  { name: 'Microsoft 365 Enterprise Administrator', imgSrc: 'https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-expert-badge.svg' },
];

const CertificationsSection = () => {
  return (
    <div className="py-20 bg-slate-950 overflow-hidden px-4">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
        >
          Ekspertlərimizin <span className="text-upgrade-blue">Sertifikatları</span>
        </motion.h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-24 h-24 md:w-32 md:h-32 bg-slate-800 rounded-full flex items-center justify-center p-4 border-2 border-slate-700 transition-all duration-300 group-hover:border-upgrade-blue group-hover:scale-110">
                <img src={cert.imgSrc} alt={cert.name} className="max-w-full max-h-full object-contain" />
              </div>
              <div className="absolute bottom-full mb-2 w-max max-w-xs left-1/2 -translate-x-1/2 bg-slate-700 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {cert.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationsSection;