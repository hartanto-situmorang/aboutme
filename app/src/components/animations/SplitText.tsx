import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface SplitTextProps {
  children: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  animation?: 'fade' | 'slide' | 'scale' | 'rotate' | 'wave';
  trigger?: 'inView' | 'immediate';
}

export function SplitText({
  children,
  className = '',
  delay = 0,
  staggerDelay = 0.03,
  animation = 'slide',
  trigger = 'immediate'
}: SplitTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const controls = useAnimation();
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    if (trigger === 'immediate' && !hasTriggered) {
      // Trigger immediately with a small timeout to ensure mount
      const timer = setTimeout(() => {
        controls.start('visible');
        setHasTriggered(true);
      }, delay * 1000);
      return () => clearTimeout(timer);
    } else if (trigger === 'inView' && isInView && !hasTriggered) {
      controls.start('visible');
      setHasTriggered(true);
    }
  }, [isInView, controls, delay, trigger, hasTriggered]);

  const words = children.split(' ');

  const getVariants = () => {
    switch (animation) {
      case 'fade':
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        };
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.5 },
          visible: { opacity: 1, scale: 1 }
        };
      case 'rotate':
        return {
          hidden: { opacity: 0, rotateX: -90 },
          visible: { opacity: 1, rotateX: 0 }
        };
      case 'wave':
        return {
          hidden: { opacity: 0, y: 50, rotateZ: -10 },
          visible: { opacity: 1, y: 0, rotateZ: 0 }
        };
      case 'slide':
      default:
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 }
        };
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay
      }
    }
  };

  const childVariants = getVariants();

  return (
    <motion.span
      ref={ref}
      className={`inline-block ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      style={{ perspective: '1000px' }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {word.split('').map((char, charIndex) => (
            <motion.span
              key={`${wordIndex}-${charIndex}`}
              variants={childVariants}
              className="inline-block text-white"
              style={{ transformStyle: 'preserve-3d' }}
              transition={{
                type: 'spring',
                damping: 12,
                stiffness: 100
              }}
            >
              {char}
            </motion.span>
          ))}
          {wordIndex < words.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </span>
      ))}
    </motion.span>
  );
}
