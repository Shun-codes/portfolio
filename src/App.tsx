import React, { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import Projects from './pages/Projects';
import './i18n';



const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'projects'>('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="pt-24 min-h-screen">
        {currentPage === 'home' && <Home />}
        {currentPage === 'about' && <About />}
        {currentPage === 'projects' && <Projects />}
      </main>
      
      <Footer />
    </div>
  );
};

export default App;