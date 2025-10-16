import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import StagePopup from '../components/StagePopup';

interface ContactProps {
  setCurrentPage: (page: 'home' | 'about' | 'skills' | 'projects' | 'contact') => void;
}

const Contact: React.FC<ContactProps> = ({ setCurrentPage }) => {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setStatus(t("contact.form.sending") || 'Envoi en cours...');

    if (form.current) {
      emailjs
        .sendForm(
          "service_imwoghy", 
          "template_gkdul5g",
          form.current,
          "9s_DoJuz2roSwRgFm"
        )
        .then(
          () => {
            setStatus(t("contact.form.success") || 'Message envoyé avec succès !');
            form.current?.reset();
            setIsSubmitting(false);
          },
          (error) => {
            console.error('Erreur:', error);
            setStatus(t("contact.form.error") || 'Erreur lors de l\'envoi. Réessayez.');
            setIsSubmitting(false);
          }
        );
    }
  };

  return (
    <section className="min-h-screen bg-gray-900 py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Pop-up Stage/Alternance */}
        <StagePopup setCurrentPage={setCurrentPage} />

        {/* Texte d'intro */}
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
              disabled={isSubmitting}
              className="w-full p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/50 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <input
              type="email"
              name="email"
              placeholder={t("contact.form.email")}
              required
              disabled={isSubmitting}
              className="w-full p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/50 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <input
              type="text"
              name="subject"
              placeholder={t("contact.form.subject")}
              required
              disabled={isSubmitting}
              className="w-full p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/50 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <textarea
              name="message"
              placeholder={t("contact.form.message")}
              required
              disabled={isSubmitting}
              className="w-full p-4 h-36 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/50 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed resize-none"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 px-6 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-yellow-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
            >
              {isSubmitting 
                ? (t("contact.form.sending") || 'Envoi en cours...') 
                : (t("contact.form.submit") || 'Envoyer le message')
              }
            </button>
          </form>

          {status && (
            <p className={`mt-4 font-medium text-center ${
              status.includes('succès') || status.includes('success') 
                ? 'text-green-400' 
                : status.includes('Erreur') || status.includes('error')
                ? 'text-red-400'
                : 'text-yellow-400'
            }`}>
              {status}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;