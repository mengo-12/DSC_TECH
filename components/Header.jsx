"use client";

import { useTranslation } from "react-i18next";
import { useSettings } from "../context/SettingsContext";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Header() {
  const { t } = useTranslation();
  const { dark } = useSettings();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent py-4">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* الشعار */}
        <h1 className={`font-bold text-xl ${dark ? "text-white" : "text-gray-900"}`}>
          {t("logo") || "EcoTec"}
        </h1>

        {/* روابط الهيدر */}
        <nav className="flex items-center gap-4 md:gap-6">
          <div className="hidden md:flex gap-6">
            <a href="#home" className="hover:text-[#26A0DC] transition">
              {t("home") || "Home"}
            </a>
            <a href="#about" className="hover:text-[#26A0DC] transition">
              {t("about") || "About"}
            </a>
            <a href="#projects" className="hover:text-[#26A0DC] transition">
              {t("projects") || "Projects"}
            </a>
            <a href="#faq" className="hover:text-[#26A0DC] transition">
              {t("faq") || "FAQ"}
            </a>
            <a
              href="#contact"
              className="bg-[#26A0DC] text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              {t("getInTouch") || "Get in Touch"}
            </a>
          </div>

          {/* مبدّل اللغة والوضع الليلي */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
}
