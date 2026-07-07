import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import { useTypewriter } from '../hooks/useTypewriter';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeader from '../components/SectionHeader';
import Avatar3D from '../components/Avatar3D';

const heroVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const heroItemVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: '{ }',
    color: 'from-blue-500 to-blue-700',
    skills: ['Java', 'Python', 'Swift', 'C', 'JavaScript', 'TypeScript', 'R'],
  },
  {
    title: 'Web & Frontend',
    icon: '◈',
    color: 'from-violet-500 to-violet-700',
    skills: ['React', 'Angular', 'HTML/CSS', 'TypeScript', 'Responsive Design'],
  },
  {
    title: 'Backend & DevOps',
    icon: '⬡',
    color: 'from-indigo-500 to-indigo-700',
    skills: ['Spring Boot', 'GCP', 'Flask', 'REST APIs', 'SQL', 'Docker'],
  },
  {
    title: 'Tools & Methods',
    icon: '◎',
    color: 'from-blue-400 to-violet-600',
    skills: ['Git', 'Figma', 'Agile/Scrum', 'MkDocs', 'Xcode', 'AR/iOS'],
  },
];


export default function Home() {
  const { text } = useTypewriter({
    texts: ['Full-Stack Developer', 'iOS & AR Developer', 'CS Graduate at TUM', 'Problem Solver'],
  });

  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div variants={heroVariants} initial="hidden" animate="visible">
            <motion.p
              variants={heroItemVariant}
              className="text-blue-600 dark:text-blue-400 font-semibold mb-3 tracking-wide text-sm uppercase"
            >
              Welcome to my portfolio
            </motion.p>
            <motion.h1
              variants={heroItemVariant}
              className="text-5xl md:text-6xl font-bold mb-5 leading-tight"
            >
              Hi, I'm{' '}
              <span className="gradient-text">Ishani Budhwar</span>
            </motion.h1>

            <motion.div variants={heroItemVariant} className="h-8 mb-5">
              <span className="text-xl text-slate-600 dark:text-slate-400 font-medium">
                {text}
                <span className="animate-blink text-blue-600 dark:text-blue-400 ml-0.5">|</span>
              </span>
            </motion.div>

            <motion.p
              variants={heroItemVariant}
              className="text-base text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-lg"
            >
              Bachelor of Science in Informatics at TUM, focused on integrating technical expertise with human-centered design. Experienced in full-stack development, iOS/AR applications, and cloud-native systems.
            </motion.p>

            <motion.div variants={heroItemVariant} className="flex gap-4 flex-wrap">
              <Link
                to="/projects"
                className="px-7 py-3 bg-gradient-to-r from-blue-600 to-violet-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all hover:-translate-y-0.5"
              >
                View My Work
              </Link>
              <Link
                to="/contact"
                className="px-7 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-semibold rounded-xl hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors"
              >
                Get in Touch
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div variants={heroItemVariant} className="flex gap-8 mt-12 flex-wrap">
              <div>
                <p className="text-3xl font-bold gradient-text">3+</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">Years Experience</p>
              </div>
              <div className="w-px bg-slate-200 dark:bg-slate-700" />
              <div>
                <p className="text-3xl font-bold gradient-text">4</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">Projects & Internships</p>
              </div>
              <div className="w-px bg-slate-200 dark:bg-slate-700" />
              <div>
                <p className="text-3xl font-bold gradient-text">5+</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">Languages Spoken</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual — floating avatar */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Decorative rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 rounded-full border border-blue-200/40 dark:border-blue-900/40" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-56 h-56 rounded-full border border-violet-200/50 dark:border-violet-900/50" />
            </div>

            <div className="relative w-80 h-96">
              {/* subtle glow behind robot */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/10 to-violet-400/10 dark:from-blue-600/10 dark:to-violet-600/10 blur-2xl" />
              <Avatar3D className="w-full h-full" />
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute bottom-4 -left-4 bg-white dark:bg-slate-800 rounded-xl px-4 py-2 shadow-lg border border-slate-200 dark:border-slate-700 flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <span className="text-green-500 text-lg">●</span>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Open to work</span>
            </motion.div>

            <motion.div
              className="absolute top-4 -right-4 bg-white dark:bg-slate-800 rounded-xl px-4 py-2 shadow-lg border border-slate-200 dark:border-slate-700 flex items-center gap-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              <span className="text-xl">🎓</span>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">TUM Graduate</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 border-t border-slate-200 dark:border-slate-800">
        <SectionHeader
          title="Technical Skills"
          subtitle="Technologies and tools I work with"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <div className="group h-full p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg transition-all">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white text-sm font-bold mb-4 group-hover:scale-110 transition-transform`}>
                  {category.icon}
                </div>
                <h3 className="text-base font-bold mb-4 text-slate-900 dark:text-white">{category.title}</h3>
                <ul className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <motion.li
                      key={skill}
                      className="px-2.5 py-1 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-full text-xs font-medium text-slate-700 dark:text-slate-300 cursor-default"
                      whileHover={{ scale: 1.07 }}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 + sIdx * 0.04 }}
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-slate-200 dark:border-slate-800">
        <AnimatedSection>
          <div className="relative bg-gradient-to-r from-blue-600 to-violet-500 rounded-2xl p-12 md:p-16 text-white text-center overflow-hidden">
            {/* subtle background shapes */}
            <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white/5 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-white/5 translate-x-1/3 translate-y-1/3" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start a Project?</h2>
              <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
                Let's collaborate to build something amazing. I'm always excited to work on new and challenging projects.
              </p>
              <Link
                to="/contact"
                className="inline-block px-8 py-3 bg-white text-blue-600 font-bold rounded-xl hover:shadow-lg hover:shadow-black/20 transition-all hover:-translate-y-0.5"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
