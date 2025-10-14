import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "service_imwoghy",
        "template_gkdul5g",
        form.current,
        "9s_DoJuz2roSwRgFm"
      )
      .then(
        () => {
          setStatus(t("contact.status.success"));
          form.current?.reset();
        },
        (error) => {
          console.error(error);
          setStatus(t("contact.status.error"));
        }
      );
  };

  return (
    <section className="min-h-screen bg-gray-900 py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Texte d’intro */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-300 bg-clip-text text-transparent">
            {t("contact.title")}
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            {t("contact.intro")}
          </p>
        </div>

        {/* Coordonnées */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">
            {t("contact.infoTitle")}
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {/* Email */}
            <div className="bg-gray-800/50 p-6 rounded-xl shadow-lg hover:scale-105 transform transition-all">
              <h4 className="text-xl font-semibold text-yellow-400 mb-2">{t("contact.email")}</h4>
              <a
                href="mailto:contact@zerbmel.fr"
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                contact@zerbmel.fr
              </a>
            </div>

            {/* LinkedIn */}
            <div className="bg-gray-800/50 p-6 rounded-xl shadow-lg hover:scale-105 transform transition-all">
              <h4 className="text-xl font-semibold text-yellow-400 mb-2">{t("contact.linkedin")}</h4>
              <a
                href="https://www.linkedin.com/in/shun-lembrez/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                linkedin.com/in/shun-lembrez
              </a>
            </div>

            {/* Téléphone */}
            <div className="bg-gray-800/50 p-6 rounded-xl shadow-lg hover:scale-105 transform transition-all">
              <h4 className="text-xl font-semibold text-yellow-400 mb-2">{t("contact.phone")}</h4>
              <span className="text-gray-300">06 95 66 62 10</span>
            </div>
          </div>
        </div>

        {/* Formulaire */}
        <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-white text-center mb-6">
            {t("contact.formTitle")}
          </h3>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input type="hidden" name="site" value="Portfolio Lembrez Shun" />

            <input
              type="text"
              name="name"
              placeholder={t("contact.form.name")}
              required
              className="w-full p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-yellow-400 focus:ring-0"
            />
            <input
              type="email"
              name="email"
              placeholder={t("contact.form.email")}
              required
              className="w-full p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-yellow-400 focus:ring-0"
            />
            <input
              type="text"
              name="subject"
              placeholder={t("contact.form.subject")}
              className="w-full p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-yellow-400 focus:ring-0"
            />
            <textarea
              name="message"
              placeholder={t("contact.form.message")}
              required
              className="w-full p-4 h-36 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-yellow-400 focus:ring-0"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 px-6 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-yellow-500/50 transition-all"
            >
              {t("contact.form.submit")}
            </button>
          </form>

          {status && <p className="mt-4 text-yellow-400 font-medium text-center">{status}</p>}
        </div>
      </div>
    </section>
  );
};

export default Contact;
