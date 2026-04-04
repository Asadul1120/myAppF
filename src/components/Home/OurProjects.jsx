import caremebd from "../../assets/caremebd.png";
import blogs from "../../assets/blogs.png";
import ecoomerce from "../../assets/e-coma.png";
import pokamon from "../../assets/pokamon.png";
import dblpro from "../../assets/dblpro.png";
import BantuWarga from "../../assets/Bantu-Warga.png";
import goWifid from "../../assets/goWifid.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import carService from "../../assets/carService.png";
import { useState } from "react";

const Projects = [
  {
    title: "CareMeBD",
    description:
      "Responsive e-commerce frontend with product listing and shopping interface.",
    technology: [
      "React",
      "Node.js",
      "JWT Authentication",
      "MongoDB",
      "Tailwind CSS",
    ],
    image: caremebd,
    link: "https://caremebd.com/",
  },
  {
    title: "Employee Management System",
    description:
      "Industrial sorting and packing Employee management system with automation features.",
    technology: [
      "Next.js",
      "Redux Toolkit",
      "Express.js",
      "Node.js",
      "JWT Authentication",
      "MongoDB",
      "Tailwind CSS",
    ],
    image: dblpro,
    link: "https://sorting-packing-dbl-asadul-deployment.netlify.app/",
    github: "https://github.com/Asadul1120/SortingDBL.git",
  },
  {
    title: "GoWafid",
    description:
      "GoWafid is an official online platform that helps users book medical test appointments for GCC visa processing. It allows easy registration, appointment scheduling at approved centers, and tracking of medical status in a simple and secure way.",
    technology: [
      "React",
      "Tailwind",
      "Mongoose",
      "Express.js",
      "Node.js",
      "JWT Authentication",
      "MongoDB",
    ],
    image: goWifid,
    link: "https://go-wafid.com",
  },

  {
    title: "Car Service",
    description:
      "Car service platform with booking and service management features.",
    technology: ["React", "Redux", "Tailwind CSS", "Fontend-styling"],
    image: carService,
    link: "https://car-service-y7c0.onrender.com/",
    github: "https://github.com/Asadul1120/Car-Service",
  },
  {
    title: "Bantu Warga",
    description:
      "Community health service platform focused on COVID-19 information and support.",
    technology: ["React", "Tailwind CSS", "Fontend-styling"],
    image: BantuWarga,
    link: "https://bantu-wargadev.netlify.app/",
    github: "https://github.com/Asadul1120/Bantu-Warga.git",
  },
  {
    title: "BlogNest",
    description:
      "Modern blogging platform with authentication, post management and API integration.",
    technology: [
      "Next.js",
      "Redux Toolkit",
      "Node.js",
      "JWT Authentication",
      "MongoDB",
      "Tailwind CSS",
    ],
    image: blogs,
    link: "https://blognest-six.vercel.app/",
    github: "https://github.com/shihab-2021/Blog-Client.git",
  },
  {
    title: "E-commerce UI",
    description:
      "Responsive e-commerce frontend with product listing and shopping interface.",
    technology: ["React", "Bootstrap", "API", "CSS"],
    image: ecoomerce,
    link: "https://asadul1120.github.io/Assignment-2-Bootstrap-e-comm/",
    github: "https://github.com/Asadul1120/Assignment-2-Bootstrap-e-comm.git",
  },
  {
    title: "Pokemon App",
    description:
      "Fun React app using API and routing to explore Pokémon data dynamically.",
    technology: ["React", "API", "Router", "CSS"],
    image: pokamon,
    link: "https://assignment-3-react-router-and-api-int.netlify.app/",
    github:
      "https://github.com/Asadul1120/-Assignment-3-React-Router-and-API-Integration-.git",
  },
];

export default function OurProjects() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 6;

  const currentProjects = Projects.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div
      id="project"
      className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-12"
    >
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14 tracking-wide">
        My Projects
      </h2>

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {currentProjects.map((proj, index) => (
          <div
            key={index}
            className="group bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-52 object-cover object-top group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-grow">
              {/* Title */}
              <h3 className="text-lg font-semibold mb-2 group-hover:text-indigo-400 transition">
                {proj.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-400 mb-4 line-clamp-3">
                {proj.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.technology.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-full border border-indigo-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex justify-between items-center mt-auto gap-3">
                {proj.github ? (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center inline-flex justify-center items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition"
                  >
                    Github <FontAwesomeIcon icon={faGithub} />
                  </a>
                ) : (
                  <button
                    disabled
                    className="flex-1 inline-flex justify-center items-center gap-2 bg-gray-800 text-gray-500 px-4 py-2 rounded-lg text-sm cursor-not-allowed"
                  >
                    Private <FontAwesomeIcon icon={faLock} />
                  </button>
                )}

                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center inline-flex justify-center items-center gap-2 bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-blue-500 hover:to-indigo-500 px-4 py-2 rounded-lg text-sm font-medium transition"
                >
                  Live <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation (NEW ADD করা হয়েছে শুধু নিচে) */}
      <div className="flex justify-center gap-4 mt-12">
        <button
          onClick={() => setStartIndex((prev) => prev - 1)}
          disabled={startIndex === 0}
          className="px-5 py-2 text-xs rounded-lg bg-gray-800 hover:bg-gray-700 disabled:opacity-40"
        >
          ⬅ Previous
        </button>

        <button
          onClick={() => setStartIndex((prev) => prev + 1)}
          disabled={startIndex + itemsPerPage >= Projects.length}
          className="px-5 py-2 text-xs rounded-lg bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40"
        >
          Next ➡
        </button>
      </div>
    </div>
  );
}
