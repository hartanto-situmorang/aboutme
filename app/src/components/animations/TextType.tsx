import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TextTypeProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  cursor?: boolean;
  cursorStyle?: 'block' | 'line' | 'underline';
  onComplete?: () => void;
}

export function TextType({
  text,
  className = '',
  speed = 50,
  delay = 0,
  cursor = true,
  cursorStyle = 'line',
  onComplete
}: TextTypeProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const startDelay = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(startDelay);
  }, [delay]);

  useEffect(() => {
    if (!isTyping) return;

    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      setShowCursor(false);
      onComplete?.();
    }
  }, [displayedText, isTyping, speed, text, onComplete]);

  // Cursor blink effect
  useEffect(() => {
    if (!cursor || !isTyping || displayedText.length >= text.length) return;

    const blinkInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(blinkInterval);
  }, [cursor, isTyping, displayedText, text]);

  const getCursorClasses = () => {
    switch (cursorStyle) {
      case 'block':
        return 'inline-block w-3 h-[1em] bg-green-400 ml-1';
      case 'underline':
        return 'inline-block w-3 h-0.5 bg-green-400 ml-1 translate-y-1';
      case 'line':
      default:
        return 'inline-block w-0.5 h-[1em] bg-green-400 ml-0.5';
    }
  };

  return (
    <span className={className}>
      {displayedText}
      {cursor && (
        <motion.span
          className={getCursorClasses()}
          animate={{ opacity: showCursor ? 1 : 0 }}
          transition={{ duration: 0.1 }}
        />
      )}
    </span>
  );
}
