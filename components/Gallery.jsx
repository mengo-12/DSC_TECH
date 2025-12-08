"use client";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t, i18n } = useTranslation();
  const rtl = i18n.dir() === "rtl";

  const items = [
    {
      icon: "🌐",
      img: "/images/install-rack.jpg",
      titleKey: "proj_network",
      descKey: "proj_network_desc",
    },
    {
      icon: "🖥️",
      img: "/images/network-server.jpg",
      titleKey: "proj_server",
      descKey: "proj_server_desc",
    },
    {
      icon: "📹",
      img: "/images/work-camera.jpg",
      titleKey: "proj_camera",
      descKey: "proj_camera_desc",
    },
    {
      icon: "⏱️",
      img: "/images/Attendance.jpg",
      titleKey: "proj_attendance",
      descKey: "proj_attendance_desc",
    },
    {
      icon: "📞",
      img: "/images/voip-system.jpg",
      titleKey: "proj_voip",
      descKey: "proj_voip_desc",
    },
    {
      icon: "🛡️",
      img: "/images/cyber-security.jpg",
      titleKey: "proj_cyber",
      descKey: "proj_cyber_desc",
    },
    {
      icon: "💻",
      img: "/images/web-app.jpg",
      titleKey: "proj_web",
      descKey: "proj_web_desc",
    },
    {
      icon: "🔧",
      img: "/images/maintenance.jpg",
      titleKey: "proj_maintenance",
      descKey: "proj_maintenance_desc",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-6 text-white relative"
      style={{ backgroundColor: "#0049BF" }}
    >
      <h2 className="text-4xl font-bold text-center mb-20">
        {t("ourProjects")}
      </h2>

      <div className="relative max-w-6xl mx-auto">
        {/* الخط المركزي */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[3px] bg-white/20 z-0"></div>

        {items.map((item, i) => {
          const isLeft = i % 2 === 0;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-24 flex flex-col md:flex-row items-center gap-10 z-10 ${
                isLeft ? "" : "md:flex-row-reverse"
              }`}
            >
              {/* رقم Timeline */}
              <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 bg-white text-[#0049BF] font-bold rounded-full border-4 border-[#0049BF] z-20 text-lg">
                {i + 1}
              </div>

              {/* الصورة */}
              <motion.div
                className="w-full md:w-1/2 flex justify-center"
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <div className="w-full max-w-[320px] h-44 rounded-2xl overflow-hidden shadow-xl group bg-white/10 border border-white/10 cursor-pointer">
                  <img
                    src={item.img}
                    alt={t(item.titleKey)}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>
              </motion.div>

              {/* النص */}
              <motion.div
                className="w-full md:w-1/2 text-center md:text-left"
                initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.3 }}
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{t(item.titleKey)}</h3>
                <p className="opacity-90 text-lg leading-relaxed">
                  {t(item.descKey)}
                </p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
