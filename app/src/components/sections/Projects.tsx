import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FolderGit2,
  ChevronLeft,
  ChevronRight,
  Layers,
  CheckCircle2,
  // ArrowUpRight,
  Calendar,
  Code2,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProjectsProps {
  mode: 'splash' | 'simple';
}

export function Projects({ mode }: ProjectsProps) {
  const [activeProject, setActiveProject] = useState(0);
  const [direction, setDirection] = useState(0);
  const { t } = useLanguage();

  const isSplash = mode === 'splash';

  // Get translated projects
  const getProjects = () => {
    return [
      {
        id: 'erp-putera-wibowo',
        title: t('projects.items.0.title'),
        subtitle: t('projects.items.0.subtitle'),
        description: t('projects.items.0.description'),
        technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'REST API'],
        features: [
          t('projects.items.0.features.0'),
          t('projects.items.0.features.1'),
          t('projects.items.0.features.2'),
          t('projects.items.0.features.3'),
          t('projects.items.0.features.4'),
          t('projects.items.0.features.5'),
          t('projects.items.0.features.6'),
          t('projects.items.0.features.7'),
        ],
        metrics: t('projects.items.0.metrics'),
        date: '2025 - 2026',
      },
      {
        id: 'realtime-monitoring',
        title: t('projects.items.1.title'),
        subtitle: t('projects.items.1.subtitle'),
        description: t('projects.items.1.description'),
        technologies: ['React', 'Node.js', 'WebSocket', 'IoT Sensors', 'PostgreSQL', 'Chart.js'],
        features: [
          t('projects.items.1.features.0'),
          t('projects.items.1.features.1'),
          t('projects.items.1.features.2'),
          t('projects.items.1.features.3'),
          t('projects.items.1.features.4'),
          t('projects.items.1.features.5'),
        ],
        metrics: t('projects.items.1.metrics'),
        date: '2025',
      },
      {
        id: '3d-container-design',
        title: t('projects.items.2.title'),
        subtitle: t('projects.items.2.subtitle'),
        description: t('projects.items.2.description'),
        technologies: ['Three.js', 'React Three Fiber', 'WebGL', 'JavaScript', 'Blender'],
        features: [
          t('projects.items.2.features.0'),
          t('projects.items.2.features.1'),
          t('projects.items.2.features.2'),
          t('projects.items.2.features.3'),
          t('projects.items.2.features.4'),
          t('projects.items.2.features.5'),
        ],
        metrics: t('projects.items.2.metrics'),
        date: '2025',
      },
      {
        id: 'spa-kiosk-table',
        title: t('projects.items.3.title'),
        subtitle: t('projects.items.3.subtitle'),
        description: t('projects.items.3.description'),
        technologies: ['React', 'PWA', 'Touch UI', 'Local Storage', 'Offline Sync'],
        features: [
          t('projects.items.3.features.0'),
          t('projects.items.3.features.1'),
          t('projects.items.3.features.2'),
          t('projects.items.3.features.3'),
          t('projects.items.3.features.4'),
          t('projects.items.3.features.5'),
        ],
        metrics: t('projects.items.3.metrics'),
        date: '2025',
      },
    ];
  };

  const projects = getProjects();

  const nextProject = () => {
    setDirection(1);
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setDirection(-1);
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index: number) => {
    setDirection(index > activeProject ? 1 : -1);
    setActiveProject(index);
  };

  const currentProject = projects[activeProject];

  // Slide animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    }),
  };

  // Content animation variants
  const contentVariants = {
    enter: { opacity: 0, y: 20 },
    center: { 
      opacity: 1, 
      y: 0,
      transition: { delay: 0.2, duration: 0.4 }
    },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <section
      id="projects"
      className={`relative py-20 sm:py-32 overflow-hidden ${
        isSplash ? 'bg-black/50' : 'bg-gray-50/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <FolderGit2
              className={`w-6 h-6 ${
                isSplash ? 'text-green-400' : 'text-gray-600'
              }`}
            />
            <span
              className={`text-sm font-medium uppercase tracking-wider ${
                isSplash ? 'text-green-400' : 'text-gray-500'
              }`}
            >
              {t('projects.title')}
            </span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-bold ${
              isSplash ? 'text-white' : 'text-gray-900'
            }`}
          >
            {t('projects.subtitle')}
          </h2>
        </motion.div>

        {/* Main Project Display with Slide Animation */}
        <div className="relative">
          {/* Navigation Buttons - Side */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 hidden lg:block">
            <motion.button
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevProject}
              className={`p-3 rounded-full shadow-lg backdrop-blur-sm transition-all ${
                isSplash
                  ? 'bg-black/60 text-green-400 border border-green-500/30 hover:bg-green-500/20'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 hidden lg:block">
            <motion.button
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextProject}
              className={`p-3 rounded-full shadow-lg backdrop-blur-sm transition-all ${
                isSplash
                  ? 'bg-black/60 text-green-400 border border-green-500/30 hover:bg-green-500/20'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Project Card Container */}
          <div className="relative min-h-[600px] lg:min-h-[500px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeProject}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className={`rounded-3xl overflow-hidden shadow-2xl ${
                  isSplash
                    ? 'bg-black/70 backdrop-blur-md border border-green-500/20'
                    : 'bg-white border border-gray-200'
                }`}
              >
                <div className="grid lg:grid-cols-5">
                  {/* Project Image/Visual - Takes 2 columns */}
                  <motion.div 
                    variants={contentVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className={`lg:col-span-2 aspect-video lg:aspect-auto relative overflow-hidden ${
                      isSplash
                        ? 'bg-gradient-to-br from-green-500/10 via-black to-black'
                        : 'bg-gradient-to-br from-gray-100 to-gray-200'
                    }`}
                  >
                    {/* Decorative Elements */}
                    <div className="absolute inset-0 opacity-30">
                      <div className={`absolute top-10 left-10 w-32 h-32 rounded-full blur-3xl ${
                        isSplash ? 'bg-green-500/30' : 'bg-gray-400/30'
                      }`} />
                      <div className={`absolute bottom-10 right-10 w-40 h-40 rounded-full blur-3xl ${
                        isSplash ? 'bg-blue-500/20' : 'bg-gray-300/30'
                      }`} />
                    </div>

                    {/* Icon Center */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className={`p-8 rounded-3xl ${
                          isSplash
                            ? 'bg-green-500/10 border border-green-500/20'
                            : 'bg-white/80 border border-gray-200'
                        }`}
                      >
                        <Layers
                          className={`w-16 h-16 ${
                            isSplash ? 'text-green-400' : 'text-gray-600'
                          }`}
                        />
                      </motion.div>
                    </div>

                    {/* Project Number Badge */}
                    <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-sm font-medium ${
                      isSplash
                        ? 'bg-black/60 text-green-400 border border-green-500/30'
                        : 'bg-white/80 text-gray-700 border border-gray-200'
                    }`}>
                      {String(activeProject + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                    </div>
                  </motion.div>

                  {/* Project Details - Takes 3 columns */}
                  <div className="lg:col-span-3 p-6 sm:p-8 lg:p-10">
                    <motion.div
                      variants={contentVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                    >
                      {/* Header */}
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${
                            isSplash
                              ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                              : 'bg-gray-100 text-gray-600 border border-gray-200'
                          }`}
                        >
                          <Calendar className="w-3.5 h-3.5" />
                          {currentProject.date}
                        </span>
                        <span
                          className={`text-sm ${
                            isSplash ? 'text-gray-400' : 'text-gray-500'
                          }`}
                        >
                          {currentProject.metrics}
                        </span>
                      </div>

                      <h3
                        className={`text-2xl sm:text-3xl font-bold mb-2 ${
                          isSplash ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {currentProject.title}
                      </h3>

                      <p
                        className={`text-sm sm:text-base mb-4 ${
                          isSplash ? 'text-green-400' : 'text-gray-500'
                        }`}
                      >
                        {currentProject.subtitle}
                      </p>

                      <p
                        className={`text-base mb-6 leading-relaxed ${
                          isSplash ? 'text-gray-300' : 'text-gray-600'
                        }`}
                      >
                        {currentProject.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4
                          className={`text-xs font-semibold uppercase tracking-wider mb-3 flex items-center gap-2 ${
                            isSplash ? 'text-gray-500' : 'text-gray-400'
                          }`}
                        >
                          <Code2 className="w-4 h-4" />
                          {t('projects.technologies')}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {currentProject.technologies.map((tech, index) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.3 + index * 0.05 }}
                              className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                                isSplash
                                  ? 'bg-green-500/10 text-green-300 border border-green-500/20'
                                  : 'bg-gray-100 text-gray-700 border border-gray-200'
                              }`}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <h4
                          className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
                            isSplash ? 'text-gray-500' : 'text-gray-400'
                          }`}
                        >
                          {t('projects.features')}
                        </h4>
                        <ul className="grid sm:grid-cols-2 gap-2">
                          {currentProject.features.slice(0, 4).map((feature, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.4 + index * 0.05 }}
                              className={`flex items-start gap-2 text-sm ${
                                isSplash ? 'text-gray-300' : 'text-gray-600'
                              }`}
                            >
                              <CheckCircle2
                                className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                                  isSplash ? 'text-green-400' : 'text-gray-400'
                                }`}
                              />
                              <span>{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* View Project Button */}
                      {/* <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all ${
                          isSplash
                            ? 'bg-green-500 text-black hover:bg-green-400'
                            : 'bg-gray-900 text-white hover:bg-gray-800'
                        }`}
                      >
                        {t('projects.viewDetails')}
                        <ArrowUpRight className="w-4 h-4" />
                      </motion.button> */}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6 lg:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevProject}
              className={`p-3 rounded-full transition-all ${
                isSplash
                  ? 'bg-black/60 text-green-400 border border-green-500/30'
                  : 'bg-white text-gray-700 border border-gray-200 shadow-sm'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Progress Dots */}
            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeProject
                      ? isSplash
                        ? 'bg-green-400 w-8'
                        : 'bg-gray-900 w-8'
                      : isSplash
                        ? 'bg-gray-600 w-2 hover:bg-gray-500'
                        : 'bg-gray-300 w-2 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextProject}
              className={`p-3 rounded-full transition-all ${
                isSplash
                  ? 'bg-black/60 text-green-400 border border-green-500/30'
                  : 'bg-white text-gray-700 border border-gray-200 shadow-sm'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Project Thumbnails */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {projects.map((project, index) => (
              <motion.button
                key={project.id}
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => goToProject(index)}
                className={`relative p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 overflow-hidden ${
                  index === activeProject
                    ? isSplash
                      ? 'bg-green-500/20 border-2 border-green-500/50 shadow-lg shadow-green-500/10'
                      : 'bg-gray-900 text-white shadow-lg'
                    : isSplash
                      ? 'bg-black/40 border border-green-500/10 hover:border-green-500/30'
                      : 'bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md'
                }`}
              >
                {/* Active Indicator Line */}
                {index === activeProject && (
                  <motion.div
                    layoutId="activeProjectIndicator"
                    className={`absolute top-0 left-0 right-0 h-1 ${
                      isSplash ? 'bg-green-400' : 'bg-white'
                    }`}
                  />
                )}

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <Layers
                      className={`w-4 h-4 ${
                        index === activeProject
                          ? isSplash
                            ? 'text-green-400'
                            : 'text-gray-300'
                          : isSplash
                            ? 'text-gray-500'
                            : 'text-gray-400'
                      }`}
                    />
                    <span
                      className={`text-xs font-medium ${
                        index === activeProject
                          ? isSplash
                            ? 'text-green-400'
                            : 'text-gray-300'
                          : isSplash
                            ? 'text-gray-500'
                            : 'text-gray-400'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h4
                    className={`font-semibold text-sm mb-1 ${
                      index === activeProject
                        ? isSplash
                          ? 'text-white'
                          : 'text-white'
                        : isSplash
                          ? 'text-gray-300'
                          : 'text-gray-900'
                    }`}
                  >
                    {project.title}
                  </h4>
                  <p
                    className={`text-xs line-clamp-1 ${
                      index === activeProject
                        ? isSplash
                          ? 'text-green-300/70'
                          : 'text-gray-400'
                        : isSplash
                          ? 'text-gray-500'
                          : 'text-gray-500'
                    }`}
                  >
                    {project.subtitle}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
