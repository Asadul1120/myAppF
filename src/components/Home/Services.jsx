import { useState } from "react";
import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      id: "app100",
      title: "Custom Web Applications",
      description:
        "Build secure, scalable, and modern web apps using the MERN stack.",
      image: "https://cdn-icons-png.flaticon.com/512/2721/2721293.png",
    },
    {
      id: "ui100",
      title: "Responsive UI/UX Design",
      description:
        "Create clean, mobile-friendly interfaces with Tailwind CSS, Figma, and React.",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      id: "api100",
      title: "RESTful API Development",
      description:
        "Develop efficient and secure APIs with Node.js and Express.js.",
      image: "https://cdn-icons-png.flaticon.com/512/595/595067.png",
    },
    {
      id: "auth100",
      title: "Authentication & Security",
      description:
        "Implement secure login systems with JWT, bcrypt, and role-based access.",
      image: "https://cdn-icons-png.flaticon.com/512/2913/2913465.png",
    },
    {
      id: "db100",
      title: "Database Integration",
      description:
        "Manage and scale databases using MongoDB Atlas for reliable storage.",
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968342.png",
    },
    {
      id: "mern100",
      title: "E-commerce Development",
      description:
        "Build complete MERN-based online stores with cart, payments, and dashboards.",
      image: "https://cdn-icons-png.flaticon.com/512/4290/4290854.png",
    },
    {
      id: "deploy100",
      title: "Deployment & CI/CD",
      description:
        "Deploy apps on Vercel, Render, or Heroku with smooth CI/CD pipelines.",
      image: "https://cdn-icons-png.flaticon.com/512/2721/2721290.png",
    },
    {
      id: "performance100",
      title: "Performance Optimization",
      description:
        "Boost app speed with lazy loading, code splitting, caching, and indexing.",
      image: "https://cdn-icons-png.flaticon.com/512/2436/2436635.png",
    },
    {
      id: "support100",
      title: "Maintenance & Support",
      description:
        "Provide ongoing support, updates, and bug fixes for long-term success.",
      image: "https://cdn-icons-png.flaticon.com/512/1828/1828490.png",
    },
  ];

  const itemsPerPage = 3;
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex + itemsPerPage < services.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  const paginatedServices = services.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="bg-gray-900 text-white py-10 px-4 md:px-10">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-xl font-bold text-blue-600">Services</h1>
        <p className="text-3xl font-bold mt-2">
          Showcasing My{" "}
          <span className="text-blue-600">Design & Development Skills</span>
        </p>
        <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
          I turn ideas into functional, modern, and engaging digital solutions –
          from UI/UX design to full-stack development.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedServices.map((service) => (
          <div
            key={service.id}
            className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:shadow-lg hover:shadow-blue-600/20 transition"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-400 mb-4">{service.description}</p>
            <Link
              to={`/services/${service.id}`}
              className="text-blue-500 hover:underline"
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-end gap-4 mt-8">
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className={`px-6 py-2 rounded transition ${
            startIndex === 0
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          disabled={startIndex + itemsPerPage >= services.length}
          className={`px-6 py-2 rounded transition ${
            startIndex + itemsPerPage >= services.length
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Services;
