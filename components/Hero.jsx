"use client";
import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaCloud, FaServer } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useSettings } from "../context/SettingsContext";

export default function Hero() {
  const { t } = useTranslation();
  const { dark } = useSettings();

  const cards = [
    {
      icon: <FaLaptopCode className="w-8 h-8 mb-2 text-[#26A0DC]" />,
      title: t("web"),
      text: t("webText"),
    },
    {
      icon: <FaMobileAlt className="w-8 h-8 mb-2 text-[#26A0DC]" />,
      title: t("app"),
      text: t("appText"),
    },
    {
      icon: <FaCloud className="w-8 h-8 mb-2 text-[#26A0DC]" />,
      title: t("cloud"),
      text: t("cloudText"),
    },
    {
      icon: <FaServer className="w-8 h-8 mb-2 text-[#26A0DC]" />,
      title: t("infra"),
      text: t("infraText"),
    },
  ];

  return (
    <section
      id="hero"
      className={`relative ${dark ? "text-white" : "text-gray-900"}`}
      style={{
        backgroundImage: "url('/images/1155692_5940.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
        backgroundColor: "#26A0DC",
      }}
    >
      <div className="max-w-7xl mx-auto w-full px-6 py-20 flex flex-col gap-12">
        {/* Row 1: الصورة على اليسار والنص على اليمين */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* الصورة على اليسار */}
          {/* <div className="flex-1 hidden md:block">
            <img
              src="/images/itSupport-rmbg.png"
              alt="Vector Art"
              className="w-full h-auto"
            />
          </div> */}

          {/* النص والزر على اليمين بالكامل */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 flex flex-col items-end text-right"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {t("title")}
            </h1>
            <p className="text-lg md:text-2xl mb-6">{t("subtitle")}</p>
            <a
              href="#services"
              className={`inline-block px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all ${
                dark
                  ? "bg-gradient-to-r from-[#1B82C9] to-[#26A0DC] text-white"
                  : "bg-gradient-to-r from-[#26A0DC] to-[#1B82C9] text-white"
              }`}
            >
              {t("button")}
            </a>
          </motion.div>

          <div className="flex-1 hidden md:block">
            <img
              src="/images/itSupport-rmbg.png"
              alt="Vector Art"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Row 2: الكارد أفقي يبدأ من اليمين */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-row-reverse flex-wrap gap-6"
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className={`bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 flex-1 min-w-[250px] flex flex-col items-center text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-transform ${
                dark ? "text-white" : "text-black"
              }`}
            >
              {card.icon}
              <h3 className="font-bold text-xl mb-2">{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
