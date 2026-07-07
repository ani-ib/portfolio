import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Layout() {
  const location = useLocation();

  return (
    <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 min-h-screen flex flex-col">
      <Navbar />
      <motion.main
        key={location.pathname}
        className="flex-grow py-12 px-4 md:px-6"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <Outlet />
      </motion.main>
      <Footer />
    </div>
  );
}
