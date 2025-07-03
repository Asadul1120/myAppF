
import { useState } from "react";

function Services() {
  const services = [
    {
      title: "Web Design / App Design",
      description:
        "Creative, responsive, and modern UI/UX designs for websites and mobile applications.",
      image: "https://via.placeholder.com/80",
    },
    {
      title: "Frontend Development",
      description:
        "Building interactive, fast, and accessible user interfaces using React and modern tools.",
      image: "https://via.placeholder.com/80",
    },
    {
      title: "Backend API Integration",
      description:
        "Secure and scalable backend integration using Node.js, Express, and MongoDB.",
      image: "https://via.placeholder.com/80",
    },
    {
      title: "E-commerce Solutions",
      description:
        "Designing and developing complete online store solutions with secure payment methods.",
      image: "https://via.placeholder.com/80",
    },
    {
      title: "SEO & Optimization",
      description:
        "Improve your site ranking and speed with modern SEO and performance best practices.",
      image: "https://via.placeholder.com/80",
    },
    {
      title: "Maintenance & Support",
      description:
        "Keep your site secure and up-to-date with regular support and maintenance services.",
      image: "https://via.placeholder.com/80",
    },
    {
      title: "Responsive Design",
      description:
        "Design and develop responsive layouts that adapt to different screen sizes and devices.",
      image: "https://via.placeholder.com/80",
    }

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

      {/* Navigation Buttons */}
      <div className="flex justify-end gap-4 mb-8">
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
            <a href="#" className="text-blue-500 hover:underline">
              Learn more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
