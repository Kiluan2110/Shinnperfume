import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { HomePage } from './components/HomePage';
import { ForHerPage } from './components/ForHerPage';
import { ForHimPage } from './components/ForHimPage'; // Force reload: Fixed For Him duplicate images 2024-12-18T10:35:00
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { PerfumeProvider } from './contexts/PerfumeContext';
import { CustomChatWidget } from './components/CustomChatWidget';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'her' | 'him' | 'about' | 'contact' | 'admin' | 'chattest' | 'n8ntest'>('home');

  return (
    <PerfumeProvider>
      <div className="min-h-screen bg-black">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && <HomePage key="home" onNavigate={setCurrentPage} />}
          {currentPage === 'her' && <ForHerPage key="her" onBack={() => setCurrentPage('home')} />}
          {currentPage === 'him' && <ForHimPage key="him" onBack={() => setCurrentPage('home')} />}
          {currentPage === 'about' && <AboutPage key="about" onBack={() => setCurrentPage('home')} />}
          {currentPage === 'contact' && <ContactPage key="contact" onBack={() => setCurrentPage('home')} />}
        </AnimatePresence>
        
        {/* AI Chatbot - Custom Widget */}
        {currentPage !== 'chattest' && currentPage !== 'n8ntest' && <CustomChatWidget />}
      </div>
    </PerfumeProvider>
  );
}