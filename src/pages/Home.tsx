import React from 'react';
import { useTranslation } from 'react-i18next';

interface HomeProps {
  setCurrentPage: (page: 'home' | 'about' | 'skills' | 'projects') => void;
}

const Home: React.FC<HomeProps> = ({ setCurrentPage }) => {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">

      <section className="min-h-[90vh] flex flex-col items-center justify-center text-center space-y-6">

        <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-300 bg-clip-text text-transparent tracking-wide">
            {t('home.bienvenue')}
        </h1>

        <div>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-100 mt-2">
            {t('home.title')}
          </h2>
          <p className="text-2xl md:text-3xl text-gray-300 mt-1">
            {t('home.subtitle')}
          </p>
        </div>

        <div className="max-w-2xl mx-auto mt-6">
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-6">
            {t('home.description')}
          </p>
          <button
            onClick={() => setCurrentPage('about')}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-105"
          >
            {t('home.aboutButton')}
            <img src="/icons/about.svg" alt="" className="w-5 h-5" />
          </button>
        </div>

        {/* Traits décoratifs */}
        <div className="flex gap-4 justify-center pt-8">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-300 to-transparent"></div>
        </div>
      </section>

      {/* Section Compétences */}
      <section className="py-20 border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center">
              <img src="/icons/skill.svg" alt="Code" className="w-12 h-12" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {t('home.skillsTitle')}
            </h2>
          </div>

          <p className="text-gray-400 text-lg mb-8">
            {t('home.skillsDescription')}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {['React & TypeScript', 'Java & Python', 'SQL & Bases de données', 'Git & GitHub'].map((skill) => (
              <div
                key={skill}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 hover:border-yellow-400/50 transition-colors"
              >
                <p className="text-white font-semibold">{skill}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage('skills')}
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-105"
          >
            {t('home.viewAllSkills')}
            <img src="/icons/arrow-right-up-box-fill.svg" alt="" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Section Projets */}
<section className="py-20 border-t border-gray-800">
  <div className="max-w-5xl mx-auto">
    
    {/* Titre de la section */}
    <div className="flex items-center gap-3 mb-8">
      <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-yellow-400 rounded-lg flex items-center justify-center">
        <img src="/icons/archive-2-fill.svg" alt="Projets" className="w-8 h-8" />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-white">
        {t('home.projectsTitle')}
      </h2>
    </div>

    <p className="text-gray-400 text-lg mb-10">
      {t('home.projectsDescription')}
    </p>

    {/* Grille des projets */}
    <div className="grid md:grid-cols-2 gap-6 mb-10">
      
      {/* Projet 1 */}
      <div className="group relative rounded-xl overflow-hidden cursor-pointer">
        <img 
          src="/images/project1.png" 
          alt={t('home.project1Title')} 
          className="w-full h-64 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center">
          <h3 className="text-xl font-bold text-white mb-2">{t('home.project1Title')}</h3>
          <button
            onClick={() => setCurrentPage('projects')}
            className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
          >
            {t('home.viewProjectButton')}
          </button>
        </div>
      </div>

      {/* Projet 2 */}
      <div className="group relative rounded-xl overflow-hidden cursor-pointer">
        <img 
          src="/images/project2.png" 
          alt={t('home.project2Title')} 
          className="w-full h-64 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center">
          <h3 className="text-xl font-bold text-white mb-2">{t('home.project2Title')}</h3>
          <button
            onClick={() => setCurrentPage('projects')}
            className="bg-amber-500 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-amber-400 transition-colors"
          >
            {t('home.viewProjectButton')}
          </button>
        </div>
      </div>

    </div>

    {/* Bouton voir tous les projets */}
    <button
      onClick={() => setCurrentPage('projects')}
      className="group inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105"
    >
      {t('home.viewAllProjects')}
      <img src="/icons/arrow-right-up-box-fill.svg" alt="" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </button>

  </div>
</section>

    </div>
  );
};

export default Home;
