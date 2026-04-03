import caremebd from "../../assets/caremebd.png";
import blogs from "../../assets/blogs.png";
import ecoomerce from "../../assets/e-coma.png";
import pokamon from "../../assets/pokamon.png";
import dblpro from "../../assets/dblpro.png";
import BantuWarga from "../../assets/Bantu-Warga.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

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
      "Node.js",
      "JWT Authentication",
      "MongoDB",
      "Tailwind CSS",
    ],
    image: dblpro,
    link: "https://sorting-packing-dbl-asadul-deployment.netlify.app/",
  },
  {
    title: "Bantu Warga",
    description:
      "Community health service platform focused on COVID-19 information and support.",
    technology: ["React", "Tailwind CSS", "CSS"],
    image: BantuWarga,
    link: "https://bantu-wargadev.netlify.app/",
  },
  {
    title: "BlogNest",
    description:
      "Modern blogging platform with authentication, post management and API integration.",
    technology: [
      "Next.js",
      "Node.js",
      "JWT Authentication",
      "MongoDB",
      "Tailwind CSS",
    ],
    image: blogs,
    link: "https://blognest-six.vercel.app/",
  },
  {
    title: "E-commerce UI",
    description:
      "Responsive e-commerce frontend with product listing and shopping interface.",
    technology: ["React", "Bootstrap", "API", "CSS"],
    image: ecoomerce,
    link: "https://asadul1120.github.io/Assignment-2-Bootstrap-e-comm/",
  },
  {
    title: "Pokemon App",
    description:
      "Fun React app using API and routing to explore Pokémon data dynamically.",
    technology: ["React", "API", "Router", "CSS"],
    image: pokamon,
    link: "https://assignment-3-react-router-and-api-int.netlify.app/",
  },
];

export default function OurProjects() {
  return (
    <div id="project" className="bg-gray-900 text-white py-16 px-4 md:px-10">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Our Projects
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {Projects.map((proj, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-48 object-cover object-top hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col gap-3">
              {/* Title */}
              <h3 className="text-lg font-semibold hover:text-indigo-400 transition">
                {proj.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">
                {proj.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2">
                {proj.technology.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-indigo-500/20 text-indigo-400 px-3 py-1 rounded-full border border-indigo-500/30 hover:bg-indigo-500 hover:text-white transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Button */}
              <div className="flex justify-end">
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-indigo-500 hover:to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition duration-300 shadow-md hover:shadow-xl"
                >
                  Live
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="text-xs"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
