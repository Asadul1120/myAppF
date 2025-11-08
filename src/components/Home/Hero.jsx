import { useEffect, useState } from "react";
import Asadul from "../../assets/Asadul.png";
import baio from "../../assets/baio.pdf"; // CV
import "./Hero.css"; // Gradient + blink cursor CSS

function Hero() {
  const words = ["Hi I'm Asadul Islam", "Full Stack Web Developer"];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = 150; // typing speed in ms
    const deletingSpeed = 80; // deleting speed in ms
    const delayAfterComplete = 1000; // wait before deleting

    const handleTyping = () => {
      const currentWord = words[wordIndex];
      if (!isDeleting) {
        setText(currentWord.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), delayAfterComplete);
        }
      } else {
        setText(currentWord.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, words]);

  return (
    <section className="bg-gray-900 text-white pt-24">
      <div className="container mx-auto px-6 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Image */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <img
              src={Asadul}
              alt="Portrait of Asadul Islam"
              className="rounded-full w-80 h-80 sm:w-72 sm:h-72 md:w-[32rem] md:h-[32rem] object-cover object-top bg-gray-800 shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="order-2 md:order-1 space-y-6">
            <h4 className="text-lg sm:text-lg md:text-xl font-semibold text-gray-300">
              Welcome to my Portfolio
            </h4>

            <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold leading-snug">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                {text}
              </span>
              <span className="border-r-2 border-blue-500 animate-blink ml-1"></span>
            </h1>

            <p className="text-lg sm:text-base md:text-lg text-gray-300">
              I specialize in building fast, responsive, and visually stunning
              web applications using the MERN stack. Let’s build your next idea
              together!
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition duration-300">
                Hire Me
              </button>
              <a href={baio} download>
                <button className="border border-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition duration-300">
                  Download CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
