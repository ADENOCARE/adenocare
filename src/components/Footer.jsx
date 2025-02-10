
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">CANCERCARE</h3>
            <p className="text-sm">
            We provide awareness and care for individuals who want to learn more about cancer, access to specialized doctors, and a supportive community for sharing experiences and finding guidance.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-300">
                  About Us
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
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300"
                  aria-label="Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12a10 10 0 1 0-11.63 9.93v-7H8.29v-3h2.08V9.35c0-2.07 1.24-3.2 3.14-3.2.91 0 1.87.16 1.87.16v2.07h-1.05c-1.04 0-1.36.65-1.36 1.32V12h2.29l-.36 3h-1.93v7A10 10 0 0 0 22 12z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300"
                  aria-label="Twitter"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.56a9.94 9.94 0 0 1-2.83.77 4.93 4.93 0 0 0 2.17-2.72 9.87 9.87 0 0 1-3.13 1.2A4.92 4.92 0 0 0 16.67 3c-2.72 0-4.93 2.21-4.93 4.93 0 .39.04.77.13 1.13A13.97 13.97 0 0 1 1.67 3.15a4.93 4.93 0 0 0 1.52 6.57 4.88 4.88 0 0 1-2.23-.62v.06a4.93 4.93 0 0 0 3.95 4.83 4.88 4.88 0 0 1-2.21.08 4.93 4.93 0 0 0 4.6 3.42A9.88 9.88 0 0 1 0 19.54a13.94 13.94 0 0 0 7.54 2.21c9.05 0 13.99-7.5 13.99-14 0-.21 0-.42-.01-.63A9.93 9.93 0 0 0 24 4.56z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.63 3H4.37A1.38 1.38 0 0 0 3 4.37v15.26A1.38 1.38 0 0 0 4.37 21h15.26A1.38 1.38 0 0 0 21 19.63V4.37A1.38 1.38 0 0 0 19.63 3zM8.12 18.39H5.73v-8.49h2.39v8.49zm-1.2-9.8a1.39 1.39 0 1 1 0-2.78 1.39 1.39 0 0 1 0 2.78zm12.08 9.8h-2.39v-4.24c0-1.01-.02-2.31-1.41-2.31-1.41 0-1.63 1.1-1.63 2.24v4.31H11.3v-8.49h2.29v1.16h.03a2.5 2.5 0 0 1 2.25-1.24c2.4 0 2.84 1.58 2.84 3.63v4.94z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-8 text-sm border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} cancercare. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
