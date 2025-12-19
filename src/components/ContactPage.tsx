import { motion } from 'motion/react';
import { ArrowLeft, Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

interface ContactPageProps {
  onBack: () => void;
}

export function ContactPage({ onBack }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

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
              className="flex items-center gap-2 hover:text-[#D4A574] transition-colors"
              style={{ color: '#D4A574' }}
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-6 h-6" />
              <span className="text-lg" style={{ fontFamily: 'Cinzel, serif' }}>Back</span>
            </motion.button>

            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl tracking-[0.3em]"
              style={{ fontFamily: 'Cinzel, serif', color: '#D4A574' }}
            >
              SHINN PERFUME
            </motion.h1>

            <div className="w-24" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 
            className="mb-6 tracking-wider"
            style={{ fontFamily: 'Cinzel, serif', fontSize: '4rem', color: '#D4A574' }}
          >
            Contact Us
          </h2>
          <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: '#C9B398' }}>
            We'd love to hear from you. Reach out to us for any inquiries about our exclusive fragrances.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 
              className="text-2xl mb-8 tracking-wide"
              style={{ fontFamily: 'Cinzel, serif', color: '#D4A574' }}
            >
              Get In Touch
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#D4A574]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6" style={{ color: '#D4A574' }} />
                </div>
                <div>
                  <h4 
                    className="mb-1 tracking-wide"
                    style={{ fontFamily: 'Cinzel, serif', color: '#D4A574' }}
                  >
                    Email
                  </h4>
                  <p style={{ color: '#C9B398' }}>dangm9513@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#D4A574]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" style={{ color: '#D4A574' }} />
                </div>
                <div>
                  <h4 
                    className="mb-1 tracking-wide"
                    style={{ fontFamily: 'Cinzel, serif', color: '#D4A574' }}
                  >
                    Phone
                  </h4>
                  <p style={{ color: '#C9B398' }}>0968614058</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#D4A574]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" style={{ color: '#D4A574' }} />
                </div>
                <div>
                  <h4 
                    className="mb-1 tracking-wide"
                    style={{ fontFamily: 'Cinzel, serif', color: '#D4A574' }}
                  >
                    Address
                  </h4>
                  <p style={{ color: '#C9B398' }}>
                    109 Thích Quảng Đức, phường 4,<br />
                    quận Phú Nhuận, TP.HCM
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-[#D4A574]/10 to-[#C9B398]/10 backdrop-blur-md border border-[#D4A574]/20 rounded-2xl p-6">
              <h4 
                className="text-xl mb-3 tracking-wide"
                style={{ fontFamily: 'Cinzel, serif', color: '#D4A574' }}
              >
                Business Hours
              </h4>
              <div className="space-y-2" style={{ color: '#C9B398' }}>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block mb-2 tracking-wide"
                  style={{ fontFamily: 'Cinzel, serif', color: '#D4A574' }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full bg-white/5 border border-[#D4A574]/20 rounded-lg px-4 py-3 focus:outline-none focus:border-[#D4A574] transition-colors"
                  style={{ color: '#D4A574' }}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block mb-2 tracking-wide"
                  style={{ fontFamily: 'Cinzel, serif', color: '#D4A574' }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full bg-white/5 border border-[#D4A574]/20 rounded-lg px-4 py-3 focus:outline-none focus:border-[#D4A574] transition-colors"
                  style={{ color: '#D4A574' }}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block mb-2 tracking-wide"
                  style={{ fontFamily: 'Cinzel, serif', color: '#D4A574' }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="w-full bg-white/5 border border-[#D4A574]/20 rounded-lg px-4 py-3 focus:outline-none focus:border-[#D4A574] transition-colors resize-none"
                  style={{ color: '#D4A574' }}
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 20px 40px rgba(212, 165, 116, 0.4)',
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-[#D4A574] to-[#C9B398] text-black px-8 py-4 rounded-full flex items-center justify-center gap-3 transition-all duration-300"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                <Send className="w-5 h-5" />
                <span className="text-lg tracking-wide">Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}