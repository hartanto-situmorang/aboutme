import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TrueFocusProps {
  words: string[];
  className?: string;
  interval?: number;
  pauseDuration?: number;
}

export function TrueFocus({
  words,
  className = '',
  interval = 2000,
  pauseDuration = 1500
}: TrueFocusProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setCurrentIndex((prev) => (prev + 1) % words.length);
      }, pauseDuration);
      return () => clearTimeout(pauseTimer);
    }

    const timer = setTimeout(() => {
      setIsPaused(true);
    }, interval);

    return () => clearTimeout(timer);
  }, [currentIndex, isPaused, interval, pauseDuration, words.length]);

  return (
    <span className={`relative inline-block ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, filter: 'blur(10px)', scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            filter: isPaused ? 'blur(0px)' : 'blur(0px)',
            scale: 1 
          }}
          exit={{ 
            opacity: 0, 
            filter: 'blur(10px)',
            scale: 0.8 
          }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut'
          }}
          className="inline-block"
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
      
      {/* Focus cursor effect */}
      <motion.span
        className="absolute -inset-2 border-2 border-cyan-400/50 rounded-lg pointer-events-none"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ 
          opacity: isPaused ? [0.5, 1, 0.5] : 0,
          scale: isPaused ? [1, 1.02, 1] : 1.1
        }}
        transition={{
          duration: 1,
          repeat: isPaused ? Infinity : 0,
          ease: 'easeInOut'
        }}
      />
    </span>
  );
}
