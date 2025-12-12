// "use client";

// import { useTranslation } from "react-i18next";
// import { useSettings } from "../context/SettingsContext";
// import ThemeSwitcher from "@/components/ThemeSwitcher";
// import LanguageSwitcher from "@/components/LanguageSwitcher";
// import Image from "next/image";

// export default function Header() {
//   const { t } = useTranslation();
//   const { dark } = useSettings();

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-transparent py-4">
//       <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

//         {/* الشعار */}
//         <div className="flex items-center">
//           <a href="#home">
//             <Image
//               src="/images/767.png"
//               alt="Logo"
//               width={120}
//               height={40}
//               className="object-contain"
//               priority
//             />
//           </a>
//         </div>

//         {/* روابط الهيدر */}
//         <nav className="flex items-center gap-4 md:gap-6">
//           <div className="hidden md:flex gap-6">
//             <a href="#home" className="hover:text-[#26A0DC] transition">
//               {t("home") || "Home"}
//             </a>
//             <a href="#about" className="hover:text-[#26A0DC] transition">
//               {t("about") || "About"}
//             </a>
//             <a href="#projects" className="hover:text-[#26A0DC] transition">
//               {t("projects") || "Projects"}
//             </a>
//             <a href="#faq" className="hover:text-[#26A0DC] transition">
//               {t("faq") || "FAQ"}
//             </a>
//             <a
//               href="#contact"
//               className="bg-[#26A0DC] text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
//             >
//               {t("getInTouch") || "Get in Touch"}
//             </a>
//           </div>

//           {/* مبدل اللغة والوضع الليلي */}
//           <div className="flex items-center gap-3">
//             <LanguageSwitcher />
//             <ThemeSwitcher />
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// }


"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSettings } from "../context/SettingsContext";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const { t, i18n } = useTranslation();
  const { dark } = useSettings();
  const rtl = i18n.dir() === "rtl";

  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent py-4 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <a href="#home">
          <Image
            src="/images/767.png"
            alt="Logo"
            width={120}
            height={40}
            className="object-contain"
            priority
          />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#home" className="hover:text-[#26A0DC] transition">{t("home")}</a>
          <a href="#about" className="hover:text-[#26A0DC] transition">{t("about")}</a>
          <a href="#projects" className="hover:text-[#26A0DC] transition">{t("projects")}</a>
          <a href="#faq" className="hover:text-[#26A0DC] transition">{t("faq")}</a>

          <a
            href="#contact"
            className="bg-[#26A0DC] text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            {t("getInTouch")}
          </a>

          <LanguageSwitcher />
          <ThemeSwitcher />
        </nav>

        {/* Mobile Section */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeSwitcher />
          <button onClick={() => setOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      {open && (
        <div
          className={`fixed top-0 h-full w-64 bg-[#001F4E] text-white p-6 shadow-lg transition-all
          ${rtl ? "right-0" : "left-0"}`}
        >
          {/* Header inside menu */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-lg font-semibold">{t("menu") || "Menu"}</h2>
            <button onClick={() => setOpen(false)}>
              <X size={28} />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <nav className="flex flex-col gap-6 text-lg">
            <a href="#home" onClick={() => setOpen(false)} className="hover:text-blue-300">{t("home")}</a>
            <a href="#about" onClick={() => setOpen(false)} className="hover:text-blue-300">{t("about")}</a>
            <a href="#projects" onClick={() => setOpen(false)} className="hover:text-blue-300">{t("projects")}</a>
            <a href="#faq" onClick={() => setOpen(false)} className="hover:text-blue-300">{t("faq")}</a>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="bg-[#26A0DC] text-white px-4 py-2 rounded-lg text-center hover:bg-blue-600 transition"
            >
              {t("getInTouch")}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
