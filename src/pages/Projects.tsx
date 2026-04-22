import { useState } from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
    {
      id: 1,
      title: "TUMApply - Inclusive Doctoral Application Platform",
      category: "fullstack",
      description:
        "Bachelor's thesis project developing an inclusive web platform to replace TUM's current doctoral application portal. Focus on accessibility, transparency, and improved user experience for both professors and students.",
      technologies: ["Full-Stack Web Development", "Accessibility", "UX Design", "User-Centered Design"],
      image: "🎓",
      link: "#",
    },
    {
      id: 2,
      title: "AR Car Rental Upselling App",
      category: "frontend",
      description:
        "Collaborated with a team of 7 developers to build an Augmented Reality mobile application for SIXT car rental. Contributed to customer-centric features, integrated AR technology for personalized offers, and boosted in-app purchases. Worked in structured agile environment managing sprints and won Best Presentation Award.",
      technologies: ["Swift", "AR Technology", "iOS", "Team Collaboration", "Agile/Scrum"],
      image: "📱",
      link: "#",
    },
    {
      id: 3,
      title: "Siemens Conference Management System",
      category: "fullstack",
      description:
        "Modernized Siemens conference website by transitioning from Jekyll to stateless MkDocs design and developed an advanced content management system. Enhanced user experience, improved content accessibility, streamlined workflows, minimized administrative tasks, and optimized team productivity for faster event organization.",
      technologies: ["MkDocs", "Web Design", "Content Management", "Workflow Optimization", "Team Collaboration"],
      image: "🌐",
      link: "#",
    },
    {
      id: 5,
      title: "DevOps: FaaS with Spring Boot & GCP",
      category: "backend",
      description:
        "Bachelor seminar project on Function-as-a-Service using Spring Boot and Google Cloud Platform. Demonstrated serverless deployment, cloud automation, and modern backend architecture.",
      technologies: ["Spring Boot", "GCP", "Serverless", "Cloud Automation", "DevOps"],
      image: "☁️",
      link: "#",
    }
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "fullstack", name: "Full Stack" },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <section className="py-12 border-b border-gray-200 dark:border-gray-800">
        <h1 className="text-5xl font-bold mb-4">Featured Projects</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Showcase of recent projects I've built for various clients and
          personal exploration
        </p>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 flex gap-4 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              selectedCategory === cat.id
                ? "bg-gradient-to-r from-blue-600 to-purple-500 text-white shadow-lg"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2"
            >
              {/* Project Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-blue-600/20 to-purple-500/20 dark:from-blue-600/10 dark:to-purple-500/10 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                {project.image}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex gap-2 flex-wrap mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Commented out for now, can be re-enabled when real project links are available
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all group/link"
                >
                  View Project
                  <svg
                    className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>

                */}
              </div>
            </div>
          ))}
        </div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No projects in this category yet.
            </p>
          </div>
        )}
      </section>

      {/* Call to Action */}
      <section className="py-20 border-t border-gray-200 dark:border-gray-800">
        <div className="bg-gradient-to-r from-blue-600/10 to-purple-500/10 dark:from-blue-600/5 dark:to-purple-500/5 rounded-2xl p-12 md:p-16 border border-blue-200 dark:border-blue-900">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Interested in Collaborating?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Whether you have a project idea or want to discuss potential
              opportunities, I'm always interested in hearing about new
              challenges.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
