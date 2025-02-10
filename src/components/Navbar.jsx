import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">CANCERCARE</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          <li>
            <a href="/" className="text-gray-700 hover:text-blue-600 transition duration-300">Home</a>
          </li>
          <li>
            <a href="/about" className="text-gray-700 hover:text-blue-600 transition duration-300">About</a>
          </li>
          <li>
            <a href="/faq" className="text-gray-700 hover:text-blue-600 transition duration-300">FAQ</a>
          </li>
          <li>
            <a href="/healthlibrary" className="text-gray-700 hover:text-blue-600 transition duration-300">Health Library</a>
          </li>

          {/* Join Us Button with Icon */}
          <li>
            <button
              onClick={() => navigate("/login")}
              className="flex items-center space-x-2 bg-transparent text-blue-600 font-semibold py-2 px-4 rounded-lg border border-blue-600 hover:bg-blue-600 hover:text-white transition duration-300"
            >
              
              <span>Join Us</span>
            </button>
          </li>
        </ul>

        {/* Hamburger Menu */}
        <button className="block md:hidden focus:outline-none" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-lg space-y-2 py-4 px-4">
          <li>
            <a href="/" className="block text-gray-700 hover:text-blue-600 transition duration-300">Home</a>
          </li>
          <li>
            <a href="/about" className="block text-gray-700 hover:text-blue-600 transition duration-300">About</a>
          </li>
          <li>
            <a href="/healthlibrary" className="block text-gray-700 hover:text-blue-600 transition duration-300">Health Library</a>
          </li>
          <li>
            <a href="/faq" className="block text-gray-700 hover:text-blue-600 transition duration-300">FAQ</a>
          </li>
          <li>
            <button
              onClick={() => navigate("/login")}
              className="flex items-center justify-center space-x-2 bg-transparent text-blue-600 font-semibold py-2 px-4 rounded-lg border border-blue-600 hover:bg-blue-600 hover:text-white w-full transition duration-300"
            >
             
              <span>Join Us</span>
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;