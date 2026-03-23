import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Github,
  Linkedin,
  Twitter,
  Send,
  MessageCircle,
} from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import { useLanguage } from '@/contexts/LanguageContext';

interface ContactProps {
  mode: 'splash' | 'simple';
}

export function Contact({ mode }: ContactProps) {
  const isSplash = mode === 'splash';
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      label: t('contact.phone'),
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: MapPin,
      label: t('contact.location'),
      value: personalInfo.location,
      href: '#',
    },
    {
      icon: Globe,
      label: t('contact.website'),
      value: personalInfo.website,
      href: `https://${personalInfo.website}`,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: t('contact.github'),
      href: '#',
      color: isSplash ? 'hover:text-white' : 'hover:text-gray-900',
    },
    {
      icon: Linkedin,
      label: t('contact.linkedin'),
      href: '#',
      color: isSplash ? 'hover:text-blue-400' : 'hover:text-blue-600',
    },
    {
      icon: Twitter,
      label: t('contact.twitter'),
      href: '#',
      color: isSplash ? 'hover:text-sky-400' : 'hover:text-sky-500',
    },
  ];

  return (
    <section
      id="contact"
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
            <MessageCircle
              className={`w-6 h-6 ${
                isSplash ? 'text-green-400' : 'text-gray-600'
              }`}
            />
            <span
              className={`text-sm font-medium uppercase tracking-wider ${
                isSplash ? 'text-green-400' : 'text-gray-500'
              }`}
            >
              {t('contact.title')}
            </span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-bold ${
              isSplash ? 'text-white' : 'text-gray-900'
            }`}
          >
            {t('contact.subtitle')}
          </h2>
          <p
            className={`mt-4 max-w-2xl mx-auto ${
              isSplash ? 'text-gray-400' : 'text-gray-500'
            }`}
          >
            {t('contact.description')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div
              className={`p-6 rounded-2xl ${
                isSplash
                  ? 'bg-black/60 backdrop-blur-sm border border-green-500/20'
                  : 'bg-white border border-gray-200 shadow-sm'
              }`}
            >
              <h3
                className={`text-xl font-semibold mb-6 ${
                  isSplash ? 'text-white' : 'text-gray-900'
                }`}
              >
                {t('contact.heading')}
              </h3>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 4 }}
                    className={`flex items-center gap-4 p-4 rounded-xl transition-colors ${
                      isSplash
                        ? 'bg-black/40 border border-green-500/10 hover:border-green-500/30'
                        : 'bg-gray-50 border border-gray-100 hover:border-gray-200'
                    }`}
                  >
                    <div
                      className={`p-3 rounded-lg ${
                        isSplash ? 'bg-green-500/20' : 'bg-white'
                      }`}
                    >
                      <item.icon
                        className={`w-5 h-5 ${
                          isSplash ? 'text-green-400' : 'text-gray-600'
                        }`}
                      />
                    </div>
                    <div>
                      <p
                        className={`text-sm ${
                          isSplash ? 'text-gray-500' : 'text-gray-400'
                        }`}
                      >
                        {item.label}
                      </p>
                      <p
                        className={`font-medium ${
                          isSplash ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div
              className={`p-6 rounded-2xl ${
                isSplash
                  ? 'bg-black/60 backdrop-blur-sm border border-green-500/20'
                  : 'bg-white border border-gray-200 shadow-sm'
              }`}
            >
              <h4
                className={`text-sm font-medium uppercase tracking-wider mb-4 ${
                  isSplash ? 'text-gray-400' : 'text-gray-500'
                }`}
              >
                {t('contact.followMe')}
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-xl transition-all ${
                      isSplash
                        ? 'bg-black/40 border border-green-500/10 text-gray-400 hover:border-green-500/30'
                        : 'bg-gray-50 border border-gray-200 text-gray-600 hover:border-gray-300'
                    } ${social.color}`}
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div
              className={`p-6 sm:p-8 rounded-2xl h-full ${
                isSplash
                  ? 'bg-black/60 backdrop-blur-sm border border-green-500/20'
                  : 'bg-white border border-gray-200 shadow-sm'
              }`}
            >
              <h3
                className={`text-xl font-semibold mb-6 ${
                  isSplash ? 'text-white' : 'text-gray-900'
                }`}
              >
                {t('contact.sendMessage')}
              </h3>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className={`block text-sm font-medium mb-2 ${
                        isSplash ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      {t('contact.form.name')}
                    </label>
                    <input
                      type="text"
                      placeholder={t('contact.form.name') as string}
                      className={`w-full px-4 py-3 rounded-xl border outline-none transition-all ${
                        isSplash
                          ? 'bg-black/40 border-green-500/20 text-white placeholder-gray-500 focus:border-green-500/50'
                          : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-gray-400'
                      }`}
                    />
                  </div>
                  <div>
                    <label
                      className={`block text-sm font-medium mb-2 ${
                        isSplash ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      {t('contact.form.email')}
                    </label>
                    <input
                      type="email"
                      placeholder={t('contact.form.emailPlaceholder') as string}
                      className={`w-full px-4 py-3 rounded-xl border outline-none transition-all ${
                        isSplash
                          ? 'bg-black/40 border-green-500/20 text-white placeholder-gray-500 focus:border-green-500/50'
                          : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-gray-400'
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      isSplash ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    {t('contact.subject')}
                  </label>
                  <input
                    type="text"
                    placeholder={t('contact.subjectPlaceholder') as string}
                    className={`w-full px-4 py-3 rounded-xl border outline-none transition-all ${
                      isSplash
                        ? 'bg-black/40 border-green-500/20 text-white placeholder-gray-500 focus:border-green-500/50'
                        : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-gray-400'
                    }`}
                  />
                </div>

                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      isSplash ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    rows={4}
                    placeholder={t('contact.messagePlaceholder') as string}
                    className={`w-full px-4 py-3 rounded-xl border outline-none transition-all resize-none ${
                      isSplash
                        ? 'bg-black/40 border-green-500/20 text-white placeholder-gray-500 focus:border-green-500/50'
                        : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-gray-400'
                    }`}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                    isSplash
                      ? 'bg-green-500 text-black hover:bg-green-400'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  <Send className="w-4 h-4" />
                  {t('contact.form.send')}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mt-16 pt-8 text-center ${
            isSplash ? 'border-t border-green-500/20' : 'border-t border-gray-200'
          }`}
        >
          <p
            className={`text-sm ${
              isSplash ? 'text-gray-500' : 'text-gray-400'
            }`}
          >
            © {new Date().getFullYear()} {personalInfo.name}. {t('footer.rights')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
