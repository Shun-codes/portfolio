import React from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex items-center justify-center min-h-[70vh]">
        <div className="text-center space-y-8 max-w-3xl">

          {/* Title */}
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-300 bg-clip-text text-transparent">
            {t('about.title')}
          </h1>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
            {t('about.description')}
          </p>

          {/* Formations Section */}
          <div className="mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-12 text-center px-4">
              <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
                {t('about.titleFormations')}
              </span>
            </h2>
        
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
                {/* Formation 1 */}
                <div
                  className="w-full max-w-md bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-5 sm:p-6 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/20 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                        {t('about.titleF1')}
                      </h3>
                      <p className="text-yellow-400 font-medium mb-1 text-sm sm:text-base">
                        {t('about.institutionF1')}
                      </p>
                      <p className="text-gray-500 italic text-xs sm:text-sm mb-3">
                        {t('about.periodF1')}
                      </p>
                      <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                        {t('about.descriptionF1')}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Formation 2*/}
                <div
                  className="w-full max-w-md bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-5 sm:p-6 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/20 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-white">
                          {t('about.titleF2')}
                        </h3>
                        <span className="px-3 py-1 bg-yellow-400/20 text-yellow-400 text-xs font-semibold rounded-full border border-yellow-400/30">
                          {t('about.mentionF2')}
                        </span>
                      </div>
                      <p className="text-yellow-400 font-medium mb-1 text-sm sm:text-base">
                        {t('about.institutionF2')}
                      </p>
                      <p className="text-gray-500 italic text-xs sm:text-sm mb-3">
                        {t('about.periodF2')}
                      </p>
                      <div className="text-left space-y-2 text-sm sm:text-base">
                        <p className="text-gray-400">
                          <span className="text-gray-300 font-semibold">{t('about.specialitiesLabelF2')}</span> {t('about.specialitiesF2')}
                        </p>
                        <p className="text-gray-400">
                          <span className="text-gray-300 font-semibold">{t('about.optionLabelF2')}</span> {t('about.optionF2')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experiences Section */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-10 text-center px-4">
              <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                  {t('about.titleExperiences')}
              </span>
            </h2>
        
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
                {/* Experience 1 */}
                <div
                  className="w-full max-w-md bg-gradient-to-br from-amber-900/20 to-yellow-900/20 backdrop-blur-sm border-2 border-amber-500/30 rounded-xl p-5 sm:p-6 hover:scale-105 hover:shadow-2xl hover:shadow-amber-400/30 hover:border-amber-500/50 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                        {t('about.titleE1')}
                      </h3>
                      <p className="text-amber-400 font-medium mb-1 text-sm sm:text-base">
                        {t('about.companyE1')}
                      </p>
                      <p className="text-gray-500 italic text-xs sm:text-sm mb-3">
                        {t('about.periodE1')}
                      </p>
                      <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                        {t('about.descriptionE1')}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Experience 2 */}
                <div
                  className="w-full max-w-md bg-gradient-to-br from-amber-900/20 to-yellow-900/20 backdrop-blur-sm border-2 border-amber-500/30 rounded-xl p-5 sm:p-6 hover:scale-105 hover:shadow-2xl hover:shadow-amber-400/30 hover:border-amber-500/50 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                        {t('about.titleE2')}
                      </h3>
                      <p className="text-amber-400 font-medium mb-1 text-sm sm:text-base">
                        {t('about.companyE2')}
                      </p>
                      <p className="text-gray-500 italic text-xs sm:text-sm mb-3">
                        {t('about.periodE2')}
                      </p>
                      <p className="text-gray-400 leading-relaxed text-sm sm:text-base mb-3">
                        {t('about.descriptionE2')}
                      </p>
                      
                      <div className="space-y-2 mb-3">
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

                      {/* Project Link tuto yt*/}
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
                </div>
              </div>
            </div>
          </div>

          {/* Download CV Button */}
          <div className="pt-8">
            <a 
              href="/CV_SHUN_2025.pdf" 
              download ="CV_SHUN_2025.pdf"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-black rounded-lg font-medium hover:shadow-lg hover:shadow-yellow-400/40 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {t('buttons.downloadCV')}
            </a>
          </div>

          {/* Decorative bars */}
          <div className="flex gap-4 justify-center pt-8">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-300 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
