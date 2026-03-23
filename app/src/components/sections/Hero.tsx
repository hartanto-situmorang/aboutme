import { motion } from 'framer-motion';
import { ChevronDown, Code2, Terminal, Cpu } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import { useLanguage } from '@/contexts/LanguageContext';

interface HeroProps {
  mode: 'splash' | 'simple';
}

export function Hero({ mode }: HeroProps) {
  const isSplash = mode === 'splash';
  const { t } = useLanguage();

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
                isSplash
                  ? 'bg-green-500/10 text-green-400 border border-green-500/30'
                  : 'bg-gray-100 text-gray-600 border border-gray-200'
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span
                  className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                    isSplash ? 'bg-green-400' : 'bg-green-500'
                  }`}
                />
                <span
                  className={`relative inline-flex rounded-full h-2 w-2 ${
                    isSplash ? 'bg-green-500' : 'bg-green-600'
                  }`}
                />
              </span>
              {t('hero.status')}
            </div>
          </motion.div>

          {/* Name */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight ${
                isSplash ? 'text-white font-mono' : 'text-gray-900'
              }`}
            >
              {isSplash ? (
                <span className="inline-flex items-center gap-3 flex-wrap justify-center">
                  <Terminal className="w-8 h-8 sm:w-10 sm:h-10 text-green-400" />
                  <span>Hartanto</span>
                  <span className="text-green-400">Situmorang</span>
                </span>
              ) : (
                <span className="inline-flex items-center gap-3 flex-wrap justify-center">
                  <span>Hartanto</span>
                  <span className="text-gray-600">Situmorang</span>
                </span>
              )}
            </h1>
            
            <p
              className={`text-lg sm:text-xl md:text-2xl font-medium ${
                isSplash ? 'text-gray-400' : 'text-gray-500'
              }`}
            >
              {t('hero.role')}
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.div
            variants={itemVariants as any}
            className={`max-w-3xl mx-auto ${
              isSplash
                ? 'bg-black/40 backdrop-blur-sm border border-green-500/20'
                : 'bg-white/60 backdrop-blur-sm border border-gray-200'
            } rounded-2xl p-6 sm:p-8`}
          >
            <div className="flex items-start gap-4">
              <div
                className={`hidden sm:flex p-3 rounded-xl ${
                  isSplash ? 'bg-green-500/20' : 'bg-gray-100'
                }`}
              >
                <Code2
                  className={`w-6 h-6 ${
                    isSplash ? 'text-green-400' : 'text-gray-600'
                  }`}
                />
              </div>
              <div className="text-left">
                <p
                  className={`text-base sm:text-lg leading-relaxed ${
                    isSplash ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {t('hero.tagline')}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Quick Info */}
          <motion.div
            variants={itemVariants as any}
            className={`flex flex-wrap items-center justify-center gap-4 text-sm ${
              isSplash ? 'text-gray-400' : 'text-gray-500'
            }`}
          >
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              <span>{personalInfo.location}</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <span>{personalInfo.email}</span>
            <span className="hidden sm:inline">•</span>
            <span>{personalInfo.phone}</span>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={itemVariants as any}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              onClick={scrollToAbout}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`px-8 py-3 rounded-full font-medium transition-all ${
                isSplash
                  ? 'bg-green-500 text-black hover:bg-green-400'
                  : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}
            >
              {t('hero.cta.primary')}
            </motion.button>
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`px-8 py-3 rounded-full font-medium border transition-all ${
                isSplash
                  ? 'border-green-500/50 text-green-400 hover:bg-green-500/10'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-100'
              }`}
            >
              {t('hero.cta.secondary')}
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className={`p-2 mb-4 rounded-full transition-colors ${
              isSplash
                ? 'text-gray-500 hover:text-green-400'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
