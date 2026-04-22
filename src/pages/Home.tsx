import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
                Ishani Budhwar
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
              Informatics student at TUM
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Bachelor of Science in Informatics focused on integrating technical expertise with business strategy. Experienced in full-stack development, AR/mobile applications, and building user-centered digital solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 flex-wrap">
              <Link
                to="/projects"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all"
              >
                View My Work
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
              >
                Get in Touch
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12 flex-wrap">
              <div>
                <p className="text-3xl font-bold text-blue-600">3+</p>
                <p className="text-gray-600 dark:text-gray-400">
                  Years of Experience
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-purple-500">4 Major</p>
                <p className="text-gray-600 dark:text-gray-400">
                  Projects & Internships
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600">Multiple</p>
                <p className="text-gray-600 dark:text-gray-400">
                  Programming Languages
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-500/20 dark:from-blue-600/10 dark:to-purple-500/10 rounded-2xl p-12 border border-blue-200 dark:border-blue-900">
              <div className="aspect-square bg-gradient-to-br from-blue-600 to-purple-500 rounded-xl flex items-center justify-center text-white text-6xl font-bold">
                💻
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 border-t border-gray-200 dark:border-gray-800">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Programming Languages",
              skills: ["Java", "Python", "Swift", "C", "JavaScript/TypeScript", "R"],
              icon: "💻",
            },
            {
              title: "Web & Frontend",
              skills: ["Angular", "HTML/CSS", "TypeScript", "Responsive Design"],
              icon: "🎨",
            },
            {
              title: "Backend & DevOps",
              skills: ["Spring Boot", "GCP", "Flask", "REST APIs", "SQL", "Agile/Scrum"],
              icon: "⚙️",
            },
          ].map((category, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <ul className="space-y-2 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="px-3 py-1 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-gray-200 dark:border-gray-800">
        <div className="bg-gradient-to-r from-blue-600 to-purple-500 rounded-2xl p-12 md:p-16 text-white text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start a Project?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let's collaborate to build something amazing. I'm always excited to
            work on new and challenging projects.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
