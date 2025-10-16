import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface StagePopupProps {
  setCurrentPage: (page: 'home' | 'about' | 'skills' | 'projects' | 'contact') => void;
}

const StagePopup: React.FC<StagePopupProps> = ({ setCurrentPage }) => {
  const { t } = useTranslation();
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {/* Pop-up principale */}
      {showPopup && (
        <div className="fixed right-0 top-1/3 md:top-1/3 z-50 animate-slide-in-right max-w-[90vw] md:max-w-sm">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-yellow-400/50 rounded-l-2xl shadow-2xl shadow-yellow-500/20 p-4 md:p-5 mr-0">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors text-lg"
              aria-label="Fermer"
            >
              ✕
            </button>
            
            <div className="flex items-start gap-2 mb-3">
              <div className="w-8 h-8 md:w-9 md:h-9 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <img src="/icons/about.svg" alt="" className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-white">
                {t('popup.title')}
              </h3>
            </div>

            <div className="space-y-3">
              <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700">
                <p className="text-yellow-400 font-bold text-sm mb-1.5 flex items-center gap-1.5">
                  <span className="text-base">📅</span> {t('popup.stage')}
                </p>
                <p className="text-gray-300 text-xs md:text-sm">
                  {t('popup.startDate')} : <span className="font-semibold">{t('popup.dateStage')}</span>
                </p>
                <p className="text-gray-300 text-xs md:text-sm">
                  {t('popup.duration')} : <span className="font-semibold">{t('popup.dureeStage')}</span>
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700">
                <p className="text-amber-400 font-bold text-sm mb-1.5 flex items-center gap-1.5">
                  <span className="text-base">💼</span> {t('popup.alternance')}
                </p>
                <p className="text-gray-300 text-xs md:text-sm">
                  {t('popup.startDate')} : <span className="font-semibold">{t('popup.dateAlternance')}</span>
                </p>
              </div>
            </div>

            <button
              onClick={() => setCurrentPage('contact')}
              className="w-full mt-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 py-2.5 md:py-3 rounded-lg font-bold text-sm md:text-base hover:shadow-lg hover:shadow-yellow-500/50 transition-all duration-300"
            >
              {t('popup.contactButton')}
            </button>
          </div>
        </div>
      )}

      {/* Bouton pour réafficher la popup si fermée */}
      {!showPopup && (
        <button
          onClick={() => setShowPopup(true)}
          className="fixed right-0 top-1/2 md:top-1/3 z-50 bg-gradient-to-l from-yellow-400 to-amber-500 text-gray-900 px-3 py-4 md:px-4 md:py-6 rounded-l-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:pr-4 md:hover:pr-6 text-xs md:text-sm"
          aria-label="Afficher les opportunités"
        >
          <span className="writing-mode-vertical">
            {t('popup.showButton')}
          </span>
        </button>
      )}
    </>
  );
};

export default StagePopup;