import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-gray-800 bg-gray-900/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Texte du footer */}
          <div className="text-gray-400">
            © {new Date().getFullYear()} {t('footer.text')}
          </div>
          
          {/* Liens */}
          <div className="flex gap-6">
            <a 
              href="https://github.com/Shun-codes" 
              target="_blank" 
              rel="noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/shun-lembrez/" 
              target="_blank" 
              rel="noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:contact@zerbmel.fr"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
