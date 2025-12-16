import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp, ChevronDown, ShoppingBag } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

interface ForHerPageProps {
  onBack: () => void;
}

const herPerfumes = [
  {
    id: 1,
    name: 'Rose Élégance',
    price: '$280',
    description: 'A timeless masterpiece capturing the delicate essence of Bulgarian rose, perfectly balanced with the warmth of Madagascar vanilla and the subtle allure of white musk.',
    topNotes: 'Bulgarian Rose, Pink Pepper',
    heartNotes: 'Madagascar Vanilla, Jasmine',
    baseNotes: 'White Musk, Sandalwood',
    image: 'https://images.unsplash.com/photo-1630573133526-8d090e0269af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJmdW1lJTIwYm90dGxlJTIwcGlua3xlbnwxfHx8fDE3NjU4NTQ5MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 2,
    name: 'Velvet Blossom',
    price: '$320',
    description: 'An enchanting blend that harmonizes the exotic richness of Indian jasmine with the sweet luminosity of Tunisian orange blossom.',
    topNotes: 'Orange Blossom, Bergamot',
    heartNotes: 'Indian Jasmine, Tuberose',
    baseNotes: 'Sandalwood, Amber',
    image: 'https://images.unsplash.com/photo-1760113559708-84e7a148ec68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcGVyZnVtZSUyMGJvdHRsZSUyMHdvbWVufGVufDF8fHx8MTc2NTg1Njc0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 3,
    name: 'Moonlight Dream',
    price: '$265',
    description: 'Inspired by the magic of moonlit nights, this fragrance combines gentle evening jasmine with warm woody notes and sweet vanilla.',
    topNotes: 'Night Jasmine, Lemon',
    heartNotes: 'Tahitian Vanilla, Iris',
    baseNotes: 'Cedar Wood, Tonka Bean',
    image: 'https://images.unsplash.com/photo-1704961212944-524f56df23fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcGVyZnVtZSUyMHByb2R1Y3R8ZW58MXx8fHwxNzY1ODIwOTA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 4,
    name: 'Peony Paradise',
    price: '$350',
    description: 'A vibrant celebration of youth and freshness, featuring lush peony petals complemented by the sweet brightness of red berries.',
    topNotes: 'Peony, Red Berries',
    heartNotes: 'Lily of the Valley, Rose',
    baseNotes: 'White Musk, Blonde Woods',
    image: 'https://images.unsplash.com/photo-1739190940453-20900e9d18fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwcGVyZnVtZXxlbnwxfHx8fDE3NjU3NDE3Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 5,
    name: 'Cherry Blossom',
    price: '$295',
    description: 'Capturing the essence of spring in Japan, this delicate fragrance features airy cherry blossoms with fresh and refined notes.',
    topNotes: 'Cherry Blossom, Mandarin',
    heartNotes: 'White Rose, Freesia',
    baseNotes: 'Soft Musk, Rice Powder',
    image: 'https://images.unsplash.com/photo-1706408604086-144590f4020a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpYyUyMHBlcmZ1bWUlMjBib3R0bGV8ZW58MXx8fHwxNzY1ODIwOTEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 6,
    name: 'Golden Orchid',
    price: '$420',
    description: 'An opulent fragrance featuring rare golden orchid, luxurious and captivating with deep, lingering base notes.',
    topNotes: 'Golden Orchid, Saffron',
    heartNotes: 'Black Orchid, Plum',
    baseNotes: 'Amber, Patchouli, Dark Chocolate',
    image: 'https://images.unsplash.com/photo-1621962728414-2bf391e9c8d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmFncmFuY2UlMjBiZWF1dHklMjBwcm9kdWN0fGVufDF8fHx8MTc2NTgyMDkxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function ForHerPage({ onBack }: ForHerPageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % herPerfumes.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + herPerfumes.length) % herPerfumes.length);
  };

  const currentPerfume = herPerfumes[currentIndex];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Starry Background */}
      <div className="absolute inset-0">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-pink-300 rounded-full"
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
      </div>

      {/* Main Content - Full Screen Product */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPerfume.id}
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="relative h-screen flex flex-col"
        >
          {/* Full Screen Background Image - 3/4 of screen */}
          <div className="flex-1 relative">
            <ImageWithFallback
              src={currentPerfume.image}
              alt={currentPerfume.name}
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90" />
          </div>

          {/* Bottom Section - 1/4 of screen */}
          <div className="relative bg-black/80 backdrop-blur-xl border-t border-white/10 p-8">
            <motion.button
              onClick={onBack}
              className="absolute top-4 left-4 text-white/60 hover:text-pink-400 transition-colors text-sm tracking-wide"
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.95 }}
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              ← Back
            </motion.button>

            {/* Product Name and Price */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <p 
                className="text-pink-400 tracking-[0.2em] mb-1 text-sm"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                FOR HER COLLECTION
              </p>
              <div className="flex items-baseline gap-4">
                <h1 
                  className="text-white tracking-wide text-4xl"
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  {currentPerfume.name}
                </h1>
                <p 
                  className="text-pink-400 text-2xl"
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  {currentPerfume.price}
                </p>
              </div>
            </motion.div>

            {/* Bottom Content - Description, Notes, and Buy Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-12 gap-6"
            >
              {/* Description - Takes 5 columns */}
              <div className="col-span-5">
                <h3 
                  className="text-white text-lg mb-3 tracking-wide"
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  Description
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {currentPerfume.description}
                </p>
              </div>

              {/* Notes - Takes 5 columns */}
              <div className="col-span-5">
                <h3 
                  className="text-white text-lg mb-3 tracking-wide"
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  NOTES
                </h3>
                <div className="space-y-3">
                  <div>
                    <p 
                      className="text-pink-300 text-sm mb-1 tracking-wider"
                      style={{ fontFamily: 'Cinzel, serif' }}
                    >
                      TOP
                    </p>
                    <p className="text-white/70 text-sm">{currentPerfume.topNotes}</p>
                  </div>
                  <div>
                    <p 
                      className="text-pink-300 text-sm mb-1 tracking-wider"
                      style={{ fontFamily: 'Cinzel, serif' }}
                    >
                      HEART
                    </p>
                    <p className="text-white/70 text-sm">{currentPerfume.heartNotes}</p>
                  </div>
                  <div>
                    <p 
                      className="text-pink-300 text-sm mb-1 tracking-wider"
                      style={{ fontFamily: 'Cinzel, serif' }}
                    >
                      BASE
                    </p>
                    <p className="text-white/70 text-sm">{currentPerfume.baseNotes}</p>
                  </div>
                </div>
              </div>

              {/* Buy Button - Takes 2 columns */}
              <div className="col-span-2 flex items-center justify-end">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 20px 40px rgba(236, 72, 153, 0.5)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-b from-pink-500 to-rose-600 text-white px-6 py-8 rounded-2xl flex flex-col items-center justify-center gap-2 transition-all duration-300 w-full"
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  <ShoppingBag className="w-8 h-8" />
                  <span className="text-lg tracking-wider whitespace-nowrap">
                    BUY<br />ITEM
                  </span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows - Right Side */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
        <motion.button
          onClick={goToPrevious}
          className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-pink-500/30 border border-white/20 transition-all duration-300"
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronUp className="w-8 h-8" />
        </motion.button>
        <div className="text-white/60 text-center text-sm" style={{ fontFamily: 'Cinzel, serif' }}>
          {currentIndex + 1}/{herPerfumes.length}
        </div>
        <motion.button
          onClick={goToNext}
          className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-pink-500/30 border border-white/20 transition-all duration-300"
          whileHover={{ scale: 1.1, y: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.button>
      </div>
    </div>
  );
}
