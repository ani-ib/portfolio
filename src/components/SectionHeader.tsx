import { motion, useReducedMotion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({ title, subtitle, centered = false }: SectionHeaderProps) {
  const shouldReduce = useReducedMotion();
  const align = centered ? 'text-center' : '';

  return (
    <div className={`mb-12 ${align}`}>
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3"
        initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl"
          initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
