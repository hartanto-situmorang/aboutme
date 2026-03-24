import { motion } from 'framer-motion';
import { Briefcase, Code, Users } from 'lucide-react';
import type { UserMode } from '@/types';
import { SplitText } from '@/components/animations';
import { SplashCursor } from './backgrounds';

interface ModeSelectionProps {
  onSelectMode: (mode: UserMode) => void;
}

const modes = [
  {
    id: 'recruiter' as UserMode,
    title: 'Recruiter',
    description: 'View professional projects & achievements',
    icon: Briefcase,
    color: 'from-blue-500 to-cyan-400',
    hoverColor: 'group-hover:from-blue-400 group-hover:to-cyan-300',
    shadowColor: 'shadow-blue-500/25',
    borderColor: 'border-blue-500/30'
  },
  {
    id: 'developer' as UserMode,
    title: 'Developer',
    description: 'Explore deep technical details',
    icon: Code,
    color: 'from-green-500 to-emerald-400',
    hoverColor: 'group-hover:from-green-400 group-hover:to-emerald-300',
    shadowColor: 'shadow-green-500/25',
    borderColor: 'border-green-500/30'
  },
  {
    id: 'hr' as UserMode,
    title: 'HR',
    description: 'Discover soft skills & journey',
    icon: Users,
    color: 'from-purple-500 to-pink-400',
    hoverColor: 'group-hover:from-purple-400 group-hover:to-pink-300',
    shadowColor: 'shadow-purple-500/25',
    borderColor: 'border-purple-500/30'
  }
];

export function ModeSelection({ onSelectMode }: ModeSelectionProps) {
  return (

    <div className="relative min-h-screen flex flex-col items-center justify-center p-8">
      <SplashCursor
        SIM_RESOLUTION={120}
        DYE_RESOLUTION={300}
        SPLAT_RADIUS={0.1}
        SPLAT_FORCE={5000}
        COLOR_UPDATE_SPEED={8}
      />
      {/* Hero Title Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center mb-12"
      >
        {/* Main Title with Gradient */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            <SplitText
              delay={0.2}
              staggerDelay={0.05}
              animation="slide"
              trigger="immediate"
            >
              Hartanto Situmorang
            </SplitText>
          </span>
        </h1>

        {/* Subtitle with animation */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-xl md:text-2xl text-gray-300 font-light tracking-wide"
        >
          Full Stack Developer
        </motion.p>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="w-24 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto mt-6"
        />
      </motion.div>

      {/* Selection Prompt */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="text-gray-400 mb-12 text-lg text-center"
      >
        Select your perspective to view my portofolio
      </motion.p>

      {/* Mode Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
        {modes.map((mode, index) => (
          <motion.button
            key={mode.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 + index * 0.15, duration: 0.6 }}
            whileHover={{ scale: 1.03, y: -8 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelectMode(mode.id)}
            className="group relative"
          >
            <div className={`
              relative overflow-hidden rounded-2xl p-8 
              bg-gradient-to-br ${mode.color} ${mode.hoverColor}
              transition-all duration-500
              shadow-lg ${mode.shadowColor} hover:shadow-2xl
              border ${mode.borderColor} hover:border-white/40
            `}>
              {/* Glass overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />

              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>

              <div className="relative z-10 flex flex-col items-center">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="mb-6 p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                >
                  <mode.icon className="w-12 h-12 text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3">
                  {mode.title}
                </h3>

                {/* Description */}
                <p className="text-white/80 text-center text-sm leading-relaxed">
                  {mode.description}
                </p>
              </div>

              {/* Subtle animated particles */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-white/40"
                    animate={{
                      x: [0, 60, 0],
                      y: [0, -30, 0],
                      opacity: [0, 0.8, 0]
                    }}
                    transition={{
                      duration: 4 + i,
                      repeat: Infinity,
                      delay: i * 0.8
                    }}
                    style={{
                      left: `${25 + i * 25}%`,
                      top: `${70 + (i % 2) * 15}%`
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Footer hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 0.6 }}
        className="mt-16 text-gray-500 text-sm text-center"
      >
        <p>Choose the mode that best fits your interest</p>
      </motion.div>
    </div>
  );
}
