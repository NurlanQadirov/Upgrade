import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    CheckCircle, Shield, Globe, BarChart2, KeyRound, FileLock, Laptop, Network, Bot, 
    Fingerprint, FileSearch, Smartphone, ShieldAlert, Users, Search, Box, Presentation, Database, X 
} from 'lucide-react';

const allServices = [
  {
    icon: <Shield />,
    title: "NGFW (Next-Generation Firewall)",
    shortDesc: "Tətbiq səviyyəsində təhlükəsizliyi təmin edən və zərərli proqramları aşkar edən qabaqcıl firewall.",
    fullDesc: "Ənənəvi firewall sistemlərindən daha qabaqcıl təhlükəsizlik funiyaları təqdim edir. Vebtrafikini filtrləyərək, tətbiq səviyyəsində təhlükəsizliyi təmin edir, zərərli proqramları (malware) aşkar edir və müdaxilələrin qarşısını alır." ,
    features: ["Dərin paket analizi (DPI)", "Tətbiq səviyyəsində filtr", "Müdaxilə qarşısının alınması sistemi (IPS)", "Veb və URL filtri"]
  },
  {
    icon: <Globe />,
    title: "WAF (Web Application Firewall)",
    shortDesc: "Veb tətbiqlərinizi zərərli trafikdən və hücumlardan qoruyan xüsusi təhlükəsizlik qalxanı.",
    fullDesc: "Veb tətbiqlərin təhlükəsizliyini təmin edən və onlara yönələn zərərli trafiki aşkarlayaraq bloklayan təhlükəsizlik texnologiyasıdır. WAF, veb serverlərin qarşısında dayanaraq, tətbiqlərin həssas məlumatlarını qoruyur." ,
    features: ["Zərərli trafikin bloklanması", "Trafikin monitorinqi və analizi", "API təhlükəsizliyinin təmin edilməsi", "Uyğunluq tələblərinin ödənilməsi (ISO 27001, GDPR və s.)"]
  },
  {
    icon: <BarChart2 />,
    title: "SIEM (Security Information and Event Management)",
    shortDesc: "Təhlükəsizlik hadisələrini real vaxtda izləyən, analiz edən və mərkəzləşdirilmiş platforma təqdim edən həll.",
    fullDesc: "Təhlükəsizlik hadisələrini real vaxt rejimində izləmək, analiz etmək və insidentlərə reaksiya vermək üçün nəzərdə tutulmuş təhlükəsizlik həllidir. Təhlükəsizlik tədbirlərinin koordinasiyası üçün mərkəzi platforma təqdim edir." ,
    features: ["Real vaxtda təhlükəsizlik hadisələrinin monitorinqi", "Hadisələrin korrelyasiyası", "Təhlükəsizlik təhlilləri və hesabatlar"]
  },
  {
    icon: <Bot />,
    title: "SOAR (Security Orchestration, Automation, and Response)",
    shortDesc: "Təhlükəsizlik əməliyyatlarını avtomatlaşdıran və insidentlərə reaksiyanı sürətləndirən texnologiya.",
    fullDesc: "Təhlükəsizlik əməliyyatlarını avtomatlaşdırmaq və təhlükəsizlik komandalarının effektiv cavab verməsini təmin etmək üçün istifadə edilən texnoloji həldir." ,
    features: ["Təhlükəsizlik proseslərinin avtomatlaşdırılması", "Hadisələrə avtomatik cavab", "Təhlükəsizlik alətlərinin inteqrasiyası"]
  },
  {
    icon: <KeyRound />,
    title: "PAM (Privileged Access Management)",
    shortDesc: "Yüksək səlahiyyətli istifadəçilərin kritik sistemlərə girişlərini idarə edən və nəzarətdə saxlayan həll.",
    fullDesc: "Yüksək səlahiyyətli istifadəçilərin sistemlərə, şəbəkələrə və kritik məlumatlara giriş hüquqlarını idarə edən, məhdudlaşdıran və nəzarətdə saxlayan təhlükəsizlik həllidir." ,
    features: ["İmtiyazlı hesabların idarə edilməsi", "Giriş məlumatlarının qorunması", "Fəaliyyətlərin monitorinqi və audit"]
  },
  {
    icon: <Fingerprint />,
    title: "MFA (Multi-Factor Authentication)",
    shortDesc: "Girişləri birdən çox təsdiqləmə metodu ilə qoruyan güclü təhlükəsizlik mexanizmi.",
    fullDesc: "İstifadəçilərin identifikasiyasını təsdiqləmək üçün birdən çox metod (parol, SMS kod, biometrik məlumat) istifadə edən təhlükəsizlik mexanizmidir." ,
    features: ["Parol ilə yanaşı, SMS kodu, biometrik məlumat və ya tətbiq təsdiqi", "Hesabların qorunmasının gücləndirilməsi"]
  },
  {
    icon: <FileLock />,
    title: "DLP (Data Loss Prevention)",
    shortDesc: "Həssas məlumatların şirkət daxilindən kənara sızmasının və icazəsiz paylaşılmasının qarşısını alır.",
    fullDesc: "Məlumatların icazəsiz paylaşılmasının və sızmasının qarşısını almaq üçün istifadə edilən təhlükəsizlik sistemidir." ,
    features: ["Məlumatların izlənməsi və qorunması", "Qadağan edilmiş fəaliyyətlərin bloklanması", "Məlumat sızmasının qarşısının alınması"]
  },
  {
    icon: <FileSearch />,
    title: "AST (Application Security Testing)",
    shortDesc: "Proqram təminatındakı təhlükəsizlik boşluqlarını aşkarlamaq üçün statik və dinamik analiz metodları.",
    fullDesc: "Tətbiqlərin təhlükəsizliyini yoxlamaq üçün istifadə olunan test metodlarıdır. Məqsəd, proqram təminatındakı potensial zəiflikləri inkişaf mərhələsində aşkarlamaqdır." ,
    features: ["Statik təhlil (SAST)", "Dinamik təhlil (DAST)", "Tətbiq kontentinin təhlükəsizliyinin analizi (SCA)"]
  },
  {
    icon: <Laptop />,
    title: "EDR (Endpoint Detection and Response)",
    shortDesc: "İstifadəçi cihazlarında (kompüter, noutbuk) təhlükəsizlik hadisələrini aşkarlayan və cavab verən sistem.",
    fullDesc: "Son nöqtə yaxud istifadəçi cihazlarında təhlükəsizlik hadisələrini aşkarlayan və onlara cavab verən sistemdir." ,
    features: ["Zərərli fəaliyyətlərin davranış əsaslı aşkarlanması", "Hadisələrə real vaxtda cavab", "Son nöqtələrin monitorinqi"]
  },
  {
    icon: <Network />,
    title: "XDR (Extended Detection and Response)",
    shortDesc: "EDR-in imkanlarını şəbəkə və bulud sistemlərini də əhatə edəcək şəkildə genişləndirir.",
    fullDesc: "EDR-dan daha geniş çərçivədə təhlükəsizlik hadisələrini aşkarlayan və təhlil edən sistemdir." ,
    features: ["Şəbəkə, bulud və son nöqtə cihazlarında təhlükəsizlik təhlili", "Süni intellekt və çoxsəviyyəli korrelyasiya ilə aşkarlama", "SIEM və SOAR ilə tam inteqrasiya"]
  },
  {
    icon: <Smartphone />,
    title: "EMM (Enterprise Mobility Management)",
    shortDesc: "Korporativ mühitdə mobil cihazların (telefon, planşet) və tətbiqlərin idarə edilməsini təmin edir.",
    fullDesc: "Mobil cihazların və tətbiqlərin idarə edilməsini təmin edən sistemdir. Bu, şirkət məlumatlarının mobil cihazlarda təhlükəsiz saxlanmasına kömək edir." ,
    features: ["Mobil cihazların idarə edilməsi (MDM)", "Mobil tətbiqlərin idarə edilməsi (MAM)", "Mobil kontentin idarə edilməsi (MCM)"]
  },
  {
    icon: <ShieldAlert />,
    title: "DNS Security",
    shortDesc: "Domen adı sistemini (DNS) qoruyaraq zərərli saytlara girişi və phishing hücumlarını bloklayır.",
    fullDesc: "Şəbəkədə domen adı sisteminin qorunmasına yönəlmiş tədbirlər toplusudur. DNS hücumlarına qarşı müdafiə məqsədi daşıyır." ,
    features: ["Zərərli trafiki bloklamaq", "DNS \"tunneling\" və \"phishing\" hücumlarının qarşısını almaq", "DNSSEC vasitəsilə verilənlərin tamlığını təmin etmək"]
  },
  {
    icon: <Users />,
    title: "IAM (Identity and Access Management)",
    shortDesc: "İstifadəçilərin kimliklərini və sistemlərə giriş icazələrini idarə edən mərkəzi sistem.",
    fullDesc: "İstifadəçilərin və cihazların kimliklərinin idarə olunmasını və onlara verilən icazələrin müəyyən edilməsini təmin edən sistemdir." ,
    features: ["İstifadəçilərin identifikasiyasını və autentifikasiyanı idarə etmək", "Single Sign-On (SSO) tətbiqi", "Çoxfaktorlu autentifikasiya (MFA) tətbiq etmək"]
  },
  {
    icon: <Search />,
    title: "TI (Threat Intelligence)",
    shortDesc: "Potensial kiber təhlükələr haqqında məlumat toplayıb analiz edərək qabaqlayıcı tədbirlər görməyə imkan verir.",
    fullDesc: "Kiber təhlükələrə qarşı qabaqlayıcı tədbirlər görmək üçün istifadə edilən məlumatların toplanması, təhlili və istifadəsidir." ,
    features: ["Potensial hücum vektorlarını müəyyən etmək", "APT hücumlarını aşkarlamaq", "Zərərli IP və domenləri bloklamaq"]
  },
  {
    icon: <Box />,
    title: "Sandbox",
    shortDesc: "Şübhəli faylları və proqramları təhlükəsiz, təcrid olunmuş mühitdə analiz etmək üçün texnologiya.",
    fullDesc: "Sandbox, potensial zərərli proqramları təhlükəsiz mühitdə tətbiq edərək onların davranışlarını analiz etmək üçün istifadə edilən texnologiyadır." ,
    features: ["Zərərli proqramları təcrid olunmuş virtual mühitdə test etmək", "\"Zero-day\" hücumları aşkarlamaq", "Faylları və kodları təhlükəsiz analiz etmək"]
  },
  {
    icon: <Presentation />,
    title: "SAT (Security Awareness Training)",
    shortDesc: "İşçiləri kiber təhlükələr barədə maarifləndirərək insan faktorundan qaynaqlanan riskləri azaldır.",
    fullDesc: "Təşkilatların işçilərini kiber təhlükələr, məlumat təhlükəsizliyi və fırıldaqçılıq cəhdləri barədə maarifləndirmək üçün nəzərdə tutulan bir təlim proqramıdır." ,
    features: ["İşçilərin maarifləndirilməsi", "Kiber təhlükələrə qarşı hazırlıq", "Fırıldaqçılıq və daxili risklərin azaldılması"]
  },
  {
    icon: <Database />,
    title: "DAM (Database Activity Monitoring)",
    shortDesc: "Məlumat bazalarına bütün girişləri və sorğuları real vaxt rejimində izləyərək təhlükəsizliyi təmin edir.",
    fullDesc: "Məlumat bazalarına girişləri izləyən və analiz edən təhlükəsizlik həllidir." ,
    features: ["Bütün SQL sorğularını real vaxt rejimində izləmək", "Şübhəli və icazəsiz giriş cəhdlərini aşkar etmək", "Daxili təhdidlərə qarşı müdafiəni gücləndirmək"]
  },
];


