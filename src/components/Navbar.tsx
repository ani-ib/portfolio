import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import useTheme from '../hooks/useTheme';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();

  const navBgOpacity = useTransform(scrollY, [0, 80], [0, 0.85]);
  const navBorderOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const navShadow = useTransform(scrollY, [0, 80], ['0 0 0 rgba(0,0,0,0)', '0 4px 24px rgba(0,0,0,0.08)']);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      className="sticky top-0 z-50 backdrop-blur-md"
      style={{ boxShadow: navShadow }}
    >
      {/* Background layer — fades in on scroll */}
      <motion.div
        className="absolute inset-0 bg-white dark:bg-slate-900"
        style={{ opacity: navBgOpacity }}
      />
      {/* Border layer */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-px bg-slate-200 dark:bg-slate-700"
        style={{ opacity: navBorderOpacity }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-violet-500 flex items-center justify-center text-white text-sm font-bold shadow-md">
            IB
          </span>
          <span className="font-semibold text-slate-900 dark:text-white hidden sm:block">
            Ishani Budhwar
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-medium transition-colors text-sm ${
                  isActive
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-violet-500 rounded-full"
                    layoutId="nav-indicator"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}

          {/* Theme Toggle */}
          <motion.button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
            whileHover={{ rotate: 15, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="block"
              >
                {theme === 'light' ? <FiMoon size={18} /> : <FiSun size={18} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          <motion.button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <FiMoon size={18} /> : <FiSun size={18} />}
          </motion.button>

          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobileMenuOpen ? 'close' : 'open'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="block"
              >
                {mobileMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden relative border-t border-slate-200 dark:border-slate-700 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div className="px-6 py-5 flex flex-col gap-5">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={`font-medium text-base ${
                      location.pathname === link.path
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-slate-700 dark:text-slate-300'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
