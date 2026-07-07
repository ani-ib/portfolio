import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import profilePhoto from '../assets/profile.png';

const experience = [
  {
    title: 'Product Learning CX Specialist, Working Student',
    company: 'SAP',
    period: '02/2026 – Present',
    description:
      'Focusing on customer experience learning and product education initiatives to enhance user engagement and knowledge across SAP CX products.',
    color: 'bg-blue-500',
    badgeColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  },
  {
    title: 'Software Engineer, Working Student',
    company: 'Siemens AG',
    period: '10/2024 – 03/2025',
    description:
      'Modernized a conference website using MkDocs and developed an advanced content management system to streamline workflows and optimize team productivity.',
    color: 'bg-emerald-500',
    badgeColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
  },
  {
    title: 'iOS Developer, Intern',
    company: 'SIXT',
    period: '04/2024 – 07/2024',
    description:
      'Collaborated with a team of 7 developers in an agile environment to build an AR car rental upselling app using Swift. Integrated AR technology and won the Best Presentation Award for communicating product vision to stakeholders.',
    color: 'bg-orange-500',
    badgeColor: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300',
  },
];

const education = [
  {
    degree: 'Master of Science in Information Systems',
    school: 'Technical University of Munich (TUM)',
    year: '10/2026 – Present',
  },
  {
    degree: 'Bachelor of Science in Informatics',
    school: 'Technical University of Munich (TUM)',
    year: '10/2022 – 10/2025',
  },
];

function AnimatedTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start center', 'end center'] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative">
      {/* Animated timeline line */}
      <div className="absolute left-[9px] top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700" />
      <motion.div
        className="absolute left-[9px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-violet-500 origin-top"
        style={{ scaleY }}
      />

      <div className="space-y-10">
        {experience.map((job, idx) => (
          <motion.div
            key={idx}
            className="relative pl-10"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Dot */}
            <div className="absolute left-0 top-1.5 flex items-center justify-center">
              <div className={`w-5 h-5 rounded-full ${job.color} z-10 relative`} />
              {idx === 0 && (
                <div className={`absolute w-5 h-5 rounded-full ${job.color} animate-ping opacity-40`} />
              )}
            </div>

            <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md transition-all">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                  {job.title}
                </h3>
                <span className="text-xs text-slate-400 dark:text-slate-500 whitespace-nowrap">{job.period}</span>
              </div>
              <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mb-3 ${job.badgeColor}`}>
                {job.company}
              </span>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{job.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <section className="py-12 border-b border-slate-200 dark:border-slate-800">
        <motion.h1
          className="text-5xl font-bold mb-3 text-slate-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          About Me
        </motion.h1>
        <motion.p
          className="text-lg text-slate-500 dark:text-slate-400"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          M.Sc. Information Systems student at TUM (from Oct 2026) · Full-stack developer · CS graduate
        </motion.p>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column - Biography */}
          <div className="md:col-span-2 space-y-12">
            {/* Bio */}
            <AnimatedSection>
              <h2 className="text-2xl font-bold mb-5 text-slate-900 dark:text-white">My Journey</h2>
              <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
                <p>
                  I'm a Bachelor's graduate in Informatics from TUM, with a focus on integrating technical expertise with human-centered design. Starting October 2026, I will be pursuing my Master's in Information Systems at TUM, driven by a growing interest in Project Management and the intersection of technology and business strategy.
                </p>
                <p>
                  I have contributed to real-world projects at companies including SAP, Siemens, and SIXT, building everything from conference management systems to award-winning AR car rental experiences. I believe that great software should be as intuitive to use as it is impressive to build.
                </p>
              </div>
            </AnimatedSection>

            {/* Experience Timeline */}
            <AnimatedSection>
              <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Professional Experience</h2>
              <AnimatedTimeline />
            </AnimatedSection>

            {/* Education */}
            <AnimatedSection>
              <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Education</h2>
              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    className="p-5 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-violet-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
                        TUM
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 dark:text-white">{edu.degree}</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">{edu.school}</p>
                        <p className="text-slate-400 dark:text-slate-500 text-xs mt-1">{edu.year}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Profile Card */}
            <AnimatedSection direction="right">
              <div className="p-6 bg-gradient-to-br from-blue-600/10 to-violet-500/10 dark:from-blue-600/5 dark:to-violet-500/5 rounded-2xl border border-blue-200 dark:border-blue-900 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full ring-4 ring-blue-500/20 overflow-hidden">
                  <img src={profilePhoto} alt="Ishani Budhwar" className="w-full h-full object-cover object-top" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">Ishani Budhwar</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">M.Sc. Information Systems (from Oct 2026)</p>
                <div className="mt-3 flex items-center justify-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-green-600 dark:text-green-400 font-medium">Open to work</span>
                </div>
              </div>
            </AnimatedSection>

            {/* Quick Facts */}
            <AnimatedSection direction="right" delay={0.1}>
              <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
                <h3 className="font-bold text-base mb-4 text-slate-900 dark:text-white">Quick Facts</h3>
                <ul className="space-y-3 text-sm">
                  {[
                    { icon: '📍', text: 'Munich, Germany' },
                    { icon: '🎓', text: 'TUM, M.Sc. Info Systems (Oct 2026)' },
                    { icon: '📋', text: 'Interested in Project Management' },
                    { icon: '🤝', text: 'Open to opportunities' },
                    { icon: '📧', text: 'ishanibudhwar@gmail.com' },
                    { icon: '🌐', text: 'EN · DE · HI · ES · KO' },
                  ].map((fact, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                      <span className="shrink-0">{fact.icon}</span>
                      <span>{fact.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
