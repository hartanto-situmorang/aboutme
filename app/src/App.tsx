import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Navbar,
  Hero,
  About,
  Career,
  Projects,
  Skills,
  Contact,
} from '@/components/sections';
import { SplashCursor } from '@/components/backgrounds';
import { DotBackground } from '@/components/ui/grid-dot-background';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import './App.css';

type Mode = 'splash' | 'simple';

function LoadingScreen() {
  const { t } = useLanguage();
  
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 text-center"
      >
        <motion.div
          animate={{
            rotate: 360,
            borderRadius: ['30%', '50%', '30%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="w-20 h-20 mx-auto mb-6 border-4 border-green-400 border-t-transparent rounded-full"
        />
        <motion.h2
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-2xl font-bold text-white font-mono"
        >
          &lt;{t('loading')} /&gt;
        </motion.h2>
      </motion.div>
    </div>
  );
}

function AppContent() {
  const [mode, setMode] = useState<Mode>('splash');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const toggleMode = () => {
    setMode((prev) => (prev === 'splash' ? 'simple' : 'splash'));
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  const isSplash = mode === 'splash';

  return (
    <div className="relative min-h-screen">
      {/* Background Layer */}
      <AnimatePresence mode="wait">
        {isSplash ? (
          <motion.div
            key="splash-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-0"
          >
            <div className="absolute inset-0 bg-black" />
            <SplashCursor
              SIM_RESOLUTION={128}
              DYE_RESOLUTION={1440}
              DENSITY_DISSIPATION={3.5}
              VELOCITY_DISSIPATION={2}
              PRESSURE={0.1}
              PRESSURE_ITERATIONS={20}
              CURL={3}
              SPLAT_RADIUS={0.2}
              SPLAT_FORCE={6000}
              SHADING={true}
              COLOR_UPDATE_SPEED={10}
            />
          </motion.div>
        ) : (
          <motion.div
            key="simple-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-0"
          >
            <DotBackground
              dotSize={1.5}
              dotColor="#6c8994"
              darkDotColor="#52525b"
              spacing={28}
              showFade={true}
              fadeIntensity={50}
              className="absolute inset-0 bg-white"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content Layer */}
      <div className={`relative z-10 ${isSplash ? 'text-white' : 'text-gray-900'}`}>
        <Navbar mode={mode} onToggleMode={toggleMode} />
        <main>
          <Hero mode={mode} />
          <About mode={mode} />
          <Career mode={mode} />
          <Projects mode={mode} />
          <Skills mode={mode} />
          <Contact mode={mode} />
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
