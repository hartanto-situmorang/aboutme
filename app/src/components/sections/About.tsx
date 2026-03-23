import { motion } from 'framer-motion';
import { User, Target, Lightbulb, Award } from 'lucide-react';
import { education } from '@/data/portfolio';
import { useLanguage } from '@/contexts/LanguageContext';

interface AboutProps {
  mode: 'splash' | 'simple';
}

export function About({ mode }: AboutProps) {
  const isSplash = mode === 'splash';
  const { t } = useLanguage();

  const highlights = [
    {
      icon: Target,
      title: t('about.highlight.problemSolver.title'),
      description: t('about.highlight.problemSolver.desc'),
    },
    {
      icon: Lightbulb,
      title: t('about.highlight.innovation.title'),
      description: t('about.highlight.innovation.desc'),
    },
    {
      icon: Award,
      title: t('about.highlight.bnsp.title'),
      description: t('about.highlight.bnsp.desc'),
    },
  ];

  return (
    <section
      id="about"
      className={`relative py-20 sm:py-32 ${
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
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <User
              className={`w-6 h-6 ${
                isSplash ? 'text-green-400' : 'text-gray-600'
              }`}
            />
            <span
              className={`text-sm font-medium uppercase tracking-wider ${
                isSplash ? 'text-green-400' : 'text-gray-500'
              }`}
            >
              {t('about.title')}
            </span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-bold ${
              isSplash ? 'text-white' : 'text-gray-900'
            }`}
          >
            {t('about.subtitle')}
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div
              className={`p-6 sm:p-8 rounded-2xl ${
                isSplash
                  ? 'bg-black/60 backdrop-blur-sm border border-green-500/20'
                  : 'bg-white border border-gray-200 shadow-sm'
              }`}
            >
              <h3
                className={`text-xl font-semibold mb-4 ${
                  isSplash ? 'text-white' : 'text-gray-900'
                }`}
              >
                {t('about.summary.title')}
              </h3>
              <p
                className={`text-base leading-relaxed ${
                  isSplash ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                {t('about.summary.content')}
              </p>
            </div>

            {/* Education & Certifications */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div
                className={`p-5 rounded-xl ${
                  isSplash
                    ? 'bg-black/40 border border-green-500/10'
                    : 'bg-white border border-gray-200'
                }`}
              >
                <h4
                  className={`text-sm font-medium uppercase tracking-wider mb-2 ${
                    isSplash ? 'text-green-400' : 'text-gray-500'
                  }`}
                >
                  {t('about.education.title')}
                </h4>
                <p
                  className={`font-semibold ${
                    isSplash ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {t('about.education.degree')}
                </p>
                <p
                  className={`text-sm ${
                    isSplash ? 'text-gray-400' : 'text-gray-500'
                  }`}
                >
                  {t('about.education.institution')}
                </p>
                <p
                  className={`text-sm mt-1 ${
                    isSplash ? 'text-green-400' : 'text-gray-600'
                  }`}
                >
                  {t('about.education.gpa')}: {education.gpa}
                </p>
              </div>

              <div
                className={`p-5 rounded-xl ${
                  isSplash
                    ? 'bg-black/40 border border-green-500/10'
                    : 'bg-white border border-gray-200'
                }`}
              >
                <h4
                  className={`text-sm font-medium uppercase tracking-wider mb-2 ${
                    isSplash ? 'text-green-400' : 'text-gray-500'
                  }`}
                >
                  {t('about.certification.title')}
                </h4>
                <p
                  className={`font-semibold ${
                    isSplash ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {t('about.certification.name')}
                </p>
                <p
                  className={`text-sm ${
                    isSplash ? 'text-gray-400' : 'text-gray-500'
                  }`}
                >
                  {t('about.certification.organization')}
                </p>
                <p
                  className={`text-xs mt-1 ${
                    isSplash ? 'text-gray-500' : 'text-gray-400'
                  }`}
                >
                  {t('about.certification.valid')}: 2024 - 2027
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: isSplash ? 4 : 0 }}
                className={`flex gap-4 p-5 rounded-xl transition-all ${
                  isSplash
                    ? 'bg-black/40 border border-green-500/10 hover:border-green-500/30'
                    : 'bg-white border border-gray-200 hover:shadow-md'
                }`}
              >
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                    isSplash ? 'bg-green-500/20' : 'bg-gray-100'
                  }`}
                >
                  <item.icon
                    className={`w-6 h-6 ${
                      isSplash ? 'text-green-400' : 'text-gray-600'
                    }`}
                  />
                </div>
                <div>
                  <h4
                    className={`font-semibold mb-1 ${
                      isSplash ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {item.title}
                  </h4>
                  <p
                    className={`text-sm ${
                      isSplash ? 'text-gray-400' : 'text-gray-500'
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