const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="pt-20 bg-slate-950">
      <div className="py-16 text-center bg-slate-950 px-4">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Xidmətlər və <span className="text-upgrade-blue">Həllər</span>
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-400 max-w-3xl mx-auto mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Biznesinizi müasir təhdidlərdən qorumaq və rəqəmsal infrastrukturunuzu gücləndirmək üçün təqdim etdiyimiz hərtərəfli xidmətlər kataloqu.
          </motion.p>
      </div>

      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service, index) => (
            <motion.div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-lg p-8 flex flex-col text-center items-center transform hover:-translate-y-2 transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="text-upgrade-blue text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3 h-16 flex items-center justify-center">{service.title}</h3>
              <p className="text-gray-400 mb-6 flex-grow">{service.shortDesc}</p>
              <button
                onClick={() => setSelectedService(service)}
                className="mt-auto bg-slate-800 text-cyan-400 font-semibold py-2 px-5 rounded-full hover:bg-upgrade-blue hover:text-white transition-colors duration-300"
              >
                Ətraflı Bax
              </button>
            </motion.div>
          ))}
        </div>
      </div>
      
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              className="bg-slate-900 border border-slate-700 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* DÜZƏLİŞ: Bağlama düyməsi sağ-yuxarı küncə çəkildi və dizaynı sadələşdirildi */}
              <button 
                onClick={() => setSelectedService(null)} 
                className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors z-10"
              >
                <X size={28} />
              </button>

              <div className="flex items-start gap-6">
                <div className="text-upgrade-blue text-4xl mt-1">{selectedService.icon}</div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">{selectedService.title}</h2>
                  <p className="text-gray-300 mb-6 leading-relaxed">{selectedService.fullDesc}</p>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-4">Əsas Funksiyaları:</h3>
                  <ul className="space-y-3">
                    {selectedService.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-upgrade-blue mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default ServicesPage;