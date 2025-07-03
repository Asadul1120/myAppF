import project from "../../assets/Project1.png";
import blogs from "../../assets/blogs.png";

const Projects = [
  {
    title: "The Project Blog Website with Nice Admin Panel",
    image: blogs,
    link: "https://blognest-six.vercel.app/",
  },
  {
    title: "The Project E-commerce Website", 
    image: project,
    link: "#",
  },
   {
    title: "The Project Food Website with Nice Admin Panel",
    image: project,
    link: "#",
  },
  {
    title: "The Project E-commerce Website", 
    image: project,
    link: "#",
  },
  {
    title: "A Blog App Using MERN Stack",
    image: project,
    link: "#",
  },
];

function OurProjects() {
  return (
    <div className="bg-gray-900 text-white py-16 px-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Our Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {Projects.map((proj, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={proj.image}
              alt={`Screenshot of ${proj.title}`}
              className="w-full h-48 object-cover mb-4 rounded-t-xl object-top"
            />
            <div className="flex items-center justify-between p-4">
              <p className="text-lg text-gray-300 font-medium w-2/3" title={proj.title}>
                {proj.title}
              </p>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
              >
                View
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurProjects;
