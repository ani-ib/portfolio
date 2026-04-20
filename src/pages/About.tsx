export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <section className="py-12 border-b border-gray-200 dark:border-gray-800">
        <h1 className="text-5xl font-bold mb-4">About Me</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Full-stack engineer with a passion for building scalable,
          user-friendly applications
        </p>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column - Biography */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">My Journey</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                With over 10 years of professional experience in software
                development, I've had the privilege of working at leading FAANG
                companies. My journey began with a passion for creating elegant
                solutions to complex problems, and that passion continues to
                drive my work every day.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                I started as a junior developer with basic knowledge of web
                technologies. Through dedication, continuous learning, and
                working on challenging projects, I've grown into a full-stack
                engineer with expertise across the entire application
                development lifecycle.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Today, I focus on mentoring junior developers, architecting
                scalable systems, and pushing the boundaries of what's possible
                with modern web technologies. I believe in writing clean,
                maintainable code and creating user experiences that delight.
              </p>
            </div>

            {/* Experience Timeline */}
            <div className="mt-12">
              <h2 className="text-3xl font-bold mb-6">
                Professional Experience
              </h2>
              <div className="space-y-8">
                {[
                  {
                    title: "Product Learning CX Specialist, Working Student",
                    company: "SAP",
                    period: "02/2026 - Present",
                    description:
                      "Working as a Product Learning CX Specialist at SAP, focusing on customer experience learning and product education initiatives to enhance user engagement and knowledge.",
                  },
                  {
                    title: "Software Engineer, Working Student",
                    company: "Siemens AG",
                    period: "10/2024 - 03/2025",
                    description:
                      "Modernized conference website using MkDocs. Developed an advanced content management system to streamline workflows and optimize team productivity.",
                  },
                  {
                    title: "iOS Developer, Intern",
                    company: "SIXT",
                    period: "04/2024 - 07/2024",
                    description:
                      "Collaborated with a team of 7 developers in agile environment to build AR car rental app using Swift. Contributed to customer-centric features, integrated AR technology, and won Best Presentation Award for communicating product vision to stakeholders.",
                  },
                ].map((job, idx) => (
                  <div
                    key={idx}
                    className="relative pl-8 pb-8 border-l-2 border-blue-600 dark:border-blue-400"
                  >
                    <div className="absolute -left-3 top-0 w-5 h-5 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {job.title}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">
                      {job.company}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                      {job.period}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      {job.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="mt-12">
              <h2 className="text-3xl font-bold mb-6">Education</h2>
              <div className="space-y-6">
                {[
                  {
                    degree: "Master of Science in Informatics",
                    school: "Technical University of Munich (TUM)",
                    year: "10/2025 - Present",
                  },
                  {
                    degree: "Bachelor of Science in Informatics",
                    school: "Technical University of Munich (TUM)",
                    year: "10/2022 - 10/2025",
                  }
                ].map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
                  >
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {edu.school}
                    </p>
                    <p className="text-gray-500 dark:text-gray-500 text-sm">
                      {edu.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Profile Card */}
            <div className="p-6 bg-gradient-to-br from-blue-600/10 to-purple-500/10 dark:from-blue-600/5 dark:to-purple-500/5 rounded-xl border border-blue-200 dark:border-blue-900">
              <div className="text-5xl mb-4 text-center">👩‍💻</div>
              <h3 className="font-bold text-lg text-center mb-2">
                Ishani Budhwar
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center text-sm mb-4">
                M.Sc. Informatics Student
              </p>
            </div>

            {/* Quick Facts */}
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-4">Quick Facts</h3>
              <ul className="space-y-3 text-sm">
                {[
                  "📍 Munich, Germany",
                  "🎓 TUM M.Sc. Informatics Student",
                  "🤝 Open to internships & collaborations",
                  "📧 ishanibudhwar@gmail.com",
                  "🌐 Languages: English, German, Hindi, Spanish, (currently learning) Korean",
                ].map((fact, idx) => (
                  <li key={idx} className="text-gray-700 dark:text-gray-300">
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
