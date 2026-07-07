import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

const projects = [
  {
    id: 1,
    title: 'TUMApply: Inclusive Doctoral Application Platform',
    category: 'fullstack',
    description:
      "Bachelor's thesis project developing an inclusive web platform to replace TUM's doctoral application portal. Focus on accessibility, transparency, and improved user experience for both professors and students.",
    technologies: ['Full-Stack Web Development', 'Accessibility', 'UX Design', 'User-Centered Design'],
    icon: '🎓',
    accentFrom: 'from-blue-500',
    accentTo: 'to-violet-500',
    codePreview: ['const platform =', '  new TUMApply({', '    a11y: true,', '    ux: "inclusive"', '  });'],
  },
  {
    id: 2,
    title: 'AR Car Rental Upselling App',
    category: 'frontend',
    description:
      'Built with a team of 7 at SIXT: an Augmented Reality iOS application for car rental upselling. Integrated AR technology for personalized offers and won the Best Presentation Award.',
    technologies: ['Swift', 'AR Technology', 'iOS', 'Agile/Scrum'],
    icon: '📱',
    accentFrom: 'from-orange-400',
    accentTo: 'to-pink-500',
    codePreview: ['import ARKit', 'let scene =', '  ARCarView()', 'scene.showOffers()'],
  },
  {
    id: 3,
    title: 'Siemens Conference Management System',
    category: 'fullstack',
    description:
      'Modernized a Siemens conference website by migrating from Jekyll to MkDocs and built an advanced CMS to streamline event workflows and optimize team productivity.',
    technologies: ['MkDocs', 'Web Design', 'Content Management', 'Workflow Optimization'],
    icon: '🌐',
    accentFrom: 'from-teal-500',
    accentTo: 'to-blue-500',
    codePreview: ['migrate({', '  from: "Jekyll",', '  to: "MkDocs",', '  cms: true', '})'],
  },
  {
    id: 4,
    title: 'DevOps: FaaS with Spring Boot & GCP',
    category: 'backend',
    description:
      'Bachelor seminar project on Function-as-a-Service using Spring Boot and Google Cloud Platform. Demonstrated serverless deployment, cloud automation, and modern backend architecture.',
    technologies: ['Spring Boot', 'GCP', 'Serverless', 'Cloud Automation', 'DevOps'],
    icon: '☁️',
    accentFrom: 'from-indigo-500',
    accentTo: 'to-blue-600',
    codePreview: ['@FunctionBean', 'fun deploy(ctx) {', '  gcp.run(fn)', '  monitor()'],
  },
];

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'frontend', name: 'Frontend' },
  { id: 'backend', name: 'Backend' },
  { id: 'fullstack', name: 'Full Stack' },
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <section className="py-12 border-b border-slate-200 dark:border-slate-800">
        <motion.h1
          className="text-5xl font-bold mb-3 text-slate-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Featured Projects
        </motion.h1>
        <motion.p
          className="text-lg text-slate-500 dark:text-slate-400"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          A showcase of work built across internships, university projects, and personal exploration
        </motion.p>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 flex gap-3 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className="relative px-5 py-2 rounded-xl font-medium text-sm transition-colors"
          >
            {selectedCategory === cat.id && (
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-500 rounded-xl"
                layoutId="filter-bg"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            <span
              className={`relative z-10 ${
                selectedCategory === cat.id
                  ? 'text-white'
                  : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              {cat.name}
            </span>
          </button>
        ))}
      </section>

      {/* Projects Grid */}
      <section className="pb-12">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const isExpanded = expandedId === project.id;
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -6 }}
                  className="group rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden bg-white dark:bg-slate-800 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-slate-900/50 transition-shadow"
                >
                  {/* Card Header */}
                  <div className={`h-44 bg-gradient-to-br ${project.accentFrom} ${project.accentTo} p-5 relative overflow-hidden`}>
                    {/* Mock code preview */}
                    <div className="absolute inset-0 p-5 font-mono text-xs text-white/60 leading-relaxed select-none">
                      {project.codePreview.map((line, i) => (
                        <div key={i}>{line}</div>
                      ))}
                    </div>
                    {/* Emoji badge */}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-xl">
                      {project.icon}
                    </div>
                    {/* Category label */}
                    <div className="absolute bottom-4 left-5 text-xs font-semibold text-white/80 uppercase tracking-wider">
                      {project.category === 'fullstack' ? 'Full Stack' : project.category}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    <h3 className="text-base font-bold mb-2 text-slate-900 dark:text-white leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.06 }}
                          className="px-2.5 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs rounded-full font-medium cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Expand/collapse button */}
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : project.id)}
                      className="text-sm text-blue-600 dark:text-blue-400 font-medium flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      {isExpanded ? 'Show less' : 'View details'}
                      <motion.span animate={{ rotate: isExpanded ? 90 : 0 }} className="block">
                        →
                      </motion.span>
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          style={{ overflow: 'hidden' }}
                        >
                          <div className="pt-3 mt-3 border-t border-slate-200 dark:border-slate-700 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                            Project link coming soon. Feel free to{' '}
                            <Link to="/contact" className="text-blue-600 dark:text-blue-400 underline underline-offset-2">
                              reach out
                            </Link>{' '}
                            to learn more about this work.
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 text-slate-400 dark:text-slate-500">
            No projects in this category yet.
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-slate-200 dark:border-slate-800">
        <AnimatedSection>
          <div className="bg-gradient-to-br from-blue-600/10 to-violet-500/10 dark:from-blue-600/5 dark:to-violet-500/5 rounded-2xl p-12 border border-blue-200 dark:border-blue-900 text-center">
            <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Interested in Collaborating?</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-6 max-w-lg mx-auto text-sm">
              Whether you have a project idea or want to discuss opportunities, I'm always interested in new challenges.
            </p>
            <Link
              to="/contact"
              className="inline-block px-7 py-3 bg-gradient-to-r from-blue-600 to-violet-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all hover:-translate-y-0.5"
            >
              Let's Talk
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
