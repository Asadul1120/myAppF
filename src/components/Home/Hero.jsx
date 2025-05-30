import Asadul from "../../assets/Asadul.png";
import baio from "../../assets/baio.pdf"; 

function Hero() {
  return (
    <section className="bg-gray-900 text-white pt-24">
      <div className="container mx-auto px-6 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image First on Mobile */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <img
              src={Asadul}
              alt="Portrait of Asadul Islam, Full Stack Developer"
              className="rounded-full w-80 h-80 sm:w-72 sm:h-72 md:w-[32rem] md:h-[32rem] object-cover object-top bg-gray-800 shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="order-2 md:order-1 space-y-6">
            <h4 className="text-lg sm:text-lg md:text-xl font-semibold text-gray-300">
              Welcome to my Portfolio
            </h4>
            <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold leading-snug">
              Hi I'm <br />
              <span className="text-blue-500">Asadul Islam</span>
              <br />
              Full Stack Web Developer
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
