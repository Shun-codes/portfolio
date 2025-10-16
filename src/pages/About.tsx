import React from 'react';
import { useTranslation } from 'react-i18next';
import StagePopup from '../components/StagePopup';

interface AboutProps {
  setCurrentPage: (page: 'home' | 'about' | 'skills' | 'projects' | 'contact') => void;
}

const About: React.FC<AboutProps> = ({ setCurrentPage }) => {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">

      {/* Pop-up Stage/Alternance */}
      <StagePopup setCurrentPage={setCurrentPage} />

      {/* Header Section */}
      <div className="text-center space-y-8 max-w-3xl mx-auto mb-20">
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-300 bg-clip-text text-transparent">
          {t('about.title')}
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
          {t('about.description')}
        </p>

        {/* Decorative bars */}
        <div className="flex gap-4 justify-center pt-4">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-300 to-transparent"></div>
        </div>
      </div>

      {/* Ma passion pour l'informatique */}
      <section className="mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
              {t('about.passionTitle')}
            </h2>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 md:p-8 space-y-4">
            <p className="text-gray-300 text-lg leading-relaxed">
              {t('about.passionIntro')}
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              {t('about.passionLycee')}
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              {t('about.passionBUT')}
            </p>
          </div>
        </div>
      </section>

      {/* Formations Section */}
      <section className="mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
            {t('about.titleFormations')}
          </span>
        </h2>
    
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Formation 1 */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
              {t('about.titleF1')}
            </h3>
            <p className="text-yellow-400 font-medium mb-1">
              {t('about.institutionF1')}
            </p>
            <p className="text-gray-500 italic text-sm mb-3">
              {t('about.periodF1')}
            </p>
            <p className="text-gray-400 leading-relaxed">
              {t('about.descriptionF1')}
            </p>
          </div>

          {/* Formation 2 */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-xl md:text-2xl font-bold text-white">
                {t('about.titleF2')}
              </h3>
              <span className="px-3 py-1 bg-yellow-400/20 text-yellow-400 text-xs font-semibold rounded-full border border-yellow-400/30 whitespace-nowrap">
                {t('about.mentionF2')}
              </span>
            </div>
            <p className="text-yellow-400 font-medium mb-1">
              {t('about.institutionF2')}
            </p>
            <p className="text-gray-500 italic text-sm mb-3">
              {t('about.periodF2')}
            </p>
            <div className="space-y-2">
              <p className="text-gray-400">
                <span className="text-gray-300 font-semibold">{t('about.specialitiesLabelF2')}</span> {t('about.specialitiesF2')}
              </p>
              <p className="text-gray-400">
                <span className="text-gray-300 font-semibold">{t('about.optionLabelF2')}</span> {t('about.optionF2')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
            {t('about.titleExperiences')}
          </span>
        </h2>
    
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Experience 1 */}
          <div className="bg-gradient-to-br from-amber-900/20 to-yellow-900/20 backdrop-blur-sm border-2 border-amber-500/30 rounded-xl p-6 hover:scale-105 hover:shadow-2xl hover:shadow-amber-400/30 hover:border-amber-500/50 transition-all duration-300">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
              {t('about.titleE1')}
            </h3>
            <p className="text-amber-400 font-medium mb-1">
              {t('about.companyE1')}
            </p>
            <p className="text-gray-500 italic text-sm mb-3">
              {t('about.periodE1')}
            </p>
            <p className="text-gray-400 leading-relaxed">
              {t('about.descriptionE1')}
            </p>
          </div>

          {/* Experience 2 */}
          <div className="bg-gradient-to-br from-amber-900/20 to-yellow-900/20 backdrop-blur-sm border-2 border-amber-500/30 rounded-xl p-6 hover:scale-105 hover:shadow-2xl hover:shadow-amber-400/30 hover:border-amber-500/50 transition-all duration-300">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
              {t('about.titleE2')}
            </h3>
            <p className="text-amber-400 font-medium mb-1">
              {t('about.companyE2')}
            </p>
            <p className="text-gray-500 italic text-sm mb-3">
              {t('about.periodE2')}
            </p>
            <p className="text-gray-400 leading-relaxed mb-3">
              {t('about.descriptionE2')}
            </p>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-start gap-2">
                <span className="text-amber-400 mt-1">•</span>
                <p className="text-gray-300 text-sm">{t('about.Tirer1E2')}</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400 mt-1">•</span>
                <p className="text-gray-300 text-sm">{t('about.Tirer2E2')}</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400 mt-1">•</span>
                <p className="text-gray-300 text-sm">{t('about.Tirer3E2')}</p>
              </div>
            </div>

            {t('about.projectLinkE2') && (
              <a
                href={t('about.projectLinkE2')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 rounded-lg text-sm font-medium transition-all duration-300 border border-amber-500/30 hover:border-amber-500/50"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                {t('about.projectButtonE2')}
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Et au-delà du code ? */}
      <section className="mb-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
              {t('about.beyondCodeTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Sport */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:scale-105 hover:border-yellow-400/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center shadow-lg">
                  <img src="/icons/sport.svg" alt="Sport" className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {t('about.sportTitle')}
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-3">
                {t('about.sportDesc1')}
              </p>
              <p className="text-gray-300 leading-relaxed">
                {t('about.sportDesc2')}
              </p>
            </div>

            {/* Piano */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:scale-105 hover:border-yellow-400/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
                  <img src="/icons/piano.svg" alt="Piano" className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {t('about.pianoTitle')}
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {t('about.pianoDesc')}
              </p>
            </div>

            {/* Jeux vidéo */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:scale-105 hover:border-yellow-400/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-400 rounded-xl flex items-center justify-center shadow-lg">
                  <img src="/icons/videoGames.svg" alt="Jeux vidéo" className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {t('about.gamingTitle')}
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-3">
                {t('about.gamingDesc1')}
              </p>
              <p className="text-gray-300 leading-relaxed">
                {t('about.gamingDesc2')}
              </p>
            </div>
          </div>

          <p className="text-center text-gray-400 italic mt-8 text-lg">
            {t('about.beyondCodeConclusion')}
          </p>
        </div>
      </section>

      {/* Download CV Button */}
      <div className="text-center pt-8">
        <a 
          href="/SHUN_CV_2025.pdf" 
          download="SHUN_CV_2025.pdf"
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-black rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-yellow-400/40 transition-all duration-300 hover:scale-110"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          {t('buttons.downloadCV')}
        </a>
      </div>

    </div>
  );
};

export default About;