// "use client";
// import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next";

// export default function AboutSection() {
//   const { t } = useTranslation();

//   return (
//     <section
//       id="about"
//       className="py-24 px-6"
//       style={{
//         backgroundImage: "linear-gradient(to bottom, #0049BF 20%, #004FC4 80%)",
//       }}
//     >
//       <div className="max-w-6xl mx-auto text-center">
//         {/* العنوان */}
//         <motion.h2
//           initial={{ opacity: 0, y: -30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-4xl font-bold text-white mb-10"
//         >
//           {t("aboutTitle", "من نحن")}
//         </motion.h2>

//         {/* المحتوى الداخلي */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.85 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="bg-white/15 backdrop-blur-md border border-white/20 
//                      rounded-3xl p-8 md:p-12 shadow-xl mx-auto max-w-4xl text-white"
//         >
//           <p className="text-lg leading-relaxed mb-6">
//             {t(
//               "aboutText1",
//               "نحن شركة تقنية متخصصة في تقديم الحلول الذكية المتكاملة، ونهدف إلى دعم أعمالكم عبر خدمات احترافية تشمل الشبكات، الأنظمة، السحابة، البرمجيات، والصيانة."
//             )}
//           </p>

//           <p className="text-lg leading-relaxed mb-6">
//             {t(
//               "aboutText2",
//               "نعمل بفريق تقني بخبرات عالية لضمان تنفيذ المشاريع بأعلى جودة وبأفضل معايير الأمان والأداء."
//             )}
//           </p>

//           <p className="text-lg leading-relaxed">
//             {t(
//               "aboutText3",
//               "رسالتنا هي توفير حلول تعتمد على الإبداع والابتكار لمساعدة الشركات على التحول الرقمي وتحقيق النمو."
//             )}
//           </p>
//         </motion.div>

//         {/* 3 بطاقات جانبية مع أيقونات */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          
//           {/* الثقة */}
//           <motion.div
//             initial={{ opacity: 0, y: 25 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-white shadow-lg flex flex-col items-center"
//           >
//             {/* أيقونة */}
//             <div className="bg-white/20 p-4 rounded-full mb-4">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12l9 4.5-9 4.5-9-4.5 9-4.5z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12V3m0 0L3 7.5M12 3l9 4.5" />
//               </svg>
//             </div>
//             <h3 className="font-bold text-xl mb-2">{t("aboutCard1", "ثقة")}</h3>
//             <p className="text-sm opacity-90">
//               {t(
//                 "aboutCard1Text",
//                 "ملتزمون بتقديم خدمات موثوقة وجودة عالية تضمن رضا عملائنا."
//               )}
//             </p>
//           </motion.div>

//           {/* الجودة */}
//           <motion.div
//             initial={{ opacity: 0, y: 25 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.75 }}
//             viewport={{ once: true }}
//             className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-white shadow-lg flex flex-col items-center"
//           >
//             {/* أيقونة */}
//             <div className="bg-white/20 p-4 rounded-full mb-4">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//               </svg>
//             </div>
//             <h3 className="font-bold text-xl mb-2">{t("aboutCard2", "جودة")}</h3>
//             <p className="text-sm opacity-90">
//               {t(
//                 "aboutCard2Text",
//                 "نطبق أعلى المعايير في التنفيذ لضمان كفاءة الأنظمة واستمراريتها."
//               )}
//             </p>
//           </motion.div>

//           {/* الابتكار */}
//           <motion.div
//             initial={{ opacity: 0, y: 25 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.9 }}
//             viewport={{ once: true }}
//             className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-white shadow-lg flex flex-col items-center"
//           >
//             {/* أيقونة */}
//             <div className="bg-white/20 p-4 rounded-full mb-4">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//               </svg>
//             </div>
//             <h3 className="font-bold text-xl mb-2">{t("aboutCard3", "ابتكار")}</h3>
//             <p className="text-sm opacity-90">
//               {t(
//                 "aboutCard3Text",
//                 "نسعى دائمًا لتقديم حلول متطورة تساعدكم على التقدم والتحول الرقمي."
//               )}
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6"
      style={{
        backgroundImage: "linear-gradient(to bottom, #0049BF 20%, #004FC4 80%)",
      }}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* العنوان */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-10"
        >
          {t("aboutTitle", "من نحن")}
        </motion.h2>

        {/* المحتوى */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white/15 backdrop-blur-md border border-white/20 
                     rounded-2xl p-6 sm:p-10 md:p-12 shadow-xl mx-auto max-w-3xl text-white"
        >
          <p className="text-base sm:text-lg leading-relaxed mb-5">
            {t(
              "aboutText1",
              "نحن شركة تقنية متخصصة في تقديم الحلول الذكية المتكاملة..."
            )}
          </p>

          <p className="text-base sm:text-lg leading-relaxed mb-5">
            {t(
              "aboutText2",
              "نعمل بفريق تقني بخبرات عالية لضمان تنفيذ المشاريع..."
            )}
          </p>

          <p className="text-base sm:text-lg leading-relaxed">
            {t(
              "aboutText3",
              "رسالتنا هي توفير حلول تعتمد على الإبداع والابتكار..."
            )}
          </p>
        </motion.div>

        {/* البطاقات الثلاث */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-12">
          
          {/* بطاقة */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 text-white shadow-lg flex flex-col items-center"
          >
            <div className="bg-white/20 p-3 sm:p-4 rounded-full mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12l9 4.5-9 4.5-9-4.5 9-4.5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12V3m0 0L3 7.5M12 3l9 4.5" />
              </svg>
            </div>
            <h3 className="font-bold text-lg sm:text-xl mb-2">{t("aboutCard1", "ثقة")}</h3>
            <p className="text-sm opacity-90 text-center">
              {t("aboutCard1Text", "ملتزمون بتقديم خدمات موثوقة...")}
            </p>
          </motion.div>

          {/* بطاقة */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 text-white shadow-lg flex flex-col items-center"
          >
            <div className="bg-white/20 p-3 sm:p-4 rounded-full mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-bold text-lg sm:text-xl mb-2">{t("aboutCard2", "جودة")}</h3>
            <p className="text-sm opacity-90 text-center">
              {t("aboutCard2Text", "نطبق أعلى المعايير في التنفيذ...")}
            </p>
          </motion.div>

          {/* بطاقة */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 text-white shadow-lg flex flex-col items-center"
          >
            <div className="bg-white/20 p-3 sm:p-4 rounded-full mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg sm:text-xl mb-2">{t("aboutCard3", "ابتكار")}</h3>
            <p className="text-sm opacity-90 text-center">
              {t("aboutCard3Text", "نسعى دائمًا لتقديم حلول متطورة...")}
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
