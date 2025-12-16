import { motion } from 'motion/react';
import { ArrowLeft, Sparkles, Award, Heart, Globe } from 'lucide-react';

interface AboutPageProps {
  onBack: () => void;
}

export function AboutPage({ onBack }: AboutPageProps) {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Starry Background */}
      <div className="absolute inset-0">
        {[...Array(80)].map((_, i) => (
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

      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600 rounded-full blur-3xl opacity-10" />
      </div>

      {/* Header */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <motion.button
              onClick={onBack}
              className="flex items-center gap-2 text-white hover:text-purple-400 transition-colors"
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

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <Sparkles className="w-16 h-16 text-purple-400 mx-auto mb-6" />
          <h2 
            className="text-white mb-6 tracking-wider"
            style={{ fontFamily: 'Cinzel, serif', fontSize: '4rem' }}
          >
            About Us
          </h2>
          <p className="text-white/80 text-xl max-w-3xl mx-auto leading-relaxed">
            Luxe Parfum represents the pinnacle of perfumery artistry, crafting exclusive fragrances that capture the essence of sophistication and timeless elegance.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300"
          >
            <Award className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 
              className="text-white text-xl mb-3 tracking-wide"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Premium Quality
            </h3>
            <p className="text-white/70 leading-relaxed">
              Each fragrance is meticulously crafted using the finest ingredients sourced from around the world.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300"
          >
            <Heart className="w-12 h-12 text-pink-400 mx-auto mb-4" />
            <h3 
              className="text-white text-xl mb-3 tracking-wide"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Artisan Crafted
            </h3>
            <p className="text-white/70 leading-relaxed">
              Our master perfumers blend tradition with innovation to create unique olfactory experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300"
          >
            <Globe className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 
              className="text-white text-xl mb-3 tracking-wide"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Global Excellence
            </h3>
            <p className="text-white/70 leading-relaxed">
              Recognized worldwide for our commitment to luxury and unparalleled sophistication.
            </p>
          </motion.div>
        </div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-md border border-white/10 rounded-2xl p-12"
        >
          <h3 
            className="text-white text-3xl mb-6 tracking-wide"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Our Story
          </h3>
          <div className="space-y-4 text-white/80 leading-relaxed text-lg">
            <p>
              Founded in the heart of Paris, Luxe Parfum has been creating extraordinary fragrances for discerning customers who appreciate the finer things in life. Our journey began with a simple vision: to craft perfumes that tell a story, evoke emotions, and leave a lasting impression.
            </p>
            <p>
              Every bottle of Luxe Parfum represents months of careful development, from selecting rare ingredients to perfecting the final composition. We believe that fragrance is not just a scent, but an expression of identity and style.
            </p>
            <p>
              Our collections for Her and Him are designed to celebrate individuality while maintaining the timeless elegance that defines our brand. Each fragrance is a masterpiece, carefully balanced to create an unforgettable sensory experience.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
