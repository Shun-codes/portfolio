import React from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex items-center justify-center min-h-[70vh]">
        <div className="text-center space-y-8 max-w-3xl">

          {/* Title */}
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            {t('about.title')}
          </h1>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
            {t('about.description')}
          </p>

          {/* Formations / Experiences Section */}
      <div className="mb-16 sm:mb-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-12 text-center px-4">
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Formations / Experiences
          </span>
        </h2>
        
        {/* Grid centré avec max-width */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
            {/* Formation 1 */}
            <div
              className="w-full max-w-md bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-5 sm:p-6 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                    {t('about.titleF1')}
                  </h3>
                  <p className="text-purple-400 font-medium mb-1 text-sm sm:text-base">
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


          </div>
        </div>
      </div>

          {/* Download CV Button */}
          <div className="pt-8">
            <a 
              href="/CV_SHUN_2025.pdf" 
              download ="CV_SHUN_2025.pdf"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {t('buttons.downloadCV')}
            </a>
          </div>

          {/* Decorative bars */}
          <div className="flex gap-4 justify-center pt-8">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default About;