import React from 'react';
import { useTranslation } from 'react-i18next';

interface HeaderProps {
  currentPage: 'home' | 'about';
  setCurrentPage: (page: 'home' | 'about') => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-gray-900/80 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {t('site.title')}
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <button
              onClick={() => setCurrentPage('home')}
              className={`relative px-4 py-2 font-medium transition-all duration-300 ${
                currentPage === 'home'
                  ? 'text-blue-400'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {t('nav.home')}
              {currentPage === 'home' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"></span>
              )}
            </button>

            <button
              onClick={() => setCurrentPage('about')}
              className={`relative px-4 py-2 font-medium transition-all duration-300 ${
                currentPage === 'about'
                  ? 'text-blue-400'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {t('nav.about')}
              {currentPage === 'about' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"></span>
              )}
            </button>

            {/* Language Toggle */}
            <button 
              onClick={toggleLanguage}
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
            >
              {i18n.language === 'en' ? 'FR' : 'EN'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;