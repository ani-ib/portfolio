export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent mb-2">
              Portfolio
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Full-stack developer building amazing web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">
              Navigation
            </h4>
            <ul className="space-y-2">
              {["Home", "About", "Projects", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={link == "Home" ? "./" : `./${link.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">
              Social
            </h4>
            <ul className="space-y-2">
              {["GitHub", "LinkedIn", "Twitter"].map((social) => (
                <li key={social}>
                  <a
                    href={`#${social.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-colors"
                  >
                    {social}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>ishanibudhwar@gmail.com</li>
              <li>+49 173 3636721</li>
              <li>Munich, Germany</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Ishani Budhwar. All rights reserved.
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-xs">
              Built with React + TypeScript + Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
