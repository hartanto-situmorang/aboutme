import { motion } from 'framer-motion';
import {
  Briefcase,
  Code2,
  Globe,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  TrendingUp,
  Users,
  Clock,
  Award
} from 'lucide-react';
import { projects, personalInfo, skills, education, certifications } from '@/data/portfolio';
import { PixelBlastBackground, SplashCursor } from '@/components/backgrounds';
import { TrueFocus } from '@/components/animations';

export function RecruiterMode() {
  return (
    <div className="relative min-h-screen">
      <PixelBlastBackground />
      <SplashCursor
        SIM_RESOLUTION={120}
        DYE_RESOLUTION={200}
        SPLAT_RADIUS={0.15}
        SPLAT_FORCE={5000}
        COLOR_UPDATE_SPEED={8}
      />
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center"
            >
              <span className="text-4xl font-bold text-white">HS</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              <TrueFocus
                words={['HARTANTO', 'SITUMORANG']}
                interval={2000}
                pauseDuration={1500}
              />
            </h1>
            <p className="text-2xl md:text-3xl text-blue-300 mb-8">
              Full Stack Developer
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-5 h-5" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="w-5 h-5" />
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-5 h-5" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Globe className="w-5 h-5" />
                <span>{personalInfo.website}</span>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-4"
            >
              {personalInfo.summary}
            </motion.p>
          </motion.div>
        </section>

        {/* Key Metrics */}
        <section className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {[
                { icon: Users, value: '100+', label: 'Users Supported' },
                { icon: TrendingUp, value: '50%', label: 'Process Improvement' },
                { icon: Briefcase, value: '5', label: 'Locations Managed' },
                { icon: Clock, value: '3+', label: 'Years Experience' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-md rounded-xl p-6 text-center border border-white/10"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-400" />
                  <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects */}
        <section className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-12 text-center"
            >
              Featured Projects
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="group bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-blue-300 text-sm">{project.subtitle}</p>
                      </div>
                      <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-blue-400 transition-colors" />
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {project.metrics && (
                      <div className="mb-4 p-3 bg-blue-500/10 rounded-lg">
                        <p className="text-blue-300 text-sm font-medium">{project.metrics}</p>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-12 text-center"
            >
              Technical Skills
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10"
                >
                  <h3 className="text-lg font-semibold text-blue-300 mb-4">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-white/10 rounded-lg text-sm text-gray-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Award className="w-6 h-6 text-blue-400" />
                  Education
                </h3>
                <div>
                  <p className="text-lg text-white font-medium">{education.degree}</p>
                  <p className="text-blue-300">{education.institution}</p>
                  <p className="text-gray-400 mt-2">GPA: {education.gpa}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Code2 className="w-6 h-6 text-green-400" />
                  Certification
                </h3>
                {certifications.map((cert) => (
                  <div key={cert.certificateNo}>
                    <p className="text-lg text-white font-medium">{cert.name}</p>
                    <p className="text-gray-400 text-sm">{cert.organization}</p>
                    <p className="text-gray-500 text-xs mt-1">Valid: {cert.valid}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-8 border-t border-white/10 bg-white">
          <div className="max-w-6xl mx-auto text-center bg-white">
            <p className="text-gray-400">
              © 2026 {personalInfo.name}. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
