import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface HeaderProps {
  currentPage: 'home' | 'about';
  setCurrentPage: (page: 'home' | 'about') => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

  const handleNavigate = (page: 'home' | 'about') => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-gray-900/80 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* mon nom */}
          <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
            {t('site.title')}
          </div>

          {/* Navigation écran  */}
          <div className="hidden md:flex items-center gap-8">

            {/* Buttons pour Home */}
            <button
              onClick={() => setCurrentPage('home')}
              className={`relative px-4 py-2 font-medium transition-all duration-300 ${
                currentPage === 'home'
                  ? 'text-yellow-400'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {t('nav.home')}
              {currentPage === 'home' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500"></span>
              )}
            </button>

            {/* Buttons pour About */}
            <button
              onClick={() => setCurrentPage('about')}
              className={`relative px-4 py-2 font-medium transition-all duration-300 ${
                currentPage === 'about'
                  ? 'text-yellow-400'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {t('nav.about')}
              {currentPage === 'about' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500"></span>
              )}
            </button>

            {/* Button pour changer langue */}
            <button 
              onClick={toggleLanguage}
              className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-lg font-medium hover:shadow-lg hover:shadow-yellow-400/40 transition-all duration-300"
            >
              {i18n.language === 'en' ? 'FR' : 'EN'}
            </button>
          </div>

          {/*Menu Button Mobile  */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              // Icône X pour fermer
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Icône hamburger
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Navigatino Mobile  */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-3 py-4 border-t border-gray-800">
            
            {/* Buttons pour Home */}
            <button
              onClick={() => handleNavigate('home')}
              className={`px-4 py-3 text-left font-medium transition-all duration-300 rounded-lg ${
                currentPage === 'home'
                  ? 'text-yellow-400 bg-yellow-500/10'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
              }`}
            >
              {t('nav.home')}
            </button>

            {/* Buttons pour About */}
            <button
              onClick={() => handleNavigate('about')}
              className={`px-4 py-3 text-left font-medium transition-all duration-300 rounded-lg ${
                currentPage === 'about'
                  ? 'text-yellow-400 bg-yellow-500/10'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
              }`}
            >
              {t('nav.about')}
            </button>

            {/* Button pour changer langue */}
            <button 
              onClick={toggleLanguage}
              className="mx-4 px-4 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-lg font-medium hover:shadow-lg hover:shadow-yellow-400/40 transition-all duration-300 text-center"
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
