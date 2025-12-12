// "use client";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useTranslation } from "react-i18next";

// const servicesData = [
//   { key: "network", img: "/images/extend-networks.png" },
//   { key: "server", img: "/images/server.png" },
//   { key: "camera", img: "/images/cctv.png" },
//   { key: "maintenance", img: "/images/repair.png" },
//   { key: "cloudMgmt", img: "/images/network-removebg.png" },
//   { key: "customSolutions", img: "/images/solutions-tech.png" },
//   { key: "webApp", img: "/images/programing.png" },
//   { key: "contracts", img: "/images/contract.png" },
// ];

// export default function Services() {
//   const { t, i18n } = useTranslation();

//   const [index, setIndex] = useState(0);
//   const [direction, setDirection] = useState(1);
//   const [isRTL, setIsRTL] = useState(i18n.dir() === "rtl");
//   const [langKey, setLangKey] = useState(i18n.language);

//   useEffect(() => {
//     const change = () => {
//       setIsRTL(i18n.dir() === "rtl");
//       setLangKey(i18n.language);
//     };
//     i18n.on("languageChanged", change);
//     return () => i18n.off("languageChanged", change);
//   }, [i18n]);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       nextCard();
//     }, 4000);
//     return () => clearInterval(timer);
//   });

//   const nextCard = () => {
//     setDirection(1);
//     setIndex((prev) => (prev + 1) % servicesData.length);
//   };

//   const prevCard = () => {
//     setDirection(-1);
//     setIndex((prev) => (prev - 1 + servicesData.length) % servicesData.length);
//   };

//   const getX = (dir) => (isRTL ? -dir * 120 : dir * 120);

//   // البطاقات الثلاث
//   const left = servicesData[(index - 1 + servicesData.length) % servicesData.length];
//   const center = servicesData[index];
//   const right = servicesData[(index + 1) % servicesData.length];

//   return (
//     <section
//       id="services"
//       className="py-20 px-6"
//       style={{
//         backgroundImage: "linear-gradient(to bottom, #0083DA 10%, #0049BF 70%)",
//       }}
//     >
//       <h2 className="text-3xl font-bold text-center mb-12 text-white">
//         {t("servicesTitle")}
//       </h2>

//       {/* السلايدر */}
//       <div
//         className={`max-w-6xl mx-auto flex items-center justify-center gap-8 ${
//           isRTL ? "flex-row-reverse" : "flex-row"
//         }`}
//       >
//         {/* left */}
//         <button
//           onClick={prevCard}
//           className="bg-white text-[#26A0DC] px-4 py-3 rounded-xl shadow-lg hover:scale-110 transition"
//         >
//           {isRTL ? "→" : "←"}
//         </button>

//         {/* 3 كروت */}
//         <div className="flex items-center justify-center gap-6 relative">

//           {/* الكارد اليسار */}
//           <div
//             className="w-48 opacity-50 blur-[1px] hover:opacity-80 hover:scale-105 transition 
//             bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-2xl p-4 h-[300px]
//             flex flex-col items-center text-center"
//           >
//             <img src={left.img} className="w-full h-28 object-contain mb-2" />
//             <h3 className="text-sm font-semibold">{t(left.key)}</h3>
//           </div>

//           {/* الكارد الأساسي */}
//           <div className="w-72 h-[360px] overflow-hidden">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={`${center.key}-${index}-${langKey}`}
//                 initial={{ opacity: 0, x: getX(direction), scale: 0.85 }}
//                 animate={{ opacity: 1, x: 0, scale: 1 }}
//                 exit={{ opacity: 0, x: getX(-direction), scale: 0.85 }}
//                 transition={{ duration: 0.55 }}
//                 className="bg-white/25 backdrop-blur-md border border-white/40 text-white rounded-2xl p-6 
//                 w-full h-full flex flex-col items-center text-center shadow-xl hover:scale-105 transition"
//               >
//                 <img
//                   src={center.img}
//                   alt={t(center.key)}
//                   className="w-full h-40 object-contain mb-3"
//                 />
//                 <h3 className="font-bold text-lg mb-1">{t(center.key)}</h3>
//                 <p className="text-sm opacity-90">{t(center.key + "Text")}</p>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* الكارد اليمين */}
//           <div
//             className="w-48 opacity-50 blur-[1px] hover:opacity-80 hover:scale-105 transition
//             bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-2xl p-4 h-[300px]
//             flex flex-col items-center text-center"
//           >
//             <img src={right.img} className="w-full h-28 object-contain mb-2" />
//             <h3 className="text-sm font-semibold">{t(right.key)}</h3>
//           </div>
//         </div>

//         {/* right */}
//         <button
//           onClick={nextCard}
//           className="bg-white text-[#26A0DC] px-4 py-3 rounded-xl shadow-lg hover:scale-110 transition"
//         >
//           {isRTL ? "←" : "→"}
//         </button>
//       </div>

