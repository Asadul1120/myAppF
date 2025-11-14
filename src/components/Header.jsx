import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import Logo from "../assets/LOGO/Logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setAuth({ user: null, token: "" });
    navigate("/login");
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow z-50 py-6">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}

        <div className="flex items-center">
          <img
            src={Logo}
            alt="logo"
            className="h-16 rounded-full object-cover"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-4 text-xl md:text-xl">
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

            {auth.user ? (
              <>
                <li>
                  <Link onClick={handleLogout} className="hover:text-blue-400">
                    Logout
                  </Link>
                </li>

                {/* Only admin dashboard */}

                {auth.user.role === "admin" && (
                  <li>
                    <Link to="/dashboard" className="hover:text-blue-400">
                      Dashboard
                    </Link>
                  </li>
                )}
              </>
            ) : (
              <li>
                <Link to="/login" className="hover:text-blue-400">
                  Login
                </Link>
              </li>
            )}
          </ul>

          {/* ✅ Show "Let's chat" only if user is not admin */}
          {auth.user?.role !== "admin" && (
            <Link
              to="/userchat"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-1 md:px-6 md:py-2 text-sm md:text-base"
            >
              Let's chat
            </Link>
          )}
        </nav>

        {/* Mobile Nav Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white text-2xl focus:outline-none"
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 px-6 md:px-8 pt-4 ">
          <ul className="flex flex-col gap-4 space-y-3 text-xl">
            <li>
              <Link
                to="/"
                onClick={toggleMobileMenu}
                className="hover:text-blue-400 border-b border-gray-600 block"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="#about"
                onClick={toggleMobileMenu}
                className="hover:text-blue-400 border-b border-gray-600 block"
              >
                About
              </Link>
            </li>

            {auth.user ? (
              <li>
                <Link
                  onClick={() => {
                    handleLogout();
                    toggleMobileMenu();
                  }}
                  className="hover:text-blue-400 border-b border-gray-600 block"
                >
                  Logout
                </Link>
              </li>
            ) : (
              <li>
                <Link
                  to="/login"
                  onClick={toggleMobileMenu}
                  className="hover:text-blue-400 border-b border-gray-600 block"
                >
                  Login
                </Link>
              </li>
            )}

            {auth.user?.role === "admin" && (
              <li>
                <Link
                  to="/dashboard"
                  onClick={toggleMobileMenu}
                  className="hover:text-blue-400 border-b border-gray-600 block"
                >
                  Dashboard
                </Link>
              </li>
            )}

            {/* ✅ Show chat button for everyone except admin */}
            {auth.user?.role !== "admin" && (
              <li>
                <Link
                  to="/userchat"
                  onClick={toggleMobileMenu}
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-2 text-center block"
                >
                  Let's chat
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
