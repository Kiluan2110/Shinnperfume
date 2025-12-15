import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ChevronUp, ChevronDown, ShoppingBag } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

interface ForHimPageProps {
  onBack: () => void;
}

const himPerfumes = [
  {
    id: 1,
    name: 'Black Oud',
    price: '$350',
    description: 'Mysterious black oud wood combined with leather and amber. Bold and masculine with unparalleled depth.',
    notes: ['Oud Wood', 'Leather', 'Amber'],
    image: 'https://images.unsplash.com/photo-1666694890565-93659106d39e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHBlcmZ1bWUlMjBib3R0bGV8ZW58MXx8fHwxNzY1NzQyNzk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 2,
    name: 'Ocean Breeze',
    price: '$280',
    description: 'Fresh oceanic notes with Italian bergamot and cedar wood, evoking freedom and strength.',
    notes: ['Italian Bergamot', 'Cedar Wood', 'Sea Salt'],
    image: 'https://images.unsplash.com/photo-1659415455925-8b8eef9f93d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBjb2xvZ25lJTIwZnJhZ3JhbmNlfGVufDF8fHx8MTc2NTgyMjc5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 3,
    name: 'Midnight Noir',
    price: '$390',
    description: 'Luxurious blend of lavender, sandalwood and black vanilla. Seductive and mysterious.',
    notes: ['Lavender', 'Sandalwood', 'Black Vanilla'],
    image: 'https://images.unsplash.com/photo-1763631403216-8d193008481e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGZyYWdyYW5jZSUyMGJvdHRsZXxlbnwxfHx8fDE3NjU3OTk1NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 4,
    name: 'Tobacco Leather',
    price: '$370',
    description: 'Perfect harmony of sweet tobacco and rich leather, creating a sophisticated and bold signature.',
    notes: ['Sweet Tobacco', 'Rich Leather', 'Patchouli'],
    image: 'https://images.unsplash.com/photo-1719175936556-dbd05e415913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJmdW1lJTIwYm90dGxlfGVufDF8fHx8MTc2NTgyMDkwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 5,
    name: 'Vetiver Sage',
    price: '$320',
    description: 'Fresh vetiver grass combined with sage, elegant and refined with masculine sophistication.',
    notes: ['Vetiver Grass', 'Sage', 'Oak Wood'],
    image: 'https://images.unsplash.com/photo-1704961212944-524f56df23fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcGVyZnVtZSUyMHByb2R1Y3R8ZW58MXx8fHwxNzY1ODIwOTA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 6,
    name: 'Royal Wood',
    price: '$450',
    description: 'Royal fragrance with Indian sandalwood, musk and vanilla. Distinguished and refined.',
    notes: ['Indian Sandalwood', 'Musk', 'Bourbon Vanilla'],
    image: 'https://images.unsplash.com/photo-1621962728414-2bf391e9c8d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmFncmFuY2UlMjBiZWF1dHklMjBwcm9kdWN0fGVufDF8fHx8MTc2NTgyMDkxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function ForHimPage({ onBack }: ForHimPageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % himPerfumes.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + himPerfumes.length) % himPerfumes.length);
  };

  const currentPerfume = himPerfumes[currentIndex];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600 rounded-full blur-3xl opacity-10" />
      </div>

      {/* Sparkling Stars */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-300 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Header */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <motion.button
              onClick={onBack}
              className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.95 }}
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              <ArrowLeft className="w-6 h-6" />
              <span className="text-lg">Back</span>
            </motion.button>

            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white text-4xl tracking-[0.3em]"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              LUXE PARFUM
            </motion.h1>

            <div className="w-24" />
          </div>
        </div>
      </div>

      {/* Main Content - Full Screen Product */}
      <div className="relative z-10 h-[calc(100vh-120px)] flex items-center justify-center px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPerfume.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Product Image */}
            <motion.div
              className="relative"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 blur-3xl rounded-full" />
                <ImageWithFallback
                  src={currentPerfume.image}
                  alt={currentPerfume.name}
                  className="relative z-10 w-full h-full object-cover rounded-3xl"
                  style={{
                    boxShadow: '0 30px 80px rgba(59, 130, 246, 0.3)',
                  }}
                />
              </div>
            </motion.div>

            {/* Product Details */}
            <motion.div
              className="text-white"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-blue-400 tracking-widest mb-4" style={{ fontFamily: 'Cinzel, serif' }}>
                FOR HIM COLLECTION
              </p>
              <h2 className="text-6xl mb-6 tracking-wide" style={{ fontFamily: 'Cinzel, serif' }}>
                {currentPerfume.name}
              </h2>
              <p className="text-3xl text-blue-400 mb-8" style={{ fontFamily: 'Cinzel, serif' }}>
                {currentPerfume.price}
              </p>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                {currentPerfume.description}
              </p>

              {/* Fragrance Notes */}
              <div className="mb-10">
                <h3 className="text-xl mb-4 tracking-wide" style={{ fontFamily: 'Cinzel, serif' }}>
                  Fragrance Notes
                </h3>
                <div className="flex flex-wrap gap-3">
                  {currentPerfume.notes.map((note, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30"
                      style={{ fontFamily: 'Cinzel, serif' }}
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              {/* Product Number */}
              <p className="text-white/50 mb-6" style={{ fontFamily: 'Cinzel, serif' }}>
                {currentIndex + 1} / {himPerfumes.length}
              </p>

              {/* Buy Button */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)',
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-12 py-4 rounded-full flex items-center justify-center gap-3 transition-all duration-300"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                <ShoppingBag className="w-6 h-6" />
                <span className="text-xl">Add to Cart</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows - Right Side */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
        <motion.button
          onClick={goToPrevious}
          className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-blue-500/30 border border-white/20 transition-all duration-300"
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronUp className="w-7 h-7" />
        </motion.button>
        <motion.button
          onClick={goToNext}
          className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-blue-500/30 border border-white/20 transition-all duration-300"
          whileHover={{ scale: 1.1, y: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronDown className="w-7 h-7" />
        </motion.button>
      </div>
    </div>
  );
}
