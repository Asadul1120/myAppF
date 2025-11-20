import { useState, useEffect } from "react";
import Asadul from "../../assets/Asadulfb.png";
import reactSvg from "../../assets/react.svg";

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState("about");

  const skillsData = {
    frontend: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "Redux",
      "Redux Toolkit",
      "React Query",
      "Tailwind CSS",
      "Bootstrap",
      "HTML5",
      "CSS3",
      "Responsive Design",
      "REST API Integration",
    ],

    backend: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "MySQL",
      "REST APIs",
      "JWT Authentication",
      "Socket.io (Real-time)",
      "Cors & Middleware",
      "bcrypt & Security",
      "MVC Architecture",
      "API Pagination & Filtering",
    ],

    tools: [
      "Git & GitHub",
      "GitHub Actions (CI/CD)",
      "Figma",
      "VS Code",
      "Postman",
      "Thunder Client",
      "Netlify",
      "Vercel",
      "Render",
      "MongoDB Atlas",
      "Firebase",
      "NPM & Yarn",
      "Chrome DevTools",
    ],
  };

  const experiences = [
    {
      title: "MERN Full Stack Developer",
      description:
        "I build modern, scalable, and fully functional web applications using the MERN stack. From designing RESTful APIs to developing secure authentication systems, admin dashboards, and real-time features, I focus on creating complete solutions that deliver performance, reliability, and a smooth user experience.",
    },
    {
      title: "Frontend Developer",
      description:
        "I create clean, responsive, and visually engaging interfaces using React.js, Next.js, JavaScript, TypeScript, and Tailwind CSS. My work emphasizes intuitive UX, pixel-perfect layouts, smooth animations, and high-performance front-end design that feels great to use.",
    },
    {
      title: "Backend Developer",
      description:
        "I develop robust, secure, and scalable backend systems using Node.js and Express.js. My experience includes designing database schemas, building APIs, implementing authentication with JWT, and integrating real-time communication using Socket.IO. I work confidently with MongoDB, MySQL, and Firebase to deliver optimized backend solutions.",
    },
    {
      title: "Redux & Redux Toolkit Expert",
      description:
        "I specialize in managing complex global state with Redux and Redux Toolkit. From slices and reducers to RTK Query and custom middleware, I build predictable and maintainable state architectures that improve performance and keep large-scale applications clean and organized.",
    },
    {
      title: "Tools & DevOps",
      description:
        "I utilize Git & GitHub for version control, Figma for UI/UX collaboration, Postman for API testing, and VS Code as my main development environment. I deploy full-stack applications on platforms like Netlify, Vercel, and Render while maintaining smooth and efficient CI/CD workflows.",
    },
    {
      title: "Creative Problem Solver",
      description:
        "I enjoy breaking down complex challenges and turning them into simple, efficient, and production-ready solutions. My focus is always on clean code, performance optimization, and delivering digital experiences that truly make an impact.",
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
            Turning ideas into smooth, engaging, and meaningful web experiences
            with the MERN stack and modern technologies.
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
                Turning <span className="text-blue-400">Ideas</span> into{" "}
                <span className="text-purple-400">Real-World Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                I’m a Full Stack Developer passionate about building modern,
                scalable web applications. I focus on crafting solutions that
                are not only visually appealing but also highly functional,
                seamless, and optimized for real-world impact.
              </p>
            </div>

            {/* Enhanced Tab Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              {[
                { id: "about", label: "About", icon: "👨‍💻" },
                { id: "skills", label: "Skills", icon: "🛠️" },
                { id: "experience", label: "Experience", icon: "🚀" },
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
                        a dedicated MERN Full Stack Developer who loves building
                        modern, scalable, and user-focused web applications. I
                        specialize in React, Next.js, Node.js, Express.js,
                        MongoDB, and state management tools like Redux & Redux
                        Toolkit.
                      </p>

                      <p className="text-lg text-gray-300">
                        I enjoy crafting digital experiences that are fast,
                        visually appealing, and highly functional. Whether it’s
                        creating elegant front-end interfaces, architecting
                        powerful back-end systems, or building real-time
                        features, I’m passionate about turning ideas into
                        meaningful products with clean code and modern
                        technologies.
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
                        25+
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
                        <h4 className="text-xl font-bold text-white mb-2">
                          {exp.title}
                        </h4>

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
                  href="#project"
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
