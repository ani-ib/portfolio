import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiGithub, FiChevronDown, FiCheck, FiSend } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';
import AnimatedSection from '../components/AnimatedSection';

const contactMethods = [
  {
    icon: <FiMail size={22} />,
    title: 'Email',
    value: 'ishanibudhwar@gmail.com',
    link: 'mailto:ishanibudhwar@gmail.com',
    description: "Send an email and I'll respond within 24 hours",
    color: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-50 dark:bg-blue-900/20',
  },
  {
    icon: <FiPhone size={22} />,
    title: 'Phone',
    value: '+49 173 3636721',
    link: 'tel:+491733636721',
    description: 'Available for quick calls and urgent inquiries',
    color: 'text-violet-600 dark:text-violet-400',
    bg: 'bg-violet-50 dark:bg-violet-900/20',
  },
  {
    icon: <FaLinkedin size={22} />,
    title: 'LinkedIn',
    value: 'linkedin.com/in/ani-ib',
    link: 'https://www.linkedin.com/in/ani-ib/',
    description: 'Connect for professional updates and opportunities',
    color: 'text-blue-700 dark:text-blue-300',
    bg: 'bg-blue-50 dark:bg-blue-900/20',
  },
  {
    icon: <FiGithub size={22} />,
    title: 'GitHub',
    value: 'github.com/ani-ib',
    link: 'https://github.com/ani-ib',
    description: 'Check out my projects and contributions',
    color: 'text-slate-700 dark:text-slate-300',
    bg: 'bg-slate-100 dark:bg-slate-700/40',
  },
];

const faqs = [
  {
    q: "What's your availability for internships?",
    a: "I'm open to internship opportunities and collaborative projects. I can discuss flexible arrangements based on my academic schedule.",
  },
  {
    q: 'What technologies are you most comfortable with?',
    a: "I'm proficient in Java, Python, Swift, Angular, React, Spring Boot, and GCP, and comfortable across the full stack.",
  },
  {
    q: 'Are you interested in freelance projects?',
    a: "Yes, I'm open to select freelance work that aligns with my interests in full-stack development and user-centered design.",
  },
  {
    q: "What's your experience with agile development?",
    a: "I have hands-on experience in agile environments, including sprint planning, cross-functional collaboration, and iterative delivery from my internships at SIXT and Siemens.",
  },
];

function FAQItem({ faq }: { faq: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/60 transition-colors"
      >
        <span className="font-semibold text-sm text-slate-900 dark:text-white pr-4">{faq.q}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} className="shrink-0 text-slate-400">
          <FiChevronDown size={18} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <p className="px-5 pb-5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-700 pt-4">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  const inputClass =
    'w-full px-4 py-3 bg-white dark:bg-slate-700/60 border border-slate-300 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm transition-shadow';

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
          Get In Touch
        </motion.h1>
        <motion.p
          className="text-lg text-slate-500 dark:text-slate-400"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Interested in collaborating or discussing opportunities? I'd love to hear from you.
        </motion.p>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Form */}
          <AnimatedSection className="lg:col-span-2">
            <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">Send Me a Message</h2>

              {/* Success message */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl flex items-center gap-3 text-green-700 dark:text-green-400 text-sm font-medium"
                  >
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white shrink-0">
                      <FiCheck size={14} />
                    </div>
                    Thank you! I'll get back to you soon.
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className={inputClass} />
                  <input type="email" name="email" placeholder="your.email@example.com" value={formData.email} onChange={handleChange} required className={inputClass} />
                </div>

                <select name="subject" value={formData.subject} onChange={handleChange} required className={inputClass}>
                  <option value="">Select a Subject</option>
                  <option value="project">Project Inquiry</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="freelance">Freelance Work</option>
                  <option value="fulltime">Full-Time Opportunity</option>
                  <option value="mentoring">Mentoring</option>
                  <option value="other">Other</option>
                </select>

                <textarea name="message" placeholder="Your message here..." value={formData.message} onChange={handleChange} required rows={6} className={`${inputClass} resize-none`} />

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-violet-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {loading ? (
                    <motion.span
                      className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 0.7, ease: 'linear' }}
                    />
                  ) : (
                    <>
                      <FiSend size={16} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </AnimatedSection>

          {/* Sidebar */}
          <div className="space-y-5">
            <AnimatedSection direction="right">
              <h2 className="text-base font-bold text-slate-900 dark:text-white mb-4">Other Ways to Reach Me</h2>
            </AnimatedSection>

            {contactMethods.map((method, idx) => (
              <AnimatedSection key={idx} direction="right" delay={idx * 0.07}>
                <motion.a
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md transition-all group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`w-10 h-10 rounded-xl ${method.bg} ${method.color} flex items-center justify-center shrink-0`}>
                    {method.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{method.title}</p>
                    <p className="text-xs text-blue-600 dark:text-blue-400 truncate">{method.value}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{method.description}</p>
                  </div>
                </motion.a>
              </AnimatedSection>
            ))}

            {/* Availability */}
            <AnimatedSection direction="right" delay={0.3}>
              <div className="p-4 rounded-2xl bg-gradient-to-br from-violet-500/10 to-blue-600/10 border border-violet-200 dark:border-violet-900">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-semibold text-sm text-slate-900 dark:text-white">Currently Available</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Open to freelance, part-time, and full-time opportunities.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 border-t border-slate-200 dark:border-slate-800">
        <AnimatedSection>
          <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} faq={faq} />
            ))}
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
