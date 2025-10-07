import React from 'react';
import { useTranslation } from 'react-i18next';

const Projects: React.FC = () => {
  const { t } = useTranslation();
  return (
  <div className="max-w-7xl mx-auto px-6 py-20">
    <div className="min-h-[70vh] space-y-12">
      
      {/* Title Section */}
      <div className="text-center space-y-6">
      <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-300 bg-clip-text text-transparent">
      {t('projects.title')}
      </h1>
      <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
        {t('projects.subtitle')}
      </p>
      </div>

      {/* Projects Section */}
      <div className="space-y-8">
      
      {/* Project 1 */}
      <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/60 to-gray-900/60 border-2 border-yellow-500/30 hover:border-yellow-500/60 transition-all duration-500">
        <div className="grid md:grid-cols-2">
          {/* Image */}
          <div className="relative min-h-[320px] md:min-h-[384px] overflow-hidden bg-gradient-to-br from-yellow-500/20 to-amber-600/20 flex items-center justify-center">
            <img 
              src={t('projects.imageP1')} 
              alt={t('projects.titleP1')}
              className="w-full h-full object-contain"
            />
          </div>
        
          {/* Content  */}
          <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-yellow-400/20 text-yellow-400 text-xs font-semibold rounded-full border border-yellow-400/30">
                      {t('projects.categoryP1')}
                    </span>
                    <span className="text-gray-500 text-sm">{t('projects.dateP1')}</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                    {t('projects.titleP1')}
                  </h3>
                  
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {t('projects.descriptionP1')}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {t('projects.techP1', { returnObjects: true }).map((tech: string, index: number) => (
                      <span key={index} className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-lg border border-gray-600">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex gap-4 pt-4">
                    {t('projects.demoLinkP1') && (
                      <a
                        href={t('projects.demoLinkP1')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-black rounded-lg font-medium hover:shadow-lg hover:shadow-yellow-400/40 transition-all duration-300"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        {t('projects.viewDemo')}
                      </a>
                    )}
                    {t('projects.githubLinkP1') && (
                      <a
                        href={t('projects.githubLinkP1')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700/50 text-white rounded-lg font-medium hover:bg-gray-700 border border-gray-600 hover:border-gray-500 transition-all duration-300"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2  */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/60 to-gray-900/60 border-2 border-amber-500/30 hover:border-amber-500/60 transition-all duration-500">
            <div className="grid md:grid-cols-2">
              
              {/* Content  */}
              <div className="p-8 md:p-10 flex flex-col justify-center order-2 md:order-1">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-amber-400/20 text-amber-400 text-xs font-semibold rounded-full border border-amber-400/30">
                      {t('projects.categoryP2')}
                    </span>
                    <span className="text-gray-500 text-sm">{t('projects.dateP2')}</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {t('projects.titleP2')}
                  </h3>
                  
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {t('projects.descriptionP2')}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {t('projects.techP2', { returnObjects: true }).map((tech: string, index: number) => (
                      <span key={index} className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-lg border border-gray-600">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex gap-4 pt-4">
                    {t('projects.githubLinkP2') && (
                      <a
                        href={t('projects.githubLinkP2')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700/50 text-white rounded-lg font-medium hover:bg-gray-700 border border-gray-600 hover:border-gray-500 transition-all duration-300"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative min-h-[320px] md:max-h-[500px] overflow-hidden order-1 md:order-2 bg-gradient-to-br from-amber-500/20 to-yellow-600/20 flex items-center justify-center">
                <img 
                  src={t('projects.imageP2')} 
                  alt={t('projects.titleP2')}
                  className="w-full h-full object-contain max-h-[500px]"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Decorative bars */}
        <div className="flex gap-4 justify-center pt-12">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-300 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;