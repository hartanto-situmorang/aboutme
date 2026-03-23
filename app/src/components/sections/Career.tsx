import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar, Building2 } from 'lucide-react';
import { education } from '@/data/portfolio';
import { useLanguage } from '@/contexts/LanguageContext';

interface CareerProps {
  mode: 'splash' | 'simple';
}

export function Career({ mode }: CareerProps) {
  const isSplash = mode === 'splash';
  const { t } = useLanguage();

  // Get translated leadership items
  const getLeadershipItems = () => {
    const items: string[] = [];
    for (let i = 0; i < 4; i++) {
      const item = t(`career.leadership.items.${i}`);
      if (item && !item.includes('career.leadership')) {
        items.push(item);
      }
    }
    return items.length > 0 ? items : [
      'Member of Student Executive Board (BEM) 2022 - Social and community service program planning',
      'Learning X Program by LG Group - Collaborative project development',
      'ITSA Caltex Riau (Documentation Division) 2022 - Training documentation and reporting',
      'ISO 2022 Committee - New student training program coordination',
    ];
  };

  // Get translated timeline events
  const getTimelineEvents = () => {
    return [
      {
        id: 'event-1',
        year: '2022',
        title: t('career.timeline.0.title'),
        description: t('career.timeline.0.description'),
        company: 'CV Baja Diva Manufaktur',
        skills: ['Laravel', 'PHP', 'MySQL', 'JavaScript'],
      },
      {
        id: 'event-2',
        year: '2023',
        title: t('career.timeline.1.title'),
        description: t('career.timeline.1.description'),
        company: 'BNSP',
        skills: ['Certified Professional', 'OOP', 'System Architecture', 'Database Design', 'API Development'],
      },
      {
        id: 'event-3',
        year: '2023',
        title: t('career.timeline.2.title'),
        description: t('career.timeline.2.description'),
        company: 'PT Putera Wibowo Borneo',
        skills: ['React', 'Node.js', 'Laravel', 'Three.js', 'API', 'SPA', 'Database', 'AI'],
      },
      {
        id: 'event-4',
        year: '2024',
        title: t('career.timeline.3.title'),
        description: t('career.timeline.3.description'),
        company: 'PT Putera Wibowo Borneo && PT. Argih Multi Teknologi',
        skills: ['PWA Development', 'VPS', 'ERP', 'API', 'IOT', 'Database', 'AI'],
      },
    ];
  };

  const leadership = getLeadershipItems();
  const timelineEvents = getTimelineEvents();

  return (
    <section
      id="career"
      className={`relative py-20 sm:py-32 ${isSplash ? '' : 'bg-white'
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
            <Briefcase
              className={`w-6 h-6 ${isSplash ? 'text-green-400' : 'text-gray-600'
                }`}
            />
            <span
              className={`text-sm font-medium uppercase tracking-wider ${isSplash ? 'text-green-400' : 'text-gray-500'
                }`}
            >
              {t('career.title')}
            </span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-bold ${isSplash ? 'text-white' : 'text-gray-900'
              }`}
          >
            {t('career.subtitle')}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div
              className={`p-6 rounded-2xl h-full ${isSplash
                ? 'bg-black/60 backdrop-blur-sm border border-green-500/20'
                : 'bg-gray-50 border border-gray-200'
                }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`p-3 rounded-xl ${isSplash ? 'bg-green-500/20' : 'bg-white'
                    }`}
                >
                  <GraduationCap
                    className={`w-6 h-6 ${isSplash ? 'text-green-400' : 'text-gray-600'
                      }`}
                  />
                </div>
                <h3
                  className={`text-xl font-semibold ${isSplash ? 'text-white' : 'text-gray-900'
                    }`}
                >
                  {t('about.education.title')}
                </h3>
              </div>

              <div className="space-y-4">
                <div
                  className={`p-4 rounded-xl ${isSplash
                    ? 'bg-black/40 border border-green-500/10'
                    : 'bg-white border border-gray-200'
                    }`}
                >
                  <h4
                    className={`font-semibold mb-1 ${isSplash ? 'text-white' : 'text-gray-900'
                      }`}
                  >
                    {t('about.education.degree')}
                  </h4>
                  <p
                    className={`text-sm ${isSplash ? 'text-gray-400' : 'text-gray-500'
                      }`}
                  >
                    {t('about.education.institution')}
                  </p>
                  <div
                    className={`inline-flex items-center gap-1 mt-2 text-sm ${isSplash ? 'text-green-400' : 'text-gray-600'
                      }`}
                  >
                    <span className="font-medium">{t('about.education.gpa')}: {education.gpa}</span>
                  </div>
                </div>
              </div>

              {/* Leadership Experience */}
              <div className="mt-8">
                <h4
                  className={`text-sm font-medium uppercase tracking-wider mb-4 ${isSplash ? 'text-green-400' : 'text-gray-500'
                    }`}
                >
                  {t('career.leadership.title')}
                </h4>
                <div className="space-y-3">
                  {leadership.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className={`flex gap-3 text-sm ${isSplash ? 'text-gray-300' : 'text-gray-600'
                        }`}
                    >
                      <span
                        className={`flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2 ${isSplash ? 'bg-green-400' : 'bg-gray-400'
                          }`}
                      />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Timeline Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div
              className={`p-6 rounded-2xl ${isSplash
                ? 'bg-black/60 backdrop-blur-sm border border-green-500/20'
                : 'bg-gray-50 border border-gray-200'
                }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`p-3 rounded-xl ${isSplash ? 'bg-green-500/20' : 'bg-white'
                    }`}
                >
                  <Building2
                    className={`w-6 h-6 ${isSplash ? 'text-green-400' : 'text-gray-600'
                      }`}
                  />
                </div>
                <h3
                  className={`text-xl font-semibold ${isSplash ? 'text-white' : 'text-gray-900'
                    }`}
                >
                  {t('career.workExperience')}
                </h3>
              </div>

              <div className="relative">
                {/* Timeline Line */}
                <div
                  className={`absolute left-4 top-0 bottom-0 w-px ${isSplash ? 'bg-green-500/30' : 'bg-gray-300'
                    }`}
                />

                {/* Timeline Events */}
                <div className="space-y-6">
                  {timelineEvents.map((event, index) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative pl-12"
                    >
                      {/* Timeline Dot */}
                      <div
                        className={`absolute left-2 top-2 w-5 h-5 rounded-full border-2 ${isSplash
                          ? 'bg-black border-green-400'
                          : 'bg-white border-gray-400'
                          }`}
                      >
                        <div
                          className={`absolute inset-1 rounded-full ${isSplash ? 'bg-green-400' : 'bg-gray-400'
                            }`}
                        />
                      </div>

                      {/* Content Card */}
                      <div
                        className={`p-4 rounded-xl ${isSplash
                          ? 'bg-black/40 border border-green-500/10'
                          : 'bg-white border border-gray-200'
                          }`}
                      >
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span
                            className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${isSplash
                              ? 'bg-green-500/20 text-green-400'
                              : 'bg-gray-100 text-gray-600'
                              }`}
                          >
                            <Calendar className="w-3 h-3" />
                            {event.year}
                          </span>
                          <span
                            className={`text-sm ${isSplash ? 'text-gray-400' : 'text-gray-500'
                              }`}
                          >
                            {event.company}
                          </span>
                        </div>

                        <h4
                          className={`font-semibold mb-2 ${isSplash ? 'text-white' : 'text-gray-900'
                            }`}
                        >
                          {event.title}
                        </h4>

                        <p
                          className={`text-sm mb-3 ${isSplash ? 'text-gray-300' : 'text-gray-600'
                            }`}
                        >
                          {event.description}
                        </p>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2">
                          {event.skills.map((skill) => (
                            <span
                              key={skill}
                              className={`px-2 py-1 rounded text-xs ${isSplash
                                ? 'bg-green-500/10 text-green-300 border border-green-500/20'
                                : 'bg-gray-100 text-gray-600'
                                }`}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
