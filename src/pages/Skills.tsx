import React from 'react';
import { useTranslation } from 'react-i18next';

const Skills: React.FC = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      name: t('skills.category.frontend'),
      skills: [
        { name: 'HTML5', logo: '/logos/HTML5.svg' },
        { name: 'CSS3', logo: '/logos/CSS3.svg' },
        { name: 'JavaScript', logo: '/logos/JavaScript.svg' },
        { name: 'TypeScript', logo: '/logos/TypeScript.svg' },
        { name: 'React', logo: '/logos/React.svg' }
      ]
    },
    {
      name: t('skills.category.frameworks'),
      skills: [
        { name: 'TailWind', logo: '/logos/Tailwind CSS.svg' },
        { name: 'Laravel', logo: '/logos/Laravel.svg' },
      ]
    },
    {
      name: t('skills.category.appdev'),
      skills: [
        { name: 'Java', logo: '/logos/Java.svg' },
        { name: 'Python', logo: '/logos/Python.svg' },
        { name: 'Php', logo: '/logos/PHP.svg' },
        { name: 'Bash', logo: '/logos/Bash.svg' },
      ]
    },
    {
      name: t('skills.category.databases'),
      skills: [
        { name: 'PostgreSQL', logo: '/logos/PostgresSQL.svg' },
        { name: 'MySQL', logo: '/logos/MySQL.svg' },
        { name: 'SQLite', logo: '/logos/SQLite.svg' },
      ]
    },
    {
      name: t('skills.category.tools'),
      skills: [
        { name: 'Git', logo: '/logos/Git.svg' },
        { name: 'Jetbrain', logo: '/logos/JetBrains.svg' },
        { name: 'Eclipse', logo: '/logos/Eclipse IDE.svg' },
        { name: 'VS Code', logo: '/logos/Visual Studio Code (VS Code).svg' },
        { name: 'Vite', logo: '/logos/Vite.js.svg' },
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="min-h-[70vh] space-y-16">
        
        {/* Title */}
        <div className="text-center space-y-6 px-2 sm:px-4 overflow-hidden">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold 
            bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-300 
            bg-clip-text text-transparent break-words leading-tight max-w-full">
            {t('skills.title')}
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-gray-400 
            max-w-3xl mx-auto px-2 break-words">
            {t('skills.subtitle')}
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-12">
          {skillCategories.map((category) => (
            <div key={category.name} className="space-y-6">
              
              {/* Category Title */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 overflow-hidden">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white break-words max-w-full">
                  {category.name}
                </h2>
                <div className="flex-1 h-1 bg-gradient-to-r from-yellow-400/50 to-transparent rounded-full min-w-[60px]"></div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl p-6 border-2 border-gray-700 hover:border-yellow-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20"
                  >
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <img 
                          src={skill.logo} 
                          alt={skill.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <p className="text-sm md:text-base font-semibold text-gray-300 text-center hover:text-yellow-400 transition-colors duration-300">
                        {skill.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
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

export default Skills;