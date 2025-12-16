import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp, ChevronDown, ShoppingBag } from 'lucide-react';
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
    description: 'A powerful composition featuring mysterious black oud wood, rich leather, and warm amber. Bold and masculine with unparalleled depth.',
    topNotes: 'Oud Wood, Black Pepper',
    heartNotes: 'Leather, Cardamom',
    baseNotes: 'Amber, Vetiver',
    image: 'https://images.unsplash.com/photo-1759793500110-e3cb1f0fe6ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwY29sb2duZSUyMGJsYWNrJTIwYm90dGxlfGVufDF8fHx8MTc2NTg1Njc1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 2,
    name: 'Ocean Breeze',
    price: '$280',
    description: 'Fresh oceanic notes harmonized with Italian bergamot and robust cedar wood. This invigorating fragrance evokes the freedom of open waters.',
    topNotes: 'Italian Bergamot, Sea Salt',
    heartNotes: 'Marine Notes, Lavender',
    baseNotes: 'Cedar Wood, Oakmoss',
    image: 'https://images.unsplash.com/photo-1765306163629-c7f4dfb2ff41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGZyYWdyYW5jZSUyMGJvdHRsZSUyMGJsdWV8ZW58MXx8fHwxNzY1ODU2NzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 3,
    name: 'Midnight Noir',
    price: '$390',
    description: 'A luxurious blend of aromatic lavender, creamy sandalwood, and black vanilla. Seductive and mysterious for the modern gentleman.',
    topNotes: 'Lavender, Star Anise',
    heartNotes: 'Sandalwood, Sage',
    baseNotes: 'Black Vanilla, Tonka Bean',
    image: 'https://images.unsplash.com/photo-1763631403216-8d193008481e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGZyYWdyYW5jZSUyMGJvdHRsZXxlbnwxfHx8fDE3NjU3OTk1NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 4,
    name: 'Tobacco Leather',
    price: '$370',
    description: 'A sophisticated harmony of sweet tobacco and rich leather, enhanced with earthy patchouli. Creating a bold signature scent.',
    topNotes: 'Sweet Tobacco, Cinnamon',
    heartNotes: 'Rich Leather, Whiskey',
    baseNotes: 'Patchouli, Amber',
    image: 'https://images.unsplash.com/photo-1719175936556-dbd05e415913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJmdW1lJTIwYm90dGxlfGVufDF8fHx8MTc2NTgyMDkwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 5,
    name: 'Vetiver Sage',
    price: '$320',
    description: 'Fresh vetiver grass masterfully combined with aromatic sage and oak wood. Elegant and refined with masculine sophistication.',
    topNotes: 'Vetiver Grass, Grapefruit',
    heartNotes: 'Sage, Geranium',
    baseNotes: 'Oak Wood, Cedarwood',
    image: 'https://images.unsplash.com/photo-1704961212944-524f56df23fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcGVyZnVtZSUyMHByb2R1Y3R8ZW58MXx8fHwxNzY1ODIwOTA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 6,
    name: 'Royal Wood',
    price: '$450',
    description: 'A regal fragrance featuring premium Indian sandalwood, sensual musk, and Bourbon vanilla. Distinguished and refined.',
    topNotes: 'Indian Sandalwood, Cardamom',
    heartNotes: 'Musk, Iris',
    baseNotes: 'Bourbon Vanilla, Cashmere Wood',
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
      {/* Starry Background */}
      <div className="absolute inset-0">
        {[...Array(60)].map((_, i) => (
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
              className="absolute top-4 left-4 text-white/60 hover:text-blue-400 transition-colors text-sm tracking-wide"
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
                className="text-blue-400 tracking-[0.2em] mb-1 text-sm"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                FOR HIM COLLECTION
              </p>
              <div className="flex items-baseline gap-4">
                <h1 
                  className="text-white tracking-wide text-4xl"
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  {currentPerfume.name}
                </h1>
                <p 
                  className="text-blue-400 text-2xl"
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
                      className="text-blue-300 text-sm mb-1 tracking-wider"
                      style={{ fontFamily: 'Cinzel, serif' }}
                    >
                      TOP
                    </p>
                    <p className="text-white/70 text-sm">{currentPerfume.topNotes}</p>
                  </div>
                  <div>
                    <p 
                      className="text-blue-300 text-sm mb-1 tracking-wider"
                      style={{ fontFamily: 'Cinzel, serif' }}
                    >
                      HEART
                    </p>
                    <p className="text-white/70 text-sm">{currentPerfume.heartNotes}</p>
                  </div>
                  <div>
                    <p 
                      className="text-blue-300 text-sm mb-1 tracking-wider"
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
                    boxShadow: '0 20px 40px rgba(59, 130, 246, 0.5)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-b from-blue-500 to-indigo-600 text-white px-6 py-8 rounded-2xl flex flex-col items-center justify-center gap-2 transition-all duration-300 w-full"
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
          className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-blue-500/30 border border-white/20 transition-all duration-300"
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronUp className="w-8 h-8" />
        </motion.button>
        <div className="text-white/60 text-center text-sm" style={{ fontFamily: 'Cinzel, serif' }}>
          {currentIndex + 1}/{himPerfumes.length}
        </div>
        <motion.button
          onClick={goToNext}
          className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-blue-500/30 border border-white/20 transition-all duration-300"
          whileHover={{ scale: 1.1, y: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.button>
      </div>
    </div>
  );
}
