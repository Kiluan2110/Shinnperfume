import { useState } from 'react';
import { HomePage } from './components/HomePage';
import { ForHerPage } from './components/ForHerPage';
import { ForHimPage } from './components/ForHimPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'her' | 'him' | 'about' | 'contact'>('home');

  return (
    <div className="min-h-screen bg-black">
      {currentPage === 'home' && <HomePage onNavigate={setCurrentPage} />}
      {currentPage === 'her' && <ForHerPage onBack={() => setCurrentPage('home')} />}
      {currentPage === 'him' && <ForHimPage onBack={() => setCurrentPage('home')} />}
      {currentPage === 'about' && <AboutPage onBack={() => setCurrentPage('home')} />}
      {currentPage === 'contact' && <ContactPage onBack={() => setCurrentPage('home')} />}
    </div>
  );
}