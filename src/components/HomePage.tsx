import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: 'her' | 'him') => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="h-screen flex overflow-hidden relative">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-8 left-1/2 -translate-x-1/2 z-50 text-white text-3xl tracking-[0.3em]"
        style={{ fontFamily: 'Cinzel, serif' }}
      >
        LUXE PARFUM
      </motion.div>

      {/* For Her - Left Side - Slide from bottom */}
      <motion.div
        className="relative w-1/2 group cursor-pointer overflow-hidden"
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.6, 0.05, 0.01, 0.9] }}
        whileHover={{ scale: 1.02 }}
        onClick={() => onNavigate('her')}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1585612935006-3868737d43e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGJlYXV0eSUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTc4MTczMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="For Her"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-900/80 via-pink-800/60 to-transparent" />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
        </div>

        {/* Sparkling Effect */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-pink-300 rounded-full"
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

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center z-10 px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            <Sparkles className="w-12 h-12 text-pink-300 mx-auto mb-6" />
            <h2 className="text-white text-7xl mb-4 tracking-wider" style={{ fontFamily: 'Cinzel, serif' }}>
              For Her
            </h2>
            <p className="text-pink-200 text-xl mb-8 tracking-wide" style={{ fontFamily: 'Cinzel, serif' }}>
              Elegant, Feminine & Alluring
            </p>
            <motion.div
              className="inline-flex items-center gap-3 text-white text-lg group-hover:gap-6 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              <span>Discover</span>
              <ArrowRight className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </div>

        {/* Hover Border Effect */}
        <motion.div
          className="absolute inset-y-0 right-0 w-1 bg-gradient-to-b from-transparent via-pink-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
      </motion.div>

      {/* For Him - Right Side - Slide from top */}
      <motion.div
        className="relative w-1/2 group cursor-pointer overflow-hidden"
        initial={{ y: '-100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.6, 0.05, 0.01, 0.9] }}
        whileHover={{ scale: 1.02 }}
        onClick={() => onNavigate('him')}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1666980013846-7ba5605ac2c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kc29tZSUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTc4MzgxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="For Him"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-blue-900/80 via-blue-800/60 to-transparent" />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
        </div>

        {/* Sparkling Effect */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-300 rounded-full"
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

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center z-10 px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            <Sparkles className="w-12 h-12 text-blue-300 mx-auto mb-6" />
            <h2 className="text-white text-7xl mb-4 tracking-wider" style={{ fontFamily: 'Cinzel, serif' }}>
              For Him
            </h2>
            <p className="text-blue-200 text-xl mb-8 tracking-wide" style={{ fontFamily: 'Cinzel, serif' }}>
              Bold, Masculine & Refined
            </p>
            <motion.div
              className="inline-flex items-center gap-3 text-white text-lg group-hover:gap-6 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              <span>Discover</span>
              <ArrowRight className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </div>

        {/* Hover Border Effect */}
        <motion.div
          className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
      </motion.div>

      {/* Center Divider Line */}
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />
    </div>
  );
}
