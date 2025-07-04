import { useState } from "react";
import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      id: "app100",
      title: "Custom Web Application Development",
      description:
        "Build scalable and secure full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
      image: "https://cdn-icons-png.flaticon.com/512/2721/2721293.png", // Web App
    },
    {
      id: "ui100",
      title: "Responsive UI/UX Design",
      description:
        "Design modern, mobile-first user interfaces using Tailwind CSS, Figma, and React component libraries.",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", // UI/UX
    },
    {
      id: "api100",
      title: "RESTful API Development",
      description:
        "Create robust, efficient, and secure REST APIs with Express.js and Node.js for seamless frontend-backend communication.",
      image: "https://cdn-icons-png.flaticon.com/512/595/595067.png", // API
    },
    {
      id: "auth100",
      title: "Authentication & Authorization",
      description:
        "Implement secure login systems with JWT, bcrypt, and role-based access control for users and admins.",
      image: "https://cdn-icons-png.flaticon.com/512/2913/2913465.png", // Login
    },
    {
      id: "db100",
      title: "MongoDB Database Integration",
      description:
        "Design and manage NoSQL databases with MongoDB Atlas for highly available, scalable data storage.",
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968342.png", // MongoDB
    },
    {
      id: "mern100",
      title: "E-commerce Development",
      description:
        "Build complete MERN-based e-commerce platforms with cart system, payment gateway, admin dashboard, and product management.",
      image: "https://cdn-icons-png.flaticon.com/512/4290/4290854.png", // E-commerce
    },
    {
      id: "deploy100",
      title: "Deployment & CI/CD",
      description:
        "Deploy MERN applications using platforms like Vercel, Render, or Heroku with GitHub CI/CD pipelines.",
      image: "https://cdn-icons-png.flaticon.com/512/2721/2721290.png", // Deployment
    },
    {
      id: "performance100",
      title: "Performance Optimization",
      description:
        "Boost app performance through lazy loading, code splitting, database indexing, and caching strategies.",
      image: "https://cdn-icons-png.flaticon.com/512/2436/2436635.png", // Speed
    },
    {
      id: "support100",
      title: "Ongoing Maintenance & Support",
      description:
        "Provide continuous support, bug fixes, and feature updates to ensure long-term project success.",
      image: "https://cdn-icons-png.flaticon.com/512/1828/1828490.png", // Support
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
      <div className="text-center mb-12">
        <h1 className="text-xl font-bold text-blue-600">Services</h1>
        <p className="text-3xl font-bold mt-2">
          Exploring My Design <span className="text-blue-600">Skills</span>
        </p>
        <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
          I offer a range of services to help bring your ideas to life with
          modern design and development tools.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedServices.map((service, index) => (
          <div
            key={index}
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

      {/* Navigation Buttons */}
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
