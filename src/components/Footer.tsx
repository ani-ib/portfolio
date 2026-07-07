import { Link } from 'react-router-dom';
import { FiGithub, FiMail } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
  ];

  const socialLinks = [
    { href: 'https://github.com/ani-ib', label: 'GitHub', icon: <FiGithub size={16} /> },
    { href: 'https://www.linkedin.com/in/ani-ib/', label: 'LinkedIn', icon: <FaLinkedin size={16} /> },
    { href: 'mailto:ishanibudhwar@gmail.com', label: 'Email', icon: <FiMail size={16} /> },
  ];

  return (
    <motion.footer
      className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-violet-500 flex items-center justify-center text-white text-xs font-bold">
                IB
              </span>
              <span className="font-bold text-slate-900 dark:text-white">Ishani Budhwar</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs">
              M.Sc. Information Systems student at TUM (from Oct 2026). Building thoughtful digital experiences across the full stack.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4 text-slate-900 dark:text-white text-sm">Navigation</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-slate-900 dark:text-white text-sm">Connect</h4>
            <ul className="space-y-2.5">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
                  >
                    {s.icon}
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-slate-400 text-xs">© {currentYear} Ishani Budhwar. All rights reserved.</p>
          <p className="text-slate-400 text-xs">Built with React · TypeScript · Tailwind CSS · Framer Motion</p>
        </div>
      </div>
    </motion.footer>
  );
}
