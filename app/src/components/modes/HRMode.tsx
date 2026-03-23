import { motion } from 'framer-motion';
import { 
  Play, 
  Calendar, 
  MapPin, 
  Award,
  Users,
  Heart,
  Lightbulb,
  MessageCircle,
  Target,
  Clock
} from 'lucide-react';
import { useState } from 'react';
import { timelineEvents, personalInfo, leadership, education } from '@/data/portfolio';
import type { TimelineEvent } from '@/types';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { PixelBlastBackground } from '@/components/backgrounds';
import { BlurText } from '@/components/animations';

const softSkills = [
  { name: 'Leadership', icon: Users, description: 'Experience leading teams and managing projects' },
  { name: 'Communication', icon: MessageCircle, description: 'Clear technical and non-technical communication' },
  { name: 'Problem Solving', icon: Lightbulb, description: 'Analytical thinking and creative solutions' },
  { name: 'Adaptability', icon: Target, description: 'Quick learner, flexible to new technologies' },
  { name: 'Teamwork', icon: Heart, description: 'Collaborative and supportive team member' },
  { name: 'Time Management', icon: Clock, description: 'Efficient prioritization and deadline management' }
];

function EventModal({ 
  event, 
  isOpen, 
  onClose 
}: { 
  event: TimelineEvent | null; 
  isOpen: boolean; 
  onClose: () => void;
}) {
  if (!event) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-gray-900 border border-white/20 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">
            {event.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="mt-4">
          {/* Media Placeholder */}
          <div className="relative w-full h-48 bg-gradient-to-br from-cyan-900/50 to-purple-900/50 rounded-xl mb-6 flex items-center justify-center">
            {event.video ? (
              <div className="flex flex-col items-center text-gray-500">
                <Play className="w-12 h-12 mb-2" />
                <span className="text-sm">Video Demo Available</span>
              </div>
            ) : event.image ? (
              <img 
                src={event.image} 
                alt={event.title}
                className="w-full h-full object-cover rounded-xl"
              />
            ) : (
              <div className="flex flex-col items-center text-gray-400">
                <Calendar className="w-12 h-12 mb-2" />
                <span className="text-sm">Project Documentation</span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {event.year}
            </span>
            {event.company && (
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {event.company}
              </span>
            )}
          </div>

          <p className="text-gray-300 mb-6 leading-relaxed">
            {event.description}
          </p>

          {event.projects.length > 0 && (
            <div className="mb-6">
              <h4 className="font-semibold text-white mb-3">Projects</h4>
              <div className="space-y-3">
                {event.projects.map((project) => (
                  <div 
                    key={project.id}
                    className="p-4 bg-white/10 rounded-lg"
                  >
                    <h5 className="font-medium text-white">{project.title}</h5>
                    <p className="text-sm text-gray-300 mt-1">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <h4 className="font-semibold text-white mb-3">Skills Developed</h4>
            <div className="flex flex-wrap gap-2">
              {event.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function HRMode() {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEventClick = (event: TimelineEvent) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  return (
    <div className="relative min-h-screen">
      <PixelBlastBackground />
      {/* Header */}
      <header className="py-12 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center shadow-lg">
              <span className="text-3xl font-bold text-white">HS</span>
            </div>
            <h1 className="text-4xl font-bold text-white mb-2">
              <BlurText delay={0.3} duration={1} blurAmount={15}>
                {personalInfo.name}
              </BlurText>
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              Full Stack Developer
            </p>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {personalInfo.summary}
            </p>
          </motion.div>
        </div>
      </header>

      {/* Soft Skills */}
      <section className="py-12 px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8 text-center"
          >
            Soft Skills
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/10 hover:border-white/30 transition-all"
              >
                <skill.icon className="w-8 h-8 text-blue-500 mb-3" />
                <h3 className="font-semibold text-white mb-1">{skill.name}</h3>
                <p className="text-sm text-gray-400">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8 text-center"
          >
            Professional Journey
          </motion.h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 md:-translate-x-1/2" />
            
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`relative flex items-start mb-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow md:-translate-x-1/2 z-10" />
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'
                }`}>
                  <button
                    onClick={() => handleEventClick(event)}
                    className="w-full text-left bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/10 hover:border-white/30 transition-all group"
                  >
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-2">
                      {event.year}
                    </span>
                    <h3 className="font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {event.title}
                    </h3>
                    {event.company && (
                      <p className="text-sm text-gray-400 mt-1">{event.company}</p>
                    )}
                    <p className="text-sm text-gray-300 mt-2 line-clamp-2">
                      {event.description}
                    </p>
                    <div className="mt-3 flex items-center gap-2 text-cyan-400 text-sm">
                      <span>View Details</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-12 px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-white">{education.degree}</h3>
                <p className="text-gray-300">{education.institution}</p>
                <p className="text-sm text-gray-400 mt-1">GPA: {education.gpa}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-12 px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-6 text-center"
          >
            Leadership & Activities
          </motion.h2>
          
          <div className="space-y-4">
            {leadership.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/10"
              >
                <Users className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/80 to-purple-500/80 backdrop-blur-md rounded-xl p-8 text-center text-white border border-white/20"
          >
            <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
            <p className="mb-6 opacity-90">
              Interested in discussing opportunities or collaborations?
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 bg-white/20 rounded-lg">{personalInfo.email}</span>
              <span className="px-4 py-2 bg-white/20 rounded-lg">{personalInfo.phone}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8">
        <div className="max-w-4xl mx-auto text-center text-gray-400 text-sm">
          <p>© 2024 {personalInfo.name}. All rights reserved.</p>
        </div>
      </footer>

      {/* Modal */}
      <EventModal
        event={selectedEvent}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
