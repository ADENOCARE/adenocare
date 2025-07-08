import { useState } from "react";
import { FaUserAlt, FaClipboardList, FaUtensils, FaComments, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const UserDashboard = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gradient-to-r from-blue-50 to-purple-50">
      {/* Sidebar */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white w-64 p-6 flex flex-col justify-between shadow-lg"
      >
        <h2 className="text-2xl font-bold text-blue-800 text-center mb-8">CancerAwareness</h2>
        <div className="space-y-4">
          <a
            href="/"
            className="flex items-center gap-3 text-lg text-gray-700 hover:bg-blue-100 p-3 rounded-lg transition duration-300"
          >
            <FaUserAlt className="text-blue-600" /> Dashboard
          </a>
          <a
            href="/community"
            className="flex items-center gap-3 text-lg text-gray-700 hover:bg-blue-100 p-3 rounded-lg transition duration-300"
          >
            <FaComments className="text-purple-600" /> Community
          </a>
          <a
            href="/appointments"
            className="flex items-center gap-3 text-lg text-gray-700 hover:bg-blue-100 p-3 rounded-lg transition duration-300"
          >
            <FaClipboardList className="text-green-600" /> Appointments
          </a>
          <a
            href="/diet"
            className="flex items-center gap-3 text-lg text-gray-700 hover:bg-blue-100 p-3 rounded-lg transition duration-300"
          >
            <FaUtensils className="text-orange-600" /> Diet
          </a>
        </div>
        <div className="mt-auto text-center bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">Need help? Call us at:</p>
          <p className="text-xl font-bold text-blue-800">
            <FaPhoneAlt className="inline-block mr-2" /> +123 456 789
          </p>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex flex-col w-full overflow-y-auto">
        {/* Navbar */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white p-4 shadow-md flex justify-between items-center"
        >
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="border p-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="relative">
            <img
              src="https://via.placeholder.com/40"
              alt="User"
              className="w-8 h-8 rounded-full cursor-pointer"
              onClick={() => setOpen(!open)}
            />
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 bg-white shadow-lg p-4 mt-2 w-48 rounded-lg"
              >
                <ul className="space-y-3">
                  <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Profile Settings</li>
                  <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Logout</li>
                </ul>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Dashboard Content */}
        <div className="p-8 flex flex-col gap-8 bg-gray-50 h-full">
          {/* Welcome Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-lg text-white"
          >
            <h2 className="text-4xl font-bold mb-4">Welcome to Your Dashboard</h2>
            <p className="text-lg">
              Stay informed, connected, and proactive in your cancer awareness journey. Access resources, book appointments, and join our supportive community.
            </p>
          </motion.div>

          {/* Informative Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Learn About Cancer</h3>
            <p className="text-gray-600">
              Cancer is a disease in which some of the body&apos;s cells grow uncontrollably and spread to other parts of the body. Early detection and treatment are crucial for survival. Regular check-ups and a healthy lifestyle can reduce the risk.
            </p>
          </motion.div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Community Card */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <FaComments className="text-4xl text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Community</h3>
              <p className="text-gray-600">Join discussions, share experiences, and connect with others in our supportive community.</p>
            </div>

            {/* Appointments Card */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <FaClipboardList className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Appointments</h3>
              <p className="text-gray-600">Book and manage your appointments with healthcare professionals.</p>
            </div>

            {/* Diet Card */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <FaUtensils className="text-4xl text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Diet</h3>
              <p className="text-gray-600">Discover personalized diet plans to support cancer prevention and recovery.</p>
            </div>
          </motion.div>

          {/* Emergency Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="bg-red-100 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold text-red-700 mb-4">Emergency Contact</h3>
            <p className="text-gray-600">
              If you or someone you know is experiencing severe symptoms or needs immediate help, please contact the emergency hotline below:
            </p>
            <p className="text-2xl font-bold text-red-700 mt-4">
              <FaPhoneAlt className="inline-block mr-2" /> +123 987 654
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;