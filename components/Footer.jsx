"use client";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t, i18n } = useTranslation();
  const rtl = i18n.dir() === "rtl";

  return (
    <footer className="bg-[#001F4E] text-white py-16 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Logo + About */}
        <div className={rtl ? "text-right" : "text-left"}>
          <h2 className="text-2xl font-bold mb-4">{t("companyName")}</h2>

          <p className="text-sm opacity-80 leading-relaxed">
            {t("aboutText")}
          </p>

          <div className={`flex mt-6 ${rtl ? "space-x-reverse space-x-4" : "space-x-4"}`}>
            <a href="#" className="hover:opacity-80"><Facebook size={20} /></a>
            <a href="#" className="hover:opacity-80"><Instagram size={20} /></a>
            <a href="#" className="hover:opacity-80"><Linkedin size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className={rtl ? "text-right" : "text-left"}>
          <h3 className="text-xl font-semibold mb-4">{t("quickLinks")}</h3>

          <ul className="space-y-3 opacity-90 text-sm">
            <li className="hover:text-blue-300"><a href="#services">{t("services")}</a></li>
            <li className="hover:text-blue-300"><a href="#projects">{t("projects-footer")}</a></li>
            <li className="hover:text-blue-300"><a href="#about">{t("about-footer")}</a></li>
            <li className="hover:text-blue-300"><a href="#contact">{t("contact")}</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className={rtl ? "text-right" : "text-left"}>
          <h3 className="text-xl font-semibold mb-4">{t("contactUs")}</h3>

          <ul className="space-y-4 opacity-90 text-sm">
            <li className={`flex items-start space-x-2 rtl:space-x-reverse`}>
              <Phone size={18} />
              <span>{t("phone")}</span>
            </li>

            <li className={`flex items-start space-x-2 rtl:space-x-reverse`}>
              <Mail size={18} />
              <span>{t(".email")}</span>
            </li>

            <li className={`flex items-start space-x-2 rtl:space-x-reverse`}>
              <MapPin size={18} />
              <span>{t("address")}</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className={rtl ? "text-right" : "text-left"}>
          <h3 className="text-xl font-semibold mb-4">{t("newsletter")}</h3>

          <p className="text-sm opacity-80 mb-4">{t("newsletterText")}</p>

          <div className={`flex bg-white rounded-xl overflow-hidden ${rtl ? "flex-row-reverse" : ""}`}>
            <input
              type="email"
              placeholder={t("emailPlaceholder")}
              className="flex-1 px-4 py-3 text-black outline-none"
            />
            <button className="px-4 bg-blue-600 hover:bg-blue-700 transition font-semibold">
              {t("subscribe")}
            </button>
          </div>
        </div>

      </div>

      <div className="border-t border-white/20 mt-12 pt-6 text-center text-sm opacity-70">
        © {new Date().getFullYear()} YOSR TECH — {t("rights")}
      </div>
    </footer>
  );
}
