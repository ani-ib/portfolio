import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend server
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "ishanibudhwar@gmail.com",
      link: "mailto:ishanibudhwar@gmail.com",
      description: "Send me an email and I'll respond within 24 hours",
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+49 173 3636721",
      link: "tel:+491733636721",
      description:
        "Available for urgent inquiries or quick questions via phone",
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "linkedin.com/in/ani-ib",
      link: "https://www.linkedin.com/in/ani-ib/",
      description: "Connect with me on LinkedIn for professional updates",
    },
    {
      icon: "🐙",
      title: "GitHub",
      value: "github.com/ani-ib",
      link: "https://github.com/ani-ib",
      description: "Check out my open-source projects and contributions",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <section className="py-12 border-b border-gray-200 dark:border-gray-800">
        <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Interested in collaborating on a project or discussing opportunities? Feel free to reach out!
        </p>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
              <h2 className="text-3xl font-bold mb-6">Send Me a Message</h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-400">
                  ✓ Thank you for your message! I'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  />
                </div>

                {/* Subject */}
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900 dark:text-white"
                >
                  <option value="">Select a Subject</option>
                  <option value="project">Project Inquiry</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="freelance">Freelance Work</option>
                  <option value="fulltime">Full-Time Opportunity</option>
                  <option value="mentoring">Mentoring</option>
                  <option value="other">Other</option>
                </select>

                {/* Message */}
                <textarea
                  name="message"
                  placeholder="Your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none"
                ></textarea>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all"
                >
                  Send Message
                </button>
              </form>

              {/* Additional Info */}
              <div className="mt-8 pt-8 border-t border-gray-300 dark:border-gray-600">
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  💡 <strong>Alternative:</strong> You can also reach me
                  directly via email or LinkedIn for a quicker response.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information Sidebar */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-6">Other Ways to Reach Me</h2>

            {contactMethods.map((method, idx) => (
              <a
                key={idx}
                href={method.link}
                className="block p-6 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 hover:shadow-lg transition-all group"
              >
                <div className="text-4xl mb-3">{method.icon}</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {method.title}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-2">
                  {method.value}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-xs">
                  {method.description}
                </p>
              </a>
            ))}

            {/* Availability Status */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-600/10 dark:from-purple-500/5 dark:to-blue-600/5 border border-purple-200 dark:border-purple-900">
              <h3 className="font-bold text-gray-900 dark:text-white mb-3">
                Availability
              </h3>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Currently Available
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Open for freelance projects, part-time opportunities, and internships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 border-t border-gray-200 dark:border-gray-800">
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              q: "What's your availability for internships?",
              a: "I'm open to internship opportunities and collaborative projects. I can discuss flexible arrangements based on my academic schedule.",
            },
            {
              q: "What technologies are you most comfortable with?",
              a: "I'm proficient in Java, Python, Swift, Angular, and Spring Boot.",
            },
            {
              q: "Are you interested in freelance projects?",
              a: "Yes, I'm open to select freelance projects that align with my interests in full-stack development and user-centered design.",
            },
            {
              q: "What's your experience with agile development?",
              a: "I have hands-on experience working in agile environments with sprints, managing project deadlines, and collaborating with cross-functional teams.",
            },
          ].map((faq, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
            >
              <h3 className="font-bold text-gray-900 dark:text-white mb-3">
                {faq.q}
              </h3>
              <p className="text-gray-700 dark:text-gray-400">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
