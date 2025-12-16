import { motion } from 'motion/react';
import { useState } from 'react';

interface HomePageProps {
  onNavigate: (page: 'her' | 'him' | 'about' | 'contact') => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [hoveredSide, setHoveredSide] = useState<'her' | 'him' | null>(null);
  const [isMouseMoving, setIsMouseMoving] = useState(false);

  const handleMouseMove = () => {
    if (!isMouseMoving) {
      setIsMouseMoving(true);
    }
  };

  return (
    <div 
      className="h-screen flex overflow-hidden relative"
      onMouseMove={handleMouseMove}
    >
      {/* Starry Background */}
      <div className="absolute inset-0 bg-black">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* About Button - Top Left */}
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        onClick={() => onNavigate('about')}
        className="absolute top-8 left-8 z-50 text-white hover:text-pink-400 transition-colors tracking-wider"
        style={{ fontFamily: 'Cinzel, serif' }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        About
      </motion.button>

      {/* Contact Button - Top Right */}
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        onClick={() => onNavigate('contact')}
        className="absolute top-8 right-8 z-50 text-white hover:text-blue-400 transition-colors tracking-wider"
        style={{ fontFamily: 'Cinzel, serif' }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Contact
      </motion.button>

      {/* For Her - Left Side - Slide from bottom */}
      <motion.div
        className="relative group cursor-pointer overflow-hidden transition-all duration-700 ease-in-out"
        style={{
          width: hoveredSide === 'her' ? '66.666%' : hoveredSide === 'him' ? '33.333%' : '50%',
        }}
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.6, 0.05, 0.01, 0.9] }}
        onMouseEnter={() => setHoveredSide('her')}
        onMouseLeave={() => setHoveredSide(null)}
        onClick={() => onNavigate('her')}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1585612935006-3868737d43e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGJlYXV0eSUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTc4MTczMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="For Her"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-900/60 via-pink-800/40 to-transparent" />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-500" />
        </div>

        {/* Sparkling Effect */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-pink-300 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* For Her Text - Bottom Left */}
        <motion.div
          className="absolute bottom-12 left-12 z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <h2 
            className="text-white text-2xl tracking-[0.3em]" 
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            For Her
          </h2>
        </motion.div>
      </motion.div>

      {/* For Him - Right Side - Slide from top */}
      <motion.div
        className="relative group cursor-pointer overflow-hidden transition-all duration-700 ease-in-out"
        style={{
          width: hoveredSide === 'him' ? '66.666%' : hoveredSide === 'her' ? '33.333%' : '50%',
        }}
        initial={{ y: '-100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.6, 0.05, 0.01, 0.9] }}
        onMouseEnter={() => setHoveredSide('him')}
        onMouseLeave={() => setHoveredSide(null)}
        onClick={() => onNavigate('him')}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1666980013846-7ba5605ac2c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kc29tZSUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTc4MzgxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="For Him"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-blue-900/60 via-blue-800/40 to-transparent" />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-500" />
        </div>

        {/* Sparkling Effect */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-300 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* For Him Text - Bottom Right */}
        <motion.div
          className="absolute bottom-12 right-12 z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <h2 
            className="text-white text-2xl tracking-[0.3em]" 
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            For Him
          </h2>
        </motion.div>
      </motion.div>

      {/* Center Divider Line */}
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent pointer-events-none" />

      {/* INDULGE YOUR SENSES - Center Text */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isMouseMoving ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-white text-center">
          {/* INDULGE - Top line, align left */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mb-4"
            style={{ 
              fontFamily: 'Cinzel, serif',
              fontSize: 'clamp(2rem, 8vw, 7rem)',
              letterSpacing: '0.2em',
              textAlign: 'left',
              marginLeft: '-15vw',
            }}
          >
            INDULGE
          </motion.div>

          {/* YOUR SENSES - Bottom line, align right */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            style={{ 
              fontFamily: 'Cinzel, serif',
              fontSize: 'clamp(2rem, 8vw, 7rem)',
              letterSpacing: '0.2em',
              textAlign: 'right',
              marginRight: '-15vw',
            }}
          >
            YOUR SENSES
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}