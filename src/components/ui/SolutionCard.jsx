// // src/components/ui/SolutionCard.jsx
// import React, { useRef } from 'react';
// import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

// const SolutionCard = ({ icon, title, description }) => {
//   const ref = useRef(null);

//   // Mouse mövqeyini izləmək üçün
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   // Mouse mövqeyinə görə fırlanma dərəcəsini hesablamaq
//   const rotateX = useTransform(y, [0, 200], [15, -15]); // 200 kartın hündürlüyüdür
//   const rotateY = useTransform(x, [0, 300], [-15, 15]); // 300 kartın enidir

//   // Fırlanmanı daha hamar etmək üçün spring effekti
//   const springRotateX = useSpring(rotateX, { stiffness: 400, damping: 90 });
//   const springRotateY = useSpring(rotateY, { stiffness: 400, damping: 90 });
  
//   // İç elementlər üçün parallax effekti
//   const translateX = useTransform(x, [0, 300], [-10, 10]);
//   const translateY = useTransform(y, [0, 200], [-10, 10]);

//   const handleMouseMove = (e) => {
//     if (!ref.current) return;
//     const rect = ref.current.getBoundingClientRect();
//     x.set(e.clientX - rect.left);
//     y.set(e.clientY - rect.top);
//   };

//   const handleMouseLeave = () => {
//     x.set(150); // Mərkəzə qaytarmaq üçün enin yarısı
//     y.set(100); // Mərkəzə qaytarmaq üçün hündürlüyün yarısı
//   };

//   return (
//     <motion.div
//       ref={ref}
//       className="relative w-[300px] h-[200px] bg-slate-800/50 rounded-xl p-6 border border-slate-700 flex flex-col justify-end"
//       style={{
//         transformStyle: 'preserve-3d',
//         rotateX: springRotateX,
//         rotateY: springRotateY,
//       }}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       whileHover={{ scale: 1.05, boxShadow: '0px 20px 30px rgba(0, 0, 0, 0.2)' }}
//     >
//       <motion.div
//         className="absolute top-6 left-6"
//         style={{
//           translateX,
//           translateY,
//           transform: 'translateZ(50px)', // İkonu qabağa çıxarır
//         }}
//       >
//         <div className="bg-slate-700/50 p-3 rounded-lg">
//           {icon}
//         </div>
//       </motion.div>
//       <motion.h3 
//         className="text-xl font-bold text-white"
//         style={{ transform: 'translateZ(30px)' }} // Mətni bir az qabağa çıxarır
//       >
//         {title}
//       </motion.h3>
//     </motion.div>
//   );
// };

// export default SolutionCard;