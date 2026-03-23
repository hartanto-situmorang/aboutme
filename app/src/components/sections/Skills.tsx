import { motion } from 'framer-motion';
import {
  Wrench,
  Code,
  Database,
  Layout,
  Server,
  GitBranch,
  Layers,
  Cpu,
} from 'lucide-react';
import { skills } from '@/data/portfolio';
import { useLanguage } from '@/contexts/LanguageContext';

interface SkillsProps {
  mode: 'splash' | 'simple';
}

const iconMap: Record<string, React.ElementType> = {
  'Architecture & System Design': Layers,
  'Programming': Code,
  'Frameworks': Cpu,
  'Frontend': Layout,
  'Backend & API': Server,
  'Database': Database,
  'Tools & Collaboration': GitBranch,
};

// Category translation mapping
const categoryTranslationMap: Record<string, string> = {
  'Architecture & System Design': 'skills.architecture',
  'Programming': 'skills.programming',
  'Frameworks': 'skills.frameworks',
  'Frontend': 'skills.frontend',
  'Backend & API': 'skills.backend',
  'Database': 'skills.database',
  'Tools & Collaboration': 'skills.tools',
};

export function Skills({ mode }: SkillsProps) {
  const isSplash = mode === 'splash';
  const { t } = useLanguage();

  return (
    <section
      id="skills"
      className={`relative py-20 sm:py-32 ${
        isSplash ? '' : 'bg-white'
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
            <Wrench
              className={`w-6 h-6 ${
                isSplash ? 'text-green-400' : 'text-gray-600'
              }`}
            />
            <span
              className={`text-sm font-medium uppercase tracking-wider ${
                isSplash ? 'text-green-400' : 'text-gray-500'
              }`}
            >
              {t('skills.title')}
            </span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-bold ${
              isSplash ? 'text-white' : 'text-gray-900'
            }`}
          >
            {t('skills.subtitle')}
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => {
            const Icon = iconMap[skillGroup.category] || Wrench;
            const translatedCategory = t(categoryTranslationMap[skillGroup.category] || '') || skillGroup.category;

            return (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className={`p-6 rounded-2xl transition-all ${
                  isSplash
                    ? 'bg-black/60 backdrop-blur-sm border border-green-500/20 hover:border-green-500/40'
                    : 'bg-gray-50 border border-gray-200 hover:shadow-lg'
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-2.5 rounded-xl ${
                      isSplash ? 'bg-green-500/20' : 'bg-white'
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${
                        isSplash ? 'text-green-400' : 'text-gray-600'
                      }`}
                    />
                  </div>
                  <h3
                    className={`font-semibold ${
                      isSplash ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {translatedCategory}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{ scale: 1.05 }}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                        isSplash
                          ? 'bg-green-500/10 text-green-300 border border-green-500/20 hover:bg-green-500/20'
                          : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Skill Level Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`mt-12 p-6 rounded-2xl ${
            isSplash
              ? 'bg-black/40 border border-green-500/10'
              : 'bg-gray-50 border border-gray-200'
          }`}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h4
                className={`font-semibold mb-1 ${
                  isSplash ? 'text-white' : 'text-gray-900'
                }`}
              >
                {t('skills.alwaysLearning')}
              </h4>
              <p
                className={`text-sm ${
                  isSplash ? 'text-gray-400' : 'text-gray-500'
                }`}
              >
                {t('skills.learningDesc')}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <p
                  className={`text-2xl font-bold ${
                    isSplash ? 'text-green-400' : 'text-gray-900'
                  }`}
                >
                  2+
                </p>
                <p
                  className={`text-xs ${
                    isSplash ? 'text-gray-500' : 'text-gray-400'
                  }`}
                >
                  {t('skills.yearsExperience')}
                </p>
              </div>
              <div
                className={`w-px h-10 ${
                  isSplash ? 'bg-green-500/30' : 'bg-gray-300'
                }`}
              />
              <div className="text-center">
                <p
                  className={`text-2xl font-bold ${
                    isSplash ? 'text-green-400' : 'text-gray-900'
                  }`}
                >
                  10+
                </p>
                <p
                  className={`text-xs ${
                    isSplash ? 'text-gray-500' : 'text-gray-400'
                  }`}
                >
                  {t('skills.technologies')}
                </p>
              </div>
              <div
                className={`w-px h-10 ${
                  isSplash ? 'bg-green-500/30' : 'bg-gray-300'
                }`}
              />
              <div className="text-center">
                <p
                  className={`text-2xl font-bold ${
                    isSplash ? 'text-green-400' : 'text-gray-900'
                  }`}
                >
                  4+
                </p>
                <p
                  className={`text-xs ${
                    isSplash ? 'text-gray-500' : 'text-gray-400'
                  }`}
                >
                  {t('skills.majorProjects')}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
