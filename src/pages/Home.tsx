import React from 'react';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex items-center justify-center min-h-[70vh]">
        <div className="text-center space-y-8">
          
          {/* Titre principal */}
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-300 bg-clip-text text-transparent">
            En cours de developpement
          </h1>
          
          {/* Sous-titre */}
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
            {t('site.subtitle')}
          </p>

          {/* Decorative elements */}
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

export default Home;
