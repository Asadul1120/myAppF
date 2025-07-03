import dev from "../assets/dev.avif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Contact Me
      </h1>

      <div id="contact" className="container mx-auto flex flex-col md:flex-row justify-between items-stretch gap-8">
        {/* Contact Info Box */}
        <div className="flex-1 bg-gray-800 p-6 md:p-8 rounded-xl flex flex-col gap-6 items-center">
          <img
            src={dev}
            alt="Profile"
            className="w-40 h-40 md:w-60 md:h-60 rounded-full object-cover object-top"
          />

          <div className="flex flex-col gap-4 text-center md:text-left">
            <p className="text-lg md:text-xl font-semibold text-gray-300">
              <FontAwesomeIcon
                icon={faPhone}
                className="mr-2 text-fuchsia-500"
              />
              Phone: +8801715-984986
            </p>
            <p className="text-lg md:text-xl font-semibold text-gray-300">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="mr-2 text-fuchsia-500"
              />
              Email: asadulcb45@gmail.com
            </p>
            <p className="text-lg md:text-xl font-semibold text-gray-300">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="mr-2 text-fuchsia-500"
              />
              Address: Dhaka, Bangladesh
            </p>
          </div>

          <p className="text-base md:text-lg text-gray-300 text-center md:text-left">
            I’m passionate about solving real-world problems through
            user-friendly and scalable applications.
          </p>
        </div>

        {/* Contact Form */}
        <form
          action=""
          className="flex-1 bg-gray-800 p-6 md:p-8 rounded-xl flex flex-col gap-6"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none"
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            className="p-3 rounded-lg bg-gray-700 text-white focus:outline-none"
          />
          <textarea
            placeholder="Message"
            rows="6"
            className="p-3 rounded-lg bg-gray-700 text-white focus:outline-none"
          ></textarea>
          <div className="flex items-start gap-2 text-sm">
            <input type="checkbox" className="mt-1 w-4 h-4" />
            <label>I agree to the terms and conditions</label>
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-20 border-t-3  border-gray-600 b pt-6  container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-center text-gray-400 text-xl">
          &copy; {new Date().getFullYear()} Asadul Islam. All rights reserved.
        </p>

        <div className="flex items-center gap-4 text-xl">
          <span className="text-gray-400 text-xl capitalize">Follow Us :</span>
          <a
            href="https://www.facebook.com/asadulcb45/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-blue-400 hover:text-blue-600 transition duration-300"
            />
          </a>
          <a
            href="https://twitter.com/Asadulcb45"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              className=" text-sky-400 hover:text-sky-600 transition duration-300"
            />
          </a>
          <a
            href="https://github.com/Asadulcb45"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className=" text-gray-300 hover:text-gray-500 transition duration-300"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/asadulcb45/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="  text-blue-500 hover:text-sky-600 transition duration-300"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
