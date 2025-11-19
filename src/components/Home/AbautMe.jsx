import { useState } from "react";
import Asadul from "../../assets/Asadulfb.png";
import reactSvg from "../../assets/react.svg";

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState("about");

  const skillsData = {
    frontend: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
    backend: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "REST APIs",
      "JWT",
      "Socket.io",
    ],
    tools: [
      "Git & GitHub",
      "Figma",
      "VS Code",
      "Postman",
      "Netlify",
      "Vercel",
      "Render",
    ],
  };

  const experiences = [
    {
      year: "2023 - Present",
      title: "Full Stack Developer",
      type: "Freelance",
      description: "Building scalable web applications for various clients",
    },
    {
      year: "2022 - 2023",
      title: "Frontend Developer",
      type: "Self-Employed",
      description: "Creating responsive and interactive user interfaces",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
              Me
            </span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Passionate developer crafting digital experiences that make a
            difference
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Creative Image Container */}
          <div className="flex justify-center relative">
            <div className="relative group">
              {/* Main Image with Gradient Border */}
              <div className="relative z-10">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 rounded-full opacity-75 blur-lg group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                <img
                  src={Asadul}
                  alt="Portrait of Asadul Islam"
                  className="relative rounded-full w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover bg-gray-800 border-4 border-gray-900 group-hover:border-transparent transition-all duration-500 transform group-hover:scale-105 shadow-2xl"
                />
              </div>

              {/* Floating Tech Icons */}
              <div className="absolute -top-10 -left-4 w-16 h-16    flex items-center justify-center animate-spin">
                <img src={reactSvg} className="w-12 h-12" alt="react" />
              </div>

              <div className="absolute -bottom-10 -right-10 bg-green-500 text-black px-4 py-2 rounded-full font-bold text-sm animate-pulse">
                Available for Work
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                Turning <span className="text-blue-400">Ideas</span> Into{" "}
                <span className="text-purple-400">Digital Reality</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Full Stack Developer specializing in modern web technologies,
                creating solutions that are both beautiful and functional.
              </p>
            </div>

            {/* Enhanced Tab Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              {[
                { id: "about", label: "About", icon: "👨‍💻" },
                { id: "skills", label: "Skills", icon: "🛠️" },
                { id: "experience", label: "Journey", icon: "🚀" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600"
                  }`}
                >
                  <span>{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content Container */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 shadow-2xl min-h-[300px]">
              {activeTab === "about" && (
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">👋</div>
                    <div>
                      <p className="text-lg text-gray-300 mb-4">
                        Hello! I'm{" "}
                        <strong className="text-blue-400">Asadul Islam</strong>,
                        a passionate Full Stack Developer with expertise in the
                        MERN stack and modern web technologies.
                      </p>
                      <p className="text-lg text-gray-300">
                        I love creating digital experiences that are not only
                        visually appealing but also highly functional and
                        user-friendly.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="text-center p-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-blue-500/30">
                      <div className="text-2xl font-bold text-blue-400">2+</div>
                      <div className="text-sm text-gray-400">
                        Years Experience
                      </div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-500/30">
                      <div className="text-2xl font-bold text-purple-400">
                        50+
                      </div>
                      <div className="text-sm text-gray-400">Projects</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "skills" && (
                <div className="space-y-8">
                  {Object.entries(skillsData).map(([category, skills]) => (
                    <div key={category}>
                      <h3 className="text-xl font-semibold mb-4 capitalize text-blue-400 flex items-center gap-2">
                        <span>
                          {category === "frontend"
                            ? "🎨"
                            : category === "backend"
                            ? "⚙️"
                            : "🔧"}
                        </span>
                        {category}
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full text-sm font-medium text-gray-200 border border-gray-500 hover:border-blue-400 hover:scale-105 transition-all duration-300 cursor-default"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "experience" && (
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <div
                      key={index}
                      className="relative pl-8 border-l-2 border-blue-500 hover:border-purple-500 transition-colors duration-300"
                    >
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                      <div className="bg-gradient-to-r from-gray-700/50 to-gray-600/30 rounded-2xl p-6 hover:from-gray-700 hover:to-gray-600 transition-all duration-300">
                        <div className="text-purple-400 font-bold text-sm mb-2">
                          {exp.year}
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">
                          {exp.title}
                        </h4>
                        <div className="text-blue-400 text-sm font-medium mb-3">
                          {exp.type}
                        </div>
                        <p className="text-gray-300">{exp.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Enhanced Call to Action */}
            <div className="text-center p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl border border-blue-500/30">
              <p className="text-xl font-semibold text-gray-200">
                Ready to start your project?{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text font-bold">
                  Let's make it happen!
                </span>
              </p>
              <div className="flex justify-center gap-4 mt-4">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Hire Me
                </button>
                <a
                  href="#pro"
                  className="border-2 border-blue-500 hover:bg-blue-500 text-white font-semibold py-3 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105"
                >
                  View Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
