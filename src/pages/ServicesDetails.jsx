import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Contact from "./Contact";

function ServicesDetails() {
  const { id } = useParams();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const Services = [
    {
      id: "app100",
      title: "Custom Web Application Development",
      description:
        "Build scalable and secure full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
      image: "https://cdn-icons-png.flaticon.com/512/2721/2721293.png",
      details:
        "In today’s digital age, businesses need custom solutions tailored to their workflows. We specialize in building custom full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, and Node.js). From idea to launch, we take care of architecture, security, and scalability. Whether it's a SaaS product, admin dashboard, or a platform for managing data — we ensure high performance and user satisfaction.",
    },
    {
      id: "ui100",
      title: "Responsive UI/UX Design",
      description:
        "Design modern, mobile-first user interfaces using Tailwind CSS, Figma, and React component libraries.",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      details:
        "We believe great design is at the heart of every successful digital product. Our UI/UX design service focuses on creating responsive, user-friendly, and visually appealing interfaces using modern tools like Figma and Tailwind CSS. We design with the user journey in mind, ensuring high usability and engagement.",
    },
    {
      id: "api100",
      title: "RESTful API Development",
      description:
        "Create robust, efficient, and secure REST APIs with Express.js and Node.js for seamless frontend-backend communication.",
      image: "https://cdn-icons-png.flaticon.com/512/595/595067.png",
      details:
        "We design and develop RESTful APIs that serve as the backbone of your applications. Using Express.js and Node.js, we ensure your APIs are well-structured, secure, and scalable — enabling smooth interaction between client-side and server-side systems.",
    },
    {
      id: "auth100",
      title: "Authentication & Authorization",
      description:
        "Implement secure login systems with JWT, bcrypt, and role-based access control for users and admins.",
      image: "https://cdn-icons-png.flaticon.com/512/2913/2913465.png",
      details:
        "Security is non-negotiable. We implement strong authentication and authorization systems using JSON Web Tokens (JWT), password hashing (bcrypt), and role-based access to ensure only the right users get the right access.",
    },
    {
      id: "db100",
      title: "MongoDB Database Integration",
      description:
        "Design and manage NoSQL databases with MongoDB Atlas for highly available, scalable data storage.",
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968342.png",
      details:
        "Our database services include designing, configuring, and managing NoSQL databases with MongoDB. We optimize data structures, implement indexing, and ensure backups — enabling secure, high-speed data operations with cloud hosting like MongoDB Atlas.",
    },
    {
      id: "mern100",
      title: "E-commerce Development",
      description:
        "Build complete MERN-based e-commerce platforms with cart system, payment gateway, admin dashboard, and product management.",
      image: "https://cdn-icons-png.flaticon.com/512/4290/4290854.png",
      details:
        "Launch your online business with a full-featured e-commerce solution powered by the MERN stack. From product listings to secure payment gateways and a full admin panel — we build it all. Scalable, secure, and ready to grow your business.",
    },
    {
      id: "deploy100",
      title: "Deployment & CI/CD",
      description:
        "Deploy MERN applications using platforms like Vercel, Render, or Heroku with GitHub CI/CD pipelines.",
      image: "https://cdn-icons-png.flaticon.com/512/2721/2721290.png",
      details:
        "We help you go live smoothly by deploying your MERN applications on cloud platforms like Vercel, Render, or Heroku. We also integrate GitHub Actions for Continuous Integration and Continuous Deployment (CI/CD) to automate your build and release cycle.",
    },
    {
      id: "performance100",
      title: "Performance Optimization",
      description:
        "Boost app performance through lazy loading, code splitting, database indexing, and caching strategies.",
      image: "https://cdn-icons-png.flaticon.com/512/2436/2436635.png",
      details:
        "Speed is everything. We optimize performance on both the frontend and backend — implementing best practices like lazy loading, code splitting, caching, and query optimization — ensuring lightning-fast user experience.",
    },
    {
      id: "support100",
      title: "Ongoing Maintenance & Support",
      description:
        "Provide continuous support, bug fixes, and feature updates to ensure long-term project success.",
      image: "https://cdn-icons-png.flaticon.com/512/1828/1828490.png",
      details:
        "We offer ongoing support to keep your application running smoothly. From fixing bugs to adding new features, we ensure your app stays updated, secure, and ready for your growing needs.",
    },
  ];

  const service = Services.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold">404 - Service Not Found</h2>
          <p className="mt-2 text-gray-300">
            Please check the URL or return to the services page.
          </p>
          <Link
            to="/services"
            className="mt-6 inline-block bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg shadow transition"
          >
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className=" py-10 ">
        <div className="p-8 md:p-12">
          <div className="text-center mb-10">
            <img
              src={service.image}
              alt={service.title}
              className="w-24 h-24 mx-auto mb-6 drop-shadow-lg"
            />
            <h1 className="text-3xl md:text-4xl font-extrabold text-white">
              {service.title}
            </h1>
            <p className="text-lg text-slate-300 mt-4">{service.description}</p>
          </div>

          <article className="prose lg:prose-xl max-w-none text-slate-200 prose-headings:text-white prose-strong:text-emerald-400 prose-li:marker:text-emerald-500">
            <p>{service.details}</p>

            <h2 className="pt-10 mb-4 text-2xl md:text-3xl font-bold">
              Why Choose This Service?
            </h2>
            <ul>
              <li>✅ 100% custom-built solutions</li>
              <li>✅ Built with the secure & scalable MERN stack</li>
              <li>✅ SEO & Performance optimized</li>
              <li>✅ Mobile responsive & user-friendly</li>
              <li>✅ Ongoing support and maintenance</li>
            </ul>

            <h2>Technologies We Use</h2>
            <p>
              We leverage modern technologies to build efficient, maintainable,
              and performant solutions:
            </p>
            <ul>
              <li>
                🟢 <strong>MongoDB</strong>: Cloud-based NoSQL database
              </li>
              <li>
                ⚡ <strong>Express.js</strong>: Flexible backend routing
              </li>
              <li>
                ⚛️ <strong>React.js</strong>: Dynamic, responsive frontend
              </li>
              <li>
                🟩 <strong>Node.js</strong>: Fast backend runtime
              </li>
              <li>
                🎨 <strong>Tailwind CSS</strong>: Utility-first responsive
                design
              </li>
            </ul>

            <h2>Get Started Today</h2>
            <p>
              Ready to take your business online or need a custom application?
              Let's work together to bring your idea to life. We’re passionate
              about building scalable, secure, and meaningful digital products
              that help our clients grow.
            </p>
          </article>

          <div className="mt-12 text-center">
            <button
              onClick={openModal}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow transition"
            >
              🚀 Get a Free Consultation
            </button>
          </div>

          {isModalOpen && (
            <div className="fixed inset-0 z-50  bg-opacity-60 flex items-center justify-center">
              <div className="relative w-full max-w-3xl mx-4 sm:mx-auto">
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-red-500 z-50"
                >
                  &times;
                </button>

                {/* Contact Form as Modal */}
                <div className=" rounded-xl shadow-xl overflow-y-auto max-h-[90vh] border border-gray-700">
                  <Contact />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ServicesDetails;
