"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Contact() {
  const { t, i18n } = useTranslation();
  const rtl = i18n.dir() === "rtl";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert(t("contactFormSuccess", "تم إرسال الرسالة بنجاح!"));
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6 text-white"
    style={{ backgroundColor: "#0049BF" }}>
      <h2 className="text-4xl font-bold text-center mb-16">{t("contactUs", "تواصل معنا")}</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* الجزء الأيسر: خريطة ومعلومات */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="w-full h-64 rounded-2xl overflow-hidden shadow-xl border border-white/20">
            {/* يمكن استبدال الـ div بخريطة Google iframe */}
            <iframe
              src="https://maps.google.com/maps?q=Riyadh&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-3xl">📍</span>
              <p>{t("contactAddress", "الرياض، المملكة العربية السعودية")}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-3xl">📧</span>
              <p>info@company.com</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-3xl">📞</span>
              <p>+966 5X XXX XXXX</p>
            </div>
          </div>
        </motion.div>

        {/* الجزء الأيمن: نموذج تواصل */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl flex flex-col gap-6 shadow-lg"
        >
          <input
            type="text"
            name="name"
            placeholder={t("contactName", "الاسم")}
            value={formData.name}
            onChange={handleChange}
            className="p-4 rounded-xl border border-white/20 bg-white/10 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-[#26A0DC] transition"
            required
          />
          <input
            type="email"
            name="email"
            placeholder={t("contactEmail", "البريد الإلكتروني")}
            value={formData.email}
            onChange={handleChange}
            className="p-4 rounded-xl border border-white/20 bg-white/10 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-[#26A0DC] transition"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder={t("contactMessage", "رسالتك")}
            value={formData.message}
            onChange={handleChange}
            className="p-4 rounded-xl border border-white/20 bg-white/10 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-[#26A0DC] transition"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-[#26A0DC] text-white font-bold py-3 rounded-xl hover:bg-[#004FC4] transition"
          >
            {t("contactSend", "إرسال")}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
