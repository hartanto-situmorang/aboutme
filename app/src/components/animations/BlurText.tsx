import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface BlurTextProps {
  children: string;
  className?: string;
  delay?: number;
  duration?: number;
  blurAmount?: number;
}

export function BlurText({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
  blurAmount = 10
}: BlurTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const variants = {
    hidden: {
      opacity: 0,
      filter: `blur(${blurAmount}px)`,
      y: 20
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

  return (
    <motion.span
      ref={ref}
      className={`inline-block ${className}`}
      variants={variants}
      initial="hidden"
      animate={controls}
    >
      {children}
    </motion.span>
  );
}
