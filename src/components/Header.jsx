// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <header className="bg-gray-900 text-white py-4">
//       <div className="container mx-auto flex items-center justify-between px-4">
//         <h1 className="text-2xl font-bold">LOGO</h1>
//         <nav className="flex gap-15 py-2 items-center text-lg">
//           <ul className="flex gap-4">
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contact</Link>
//             </li>
//           </ul>
//           <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-1">
//             <Link to="/chat">Let's chat</Link>
//           </button>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0  left-0  w-full bg-gray-800 text-white shadow z-50 py-6 ">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold">LOGO</h1>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-4 text-sm md:text-base">
            <li>
              <Link to="/" className="hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-400">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-400 mr-10">
                Contact
              </Link>
            </li>
          </ul>
          <Link
            to="/chat"
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-1 md:px-6 md:py-2 text-sm md:text-base"
          >
            Let's chat
          </Link>
        </nav>

        {/* Mobile Nav Button (Hamburger Placeholder) */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            {/* Replace with icon component if using something like HeroIcons */}
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