//       {/* النقاط */}
//       <div className="flex justify-center mt-6 gap-2">
//         {servicesData.map((_, i) => (
//           <div
//             key={i}
//             className={`w-3 h-3 rounded-full transition-all ${
//               i === index ? "bg-white scale-125" : "bg-white/40"
//             }`}
//           ></div>
//         ))}
//       </div>
//     </section>
//   );
// }




"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const servicesData = [
  { key: "network", img: "/images/extend-networks.png" },
  { key: "server", img: "/images/server.png" },
  { key: "camera", img: "/images/cctv.png" },
  { key: "maintenance", img: "/images/repair.png" },
  { key: "cloudMgmt", img: "/images/network-removebg.png" },
  { key: "customSolutions", img: "/images/solutions-tech.png" },
  { key: "webApp", img: "/images/programing.png" },
  { key: "contracts", img: "/images/contract.png" },
];

export default function Services() {
  const { t, i18n } = useTranslation();

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isRTL, setIsRTL] = useState(i18n.dir() === "rtl");
  const [langKey, setLangKey] = useState(i18n.language);

  useEffect(() => {
    const change = () => {
      setIsRTL(i18n.dir() === "rtl");
      setLangKey(i18n.language);
    };
    i18n.on("languageChanged", change);
    return () => i18n.off("languageChanged", change);
  }, [i18n]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextCard();
    }, 4000);
    return () => clearInterval(timer);
  });

  const nextCard = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % servicesData.length);
  };

  const prevCard = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + servicesData.length) % servicesData.length);
  };

  const getX = (dir) => (isRTL ? -dir * 120 : dir * 120);

  // البطاقات الثلاث
  const left = servicesData[(index - 1 + servicesData.length) % servicesData.length];
  const center = servicesData[index];
  const right = servicesData[(index + 1) % servicesData.length];

  return (
    <section
      id="services"
      className="py-20 px-6"
      style={{
        backgroundImage: "linear-gradient(to bottom, #0083DA 10%, #0049BF 70%)",
      }}
    >
      <h2 className="text-3xl font-bold text-center mb-12 text-white">
        {t("servicesTitle")}
      </h2>

      {/* السلايدر */}
      <div
        className={`max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center 
        gap-6 md:gap-8 ${isRTL ? "md:flex-row-reverse" : "md:flex-row"}`}
      >
        {/* left */}
        <button
          onClick={prevCard}
          className="bg-white text-[#26A0DC] px-3 py-2 md:px-4 md:py-3 
          rounded-xl shadow-lg hover:scale-110 transition"
        >
          {isRTL ? "→" : "←"}
        </button>

        {/* 3 كروت */}
        <div className="flex items-center justify-center gap-4 md:gap-6 relative">

          {/* الكارد اليسار */}
          <div
            className="w-32 h-[220px] md:w-48 md:h-[300px] opacity-50 blur-[1px] hover:opacity-80 
            hover:scale-105 transition bg-white/20 backdrop-blur-md border border-white/30 
            text-white rounded-2xl p-4 flex flex-col items-center text-center"
          >
            <img src={left.img} className="w-full h-20 md:h-28 object-contain mb-2" />
            <h3 className="text-xs md:text-sm font-semibold">{t(left.key)}</h3>
          </div>

          {/* الكارد الأساسي */}
          <div className="w-64 h-[300px] md:w-72 md:h-[360px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${center.key}-${index}-${langKey}`}
                initial={{ opacity: 0, x: getX(direction), scale: 0.85 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: getX(-direction), scale: 0.85 }}
                transition={{ duration: 0.55 }}
                className="bg-white/25 backdrop-blur-md border border-white/40 text-white rounded-2xl 
                p-6 w-full h-full flex flex-col items-center text-center shadow-xl hover:scale-105 transition"
              >
                <img
                  src={center.img}
                  alt={t(center.key)}
                  className="w-full h-28 md:h-40 object-contain mb-3"
                />
                <h3 className="font-bold text-md md:text-lg mb-1">{t(center.key)}</h3>
                <p className="text-xs md:text-sm opacity-90">{t(center.key + "Text")}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* الكارد اليمين */}
          <div
            className="w-32 h-[220px] md:w-48 md:h-[300px] opacity-50 blur-[1px] hover:opacity-80 
            hover:scale-105 transition bg-white/20 backdrop-blur-md border border-white/30 
            text-white rounded-2xl p-4 flex flex-col items-center text-center"
          >
            <img src={right.img} className="w-full h-20 md:h-28 object-contain mb-2" />
            <h3 className="text-xs md:text-sm font-semibold">{t(right.key)}</h3>
          </div>
        </div>

        {/* right */}
        <button
          onClick={nextCard}
          className="bg-white text-[#26A0DC] px-3 py-2 md:px-4 md:py-3 
          rounded-xl shadow-lg hover:scale-110 transition"
        >
          {isRTL ? "←" : "→"}
        </button>
      </div>

      {/* النقاط */}
      <div className="flex justify-center mt-6 gap-2 scale-90 md:scale-100">
        {servicesData.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all ${
              i === index ? "bg-white scale-125" : "bg-white/40"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
}
