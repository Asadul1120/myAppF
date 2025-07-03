import { useState } from "react";
import Asadul from "../../assets/Asadulfb.png";


const AboutMe = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <section id="about" className="py-12 px-6 sm:px-6 lg:px-8 bg-gray-900 text-white">
       <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold py-6 mb-6 text-center">About Me </h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left - Image */}
        <div className="flex justify-center">
          <img
            src={Asadul}
            alt="Portrait of Asadul Islam"
            className="rounded-full w-80 h-80 sm:w-80 sm:h-80 md:w-[34rem] md:h-[34rem] object-cover bg-gray-800"
          />
        </div>

        {/* Right - Content */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-6">
            Who I Am — A Passionate Full Stack Web Developer
          </h2>

          {/* Tab Buttons */}
          <div className="flex flex-wrap gap-3 mb-6">
            {["about", "skills", "experience"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  activeTab === tab
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {tab === "about" && "About Me"}
                {tab === "skills" && "Skills Summary"}
                {tab === "experience" && "Experience"}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="space-y-4 text-lg sm:text-base md:text-lg text-gray-300">
            {activeTab === "about" && (
              <>
                <p>
                  Hello! I'm <strong>Asadul Islam</strong>, a dedicated Full
                  Stack Web Developer experienced in building modern web apps
                  using the MERN stack.
                </p>
                <p>
                  I specialize in frontend tools like React.js, Next.js,
                  Tailwind CSS and backend with Node.js, Express.js, MongoDB,
                  and MySQL.
                </p>
                <p>
                  I’m passionate about solving real-world problems through
                  user-friendly and scalable applications.
                </p>
              </>
            )}

            {activeTab === "skills" && (
              <ul className="list-disc list-inside">
                <li>
                  <strong>Frontend:</strong> HTML, CSS, Bootstrap, Tailwind CSS,
                  JavaScript, React.js,Redux, Next.js
                </li>
                <li>
                  <strong>Backend:</strong> Node.js, Express.js
                </li>
                <li>
                  <strong>Database:</strong> MongoDB, MySQL
                </li>
                <li>
                  <strong>UI/UX Tools:</strong> Figma
                </li>
                <li>
                  <strong>Version Control:</strong> Git, GitHub
                </li>
                <li>
                  <strong>Deployment:</strong> Netlify, Vercel, Render
                </li>
              </ul>
            )}

            {activeTab === "experience" && (
              <ul className="list-disc list-inside">
                <li>Built responsive UIs with React and Tailwind CSS</li>
                <li>Created user-friendly interfaces with Next.js</li>
                <li>Redux for state management in React</li>
                <li>Collaborated with cross-functional teams</li>
                <li>Optimized performance and accessibility</li>
                <li>Implemented responsive design</li>
                <li>Translated Figma designs to production</li>
                <li>Created REST APIs with Express and Node.js</li>
                <li>Implemented JWT authentication</li>
                <li>Managed data with MongoDB and MySQL</li>
                <li>Deployed apps with Render, Netlify, and Vercel</li>
                <li>Collaborated using Git & GitHub</li>
              </ul>
            )}
          </div>

          {/* Call to Action */}
          <div className="mt-8 text-base sm:text-lg font-medium text-gray-200">
            I'm always excited to work on new projects.{" "}
            <span className="text-blue-500">
              Let’s build something amazing together!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
