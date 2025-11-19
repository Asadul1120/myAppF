import { useEffect, useState } from "react";
import Asadul from "../../assets/Asadul.png";
import baio from "../../assets/baio.pdf"; // CV
import "./Hero.css"; // Gradient + blink cursor CSS

function Hero() {
  const [currentText, setCurrentText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const wordGroups = [
    "Hi I'm Asadul Islam",
    "Full Stack Developer",
    "MERN Stack Specialist",
    "Problem Solver",
  ];

  const typingConfig = {
    typingSpeed: 100,
    deletingSpeed: 60,
    pauseBeforeDelete: 2000,
    pauseBetweenWords: 500,
  };

  useEffect(() => {
    if (isPaused) return;

    const currentWord = wordGroups[currentWordIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        if (currentCharIndex < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentCharIndex + 1));
          setCurrentCharIndex(currentCharIndex + 1);
        } else {
          // Finished typing word
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(true);
          }, typingConfig.pauseBeforeDelete);
        }
      } else {
        // Deleting
        if (currentCharIndex > 0) {
          setCurrentText(currentWord.slice(0, currentCharIndex - 1));
          setCurrentCharIndex(currentCharIndex - 1);
        } else {
          // Finished deleting word
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % wordGroups.length);
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
          }, typingConfig.pauseBetweenWords);
        }
      }
    };

    const timeout = setTimeout(
      handleTyping,
      isDeleting ? typingConfig.deletingSpeed : typingConfig.typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [currentCharIndex, isDeleting, currentWordIndex, isPaused, wordGroups]);

  const handleHireMe = () => {
    // Scroll to contact section or open email
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.open("mailto:asadul@example.com?subject=Hire%20Request");
    }
  };

  return (
    <section className="bg-gray-900 text-white pt-24" id="home">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1 text-center lg:text-left">
            <div className="space-y-1">
              <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-300 animate-fade-in">
                Welcome to <span className="text-blue-400"> My Portfolio</span>
              </h4>

              <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold leading-tight">
                {" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                  {currentText || " "}
                </span>{" "}
                <span className="border-r-2 border-blue-500 animate-blink ml-1">
                  {" "}
                </span>{" "}
              </h1>
            </div>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I create <span className="text-blue-400 font-semibold">fast</span>
              ,{" "}
              <span className="text-purple-400 font-semibold">responsive</span>,
              and{" "}
              <span className="text-pink-400 font-semibold">
                visually stunning
              </span>{" "}
              web applications using modern technologies.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 max-w-md mx-auto lg:mx-0">
              <div className="text-center p-4 rounded-lg bg-gray-800/50 backdrop-blur-sm">
                <div className="text-2xl font-bold text-blue-400">25+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-gray-800/50 backdrop-blur-sm">
                <div className="text-2xl font-bold text-purple-400">2+</div>
                <div className="text-sm text-gray-400">Years Exp</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-gray-800/50 backdrop-blur-sm col-span-2 sm:col-span-1">
                <div className="text-2xl font-bold text-pink-400">100%</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <button
                onClick={handleHireMe}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Hire Me
              </button>
              <a
                href={baio}
                download="Asadul_Islam_CV.pdf"
                className="border-2 border-blue-600 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
              >
                Download CV
              </a>
            </div>

            {/* Social Links */}
            {/* <div className="flex justify-center lg:justify-start gap-6 pt-6">
              {["github", "linkedin", "twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110 link"
                  aria-label={social}
                >
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold">
                      {social[0].toUpperCase()}
                    </span>
                  </div>
                </a>
              ))}
            </div> */}
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-25 animate-pulse"></div>
              <img
                src={Asadul}
                alt="Portrait of Asadul Islam"
                className="relative rounded-full w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] object-cover object-top bg-gray-800 shadow-2xl border-4 border-gray-700 hover:border-blue-500 transition-all duration-500 transform hover:scale-105"
              />
              {/* Floating elements */}
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-sm animate-bounce">
                👨‍💻
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-black font-bold text-sm animate-pulse">
                Available
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
