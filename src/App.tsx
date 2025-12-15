import { useState } from 'react';
import { HomePage } from './components/HomePage';
import { ForHerPage } from './components/ForHerPage';
import { ForHimPage } from './components/ForHimPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'her' | 'him'>('home');

  return (
    <div className="min-h-screen bg-black">
      {currentPage === 'home' && <HomePage onNavigate={setCurrentPage} />}
      {currentPage === 'her' && <ForHerPage onBack={() => setCurrentPage('home')} />}
      {currentPage === 'him' && <ForHimPage onBack={() => setCurrentPage('home')} />}
    </div>
  );
}
