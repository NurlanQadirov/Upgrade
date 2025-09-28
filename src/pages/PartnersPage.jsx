import React from 'react';
import { motion } from 'framer-motion';

// Kataloqdan götürülmüş partnyorlar
const partners = [
  { name: 'Microsoft', imgSrc: 'https://cdn.worldvectorlogo.com/logos/microsoft-5.svg' },
  { name: 'Cisco', imgSrc: 'https://cdn.worldvectorlogo.com/logos/cisco-2.svg' },
  { name: 'Dell', imgSrc: 'https://cdn.worldvectorlogo.com/logos/dell-1.svg' },
  { name: 'HPE', imgSrc: 'https://cdn.worldvectorlogo.com/logos/hewlett-packard-enterprise-2.svg' },
  { name: 'AWS', imgSrc: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg' },
  { name: 'Fortinet', imgSrc: 'https://cdn.worldvectorlogo.com/logos/fortinet.svg' },
  { name: 'Palo Alto Networks', imgSrc: 'https://cdn.worldvectorlogo.com/logos/palo-alto-networks-1.svg' },
  { name: 'VMware', imgSrc: 'https://cdn.worldvectorlogo.com/logos/vmware.svg' },
  { name: 'Veeam', imgSrc: 'https://cdn.worldvectorlogo.com/logos/veeam-2.svg' },
  { name: 'Check Point', imgSrc: 'https://cdn.worldvectorlogo.com/logos/check-point-software-technologies.svg' },
  { name: 'CrowdStrike', imgSrc: 'https://cdn.worldvectorlogo.com/logos/crowdstrike.svg' },
  { name: 'Kaspersky', imgSrc: 'https://cdn.worldvectorlogo.com/logos/kaspersky-lab-2.svg' },
];

// Kataloqdan götürülmüş müştərilər
const clients = [
  { name: 'Pasha Bank', imgSrc: 'https://cdn.worldvectorlogo.com/logos/pasha-bank-1.svg' },
  { name: 'Azercosmos', imgSrc: 'https://cdn.worldvectorlogo.com/logos/azercosmos.svg' },
  { name: 'Azerbaijan Airlines', imgSrc: 'https://cdn.worldvectorlogo.com/logos/azerbaijan-airlines-logo.svg' },
  { name: 'Azərpoçt', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Logo_of_Az%C9%99rpo%C3%A7t.svg' },
  { name: 'STP', imgSrc: 'https://www.stp.az/frontend/assets/images/logo-light.svg' },
  { name: 'ƏƏSMN', imgSrc: 'https://upload.wikimedia.org/wikipedia/az/thumb/8/82/%C6%8Fm%C9%99k_v%C9%99_%C6%8Fhalinin_Sosial_M%C3%BCdafi%C9%99si_Nazirliyi_loqosu.svg/1200px-%C6%8Fm%C9%99k_v%C9%99_%C6%8Fhalinin_Sosial_M%C3%BCdafi%C9%99si_Nazirliyi_loqosu.svg.png' },
  { name: 'Basqal Resort', imgSrc: 'https://www.basqalresort.az/images/logo-white.svg' },
];

const LogoCard = ({ name, imgSrc }) => (
  <motion.div
    className="h-28 bg-slate-900/50 flex items-center justify-center p-6 rounded-lg border border-slate-800 transition-colors duration-300 hover:bg-slate-800/60"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
    whileHover={{ y: -5, scale: 1.05, boxShadow: '0 10px 20px rgba(0, 85, 255, 0.1)' }}
  >
    <img
      src={imgSrc}
      alt={name}
      className="max-h-full max-w-full object-contain grayscale transition-all duration-300 hover:grayscale-0"
    />
  </motion.div>
);

const PartnersPage = () => {
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
            Tərəfdaşlıq <span className="text-upgrade-blue">Ekosistemimiz</span>
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-400 max-w-3xl mx-auto mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Biz sənayenin lider texnoloji şirkətləri ilə əməkdaşlıq edir və fərqli sektorlardan olan müştərilərimizə yüksək səviyyəli xidmət göstəririk.
          </motion.p>
      </div>

      {/* Loqo Divarı Bölməsi */}
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        
        {/* Texnoloji Partnyorlar */}
        <div>
          <h2 className="text-3xl font-bold text-white text-center mb-10">Texnoloji Tərəfdaşlarımız</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {partners.map(partner => (
              <LogoCard key={partner.name} {...partner} />
            ))}
          </div>
        </div>

        {/* Müştərilər */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-white text-center mb-10">Müştərilərimiz</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {clients.map(client => (
              <LogoCard key={client.name} {...client} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default PartnersPage;