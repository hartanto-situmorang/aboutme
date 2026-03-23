import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, Minimize2, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface NavbarProps {
  mode: 'splash' | 'simple';
  onToggleMode: () => void;
}

// Static hrefs untuk scroll handler
const sectionIds = ['home', 'about', 'career', 'projects', 'skills', 'contact'];

export function Navbar({ mode, onToggleMode }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { language, toggleLanguage, t } = useLanguage();

  // Gunakan useMemo agar navLinks diupdate ketika bahasa berubah
  const navLinks = useMemo(() => [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.career'), href: '#career' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.contact'), href: '#contact' },
  ], [t, language]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      for (const section of [...sectionIds].reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const isSplash = mode === 'splash';

  // Label tombol bahasa yang akan ditampilkan
  // Jika sekarang EN, tombol menunjukkan "IND" (untuk pindah ke Indonesia)
  // Jika sekarang ID, tombol menunjukkan "ENG" (untuk pindah ke English)
  const languageButtonLabel = language === 'en' ? 'IND' : 'ENG';
  const languageButtonTitle = language === 'en' ? 'Switch to Bahasa Indonesia' : 'Switch to English';

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? isSplash
              ? 'bg-black/80 backdrop-blur-lg border-b border-green-500/20'
              : 'bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className={`text-xl font-bold tracking-tight ${
                isSplash
                  ? 'text-green-400 font-mono'
                  : 'text-gray-900'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSplash ? '<Home />' : '<Home />'}
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    isSplash
                      ? activeSection === link.href.slice(1)
                        ? 'text-green-400'
                        : 'text-gray-400 hover:text-green-300'
                      : activeSection === link.href.slice(1)
                        ? 'text-gray-900'
                        : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {link.name}
                  {activeSection === link.href.slice(1) && (
                    <motion.div
                      layoutId="activeNav"
                      className={`absolute bottom-0 left-2 right-2 h-0.5 ${
                        isSplash ? 'bg-green-400' : 'bg-gray-900'
                      }`}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </div>

            {/* Mode Toggle & Language Toggle & Mobile Menu */}
            <div className="flex items-center gap-2">
              {/* Mode Toggle */}
              <motion.button
                onClick={onToggleMode}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  isSplash
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30 hover:bg-green-500/30'
                    : 'bg-gray-100 text-gray-600 border border-gray-200 hover:bg-gray-200'
                }`}
                title={isSplash ? 'Switch to Simple Mode' : 'Switch to Splash Mode'}
              >
                {isSplash ? (
                  <>
                    <Minimize2 className="w-3.5 h-3.5" />
                    <span>{t('nav.mode.simple')}</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{t('nav.mode.splash')}</span>
                  </>
                )}
              </motion.button>

              {/* Language Toggle */}
              <motion.button
                onClick={toggleLanguage}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  isSplash
                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30 hover:bg-blue-500/30'
                    : 'bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100'
                }`}
                title={languageButtonTitle}
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{languageButtonLabel}</span>
              </motion.button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden p-2 rounded-lg transition-colors ${
                  isSplash
                    ? 'text-gray-300 hover:text-green-400 hover:bg-green-500/10'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className={`fixed inset-x-0 top-16 z-40 md:hidden ${
              isSplash
                ? 'bg-black/95 backdrop-blur-lg border-b border-green-500/20'
                : 'bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-lg'
            }`}
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isSplash
                      ? activeSection === link.href.slice(1)
                        ? 'bg-green-500/20 text-green-400'
                        : 'text-gray-300 hover:bg-green-500/10 hover:text-green-300'
                      : activeSection === link.href.slice(1)
                        ? 'bg-gray-100 text-gray-900'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
              
              {/* Mobile Mode Toggle */}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                onClick={onToggleMode}
                className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-base font-medium mt-4 ${
                  isSplash
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'bg-gray-100 text-gray-600 border border-gray-200'
                }`}
              >
                {isSplash ? (
                  <>
                    <Minimize2 className="w-4 h-4" />
                    <span>{t('nav.mode.simple')}</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>{t('nav.mode.splash')}</span>
                  </>
                )}
              </motion.button>

              {/* Mobile Language Toggle */}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (navLinks.length + 1) * 0.05 }}
                onClick={toggleLanguage}
                className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-base font-medium mt-2 ${
                  isSplash
                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    : 'bg-blue-50 text-blue-600 border border-blue-200'
                }`}
              >
                <Globe className="w-4 h-4" />
                <span>{language === 'en' ? 'Bahasa Indonesia' : 'English'}</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
