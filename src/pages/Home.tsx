import React from 'react';
import { useTranslation } from 'react-i18next';
import StagePopup from '../components/StagePopup';

interface HomeProps {
  setCurrentPage: (page: 'home' | 'about' | 'skills' | 'projects' | 'contact') => void;
}

const Home: React.FC<HomeProps> = ({ setCurrentPage }) => {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">

      {/* Pop-up Stage/Alternance */}
      <StagePopup setCurrentPage={setCurrentPage} />

      <section className="min-h-[90vh] flex flex-col items-center justify-center text-center space-y-8 relative">
        
        {/* Effet de fond animé */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 space-y-6">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-300 bg-clip-text text-transparent tracking-wide animate-fade-in">
            {t('home.bienvenue')}
          </h1>

          <div className="space-y-2">
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              {t('home.title')}
            </h2>
            <p className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-400">
              {t('home.subtitle')}
            </p>
          </div>

          <div className="max-w-3xl mx-auto mt-8">
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
              {t('home.description')}
            </p>
            <button
              onClick={() => setCurrentPage('about')}
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 px-10 py-5 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              {t('home.aboutButton')}
              <img src="/icons/about.svg" alt="" className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </button>
          </div>

          {/* Traits décoratifs */}
          <div className="flex gap-4 justify-center pt-12">
            <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full"></div>
            <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent rounded-full"></div>
            <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-yellow-300 to-transparent rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Section Compétences */}
      <section className="py-24 border-t border-gray-800 relative">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-500/30 rotate-3 hover:rotate-6 transition-transform">
                <img src="/icons/skill.svg" alt="Code" className="w-8 h-8" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {t('home.skillsTitle')}
              </h2>
            </div>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              {t('home.skillsDescription')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { name: 'React & TypeScript', color: 'from-blue-500/20 to-cyan-500/20' },
              { name: 'Java & Python', color: 'from-orange-500/20 to-red-500/20' },
              { name: 'SQL & Bases de données', color: 'from-green-500/20 to-emerald-500/20' },
              { name: 'Git & GitHub', color: 'from-purple-500/20 to-pink-500/20' }
            ].map((skill) => (
              <div
                key={skill.name}
                className={`group relative bg-gradient-to-br ${skill.color} backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-yellow-400/70 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/20 cursor-pointer`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 to-amber-500/0 group-hover:from-yellow-400/10 group-hover:to-amber-500/10 rounded-2xl transition-all duration-300"></div>
                <p className="relative text-white font-bold text-center text-lg">{skill.name}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => setCurrentPage('skills')}
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-gray-800 to-gray-900 border-2 border-yellow-400/50 text-yellow-400 px-10 py-5 rounded-xl font-bold text-lg hover:bg-gradient-to-r hover:from-yellow-400 hover:to-amber-500 hover:text-gray-900 hover:border-transparent transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/50"
            >
              {t('home.viewAllSkills')}
              <img src="/icons/arrow-right-up-box-fill.svg" alt="" className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Section Projets */}
      <section className="py-24 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex items-center gap-4 mb-12">
            <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-yellow-400 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/30 -rotate-3 hover:rotate-3 transition-transform">
              <img src="/icons/archive-2-fill.svg" alt="Projets" className="w-9 h-9" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {t('home.projectsTitle')}
            </h2>
          </div>

          <p className="text-gray-400 text-xl mb-12 max-w-2xl">
            {t('home.projectsDescription')}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            
            <div className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <img 
                src="/images/project1.png" 
                alt={t('home.project1Title')} 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-white mb-3">{t('home.project1Title')}</h3>
                <button
                  onClick={() => setCurrentPage('projects')}
                  className="self-start bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors shadow-lg"
                >
                  {t('home.viewProjectButton')}
                </button>
              </div>
            </div>

            <div className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <img 
                src="/images/project2.png" 
                alt={t('home.project2Title')} 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-white mb-3">{t('home.project2Title')}</h3>
                <button
                  onClick={() => setCurrentPage('projects')}
                  className="self-start bg-amber-500 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-amber-400 transition-colors shadow-lg"
                >
                  {t('home.viewProjectButton')}
                </button>
              </div>
            </div>

          </div>

          <div className="text-center">
            <button
              onClick={() => setCurrentPage('projects')}
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-yellow-400 text-gray-900 px-10 py-5 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              {t('home.viewAllProjects')}
              <img src="/icons/arrow-right-up-box-fill.svg" alt="" className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section className="py-24 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-500/30 rotate-3">
              <span className="text-3xl">💬</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {t('home.contactTitle')}
            </h2>
          </div>

          <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            {t('home.contactDescription') || 'Un projet en tête ? Une question ? N\'hésitez pas à me contacter, je serais ravi d\'échanger avec vous !'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => setCurrentPage('contact')}
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 px-10 py-5 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-110"
            >
              {t('home.contactButton')}
              <span className="text-2xl group-hover:scale-125 transition-transform">
                <img src="/icons/arrow-right-up-box-fill.svg" alt="" className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></span>
            </button>
            
          </div>

          {/* Éléments décoratifs */}
          <div className="mt-16 flex justify-center gap-8">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-ping delay-100"></div>
            <div className="w-2 h-2 bg-yellow-300 rounded-full animate-ping delay-200"></div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;