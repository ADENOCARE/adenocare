import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 text-white sticky top-0 z-50">

      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">ADENOCARE</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="/" className="hover:text-gray-300">
              Home
            </a>
          </li>
    
          <li>
            <a href="/community" className="hover:text-gray-300">
              Community
            </a>
          </li>
          <li>
            <a href="/service" className="hover:text-gray-300">
              Service
            </a>
          </li>
          <li>
            <a href="/login" className="hover:text-gray-300">
              Login
            </a>
          </li>
          <li>
            <a href="/register" className="hover:text-gray-300">
              Register
            </a>
          </li>
        </ul>

        {/* Hamburger Menu */}
        <button
          className="block md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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
        <ul className="md:hidden bg-blue-500 space-y-2 py-4 px-4">
          <li>
            <a href="/" className="hover:text-gray-300">
              Home
            </a>
          </li>
    
          <li>
            <a href="/community" className="hover:text-gray-300">
              Community
            </a>
          </li>
          <li>
            <a href="/service" className="hover:text-gray-300">
              Service
            </a>
          </li>
          <li>
            <a href="/login" className="hover:text-gray-300">
              Login
            </a>
          </li>
          <li>
            <a href="/register" className="hover:text-gray-300">
              Register
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
