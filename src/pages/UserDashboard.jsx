import { useState } from "react";
import { FaUserAlt, FaClipboardList, FaUtensils, FaComments, FaPhoneAlt } from "react-icons/fa";

const UserDashboard = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-64 p-6 flex flex-col justify-between">
        <h2 className="text-3xl font-bold text-center mb-8">CancerAwareness</h2>
        <div className="space-y-6">
          <a href="/" className="flex items-center gap-3 text-lg hover:bg-gray-700 p-2 rounded">
            <FaUserAlt /> Dashboard
          </a>
          <a href="/community" className="flex items-center gap-3 text-lg hover:bg-gray-700 p-2 rounded">
            <FaComments /> Community
          </a>
          <a href="/appointments" className="flex items-center gap-3 text-lg hover:bg-gray-700 p-2 rounded">
            <FaClipboardList /> Appointments
          </a>
          <a href="/diet" className="flex items-center gap-3 text-lg hover:bg-gray-700 p-2 rounded">
            <FaUtensils /> Diet
          </a>
        </div>
        <div className="mt-auto text-center">
          <p className="text-sm">Need help? Call us at:</p>
          <p className="text-xl font-bold"><FaPhoneAlt /> +123 456 789</p>
        </div>
      </div>

      <div className="flex flex-col w-full">
        {/* Navbar */}
        <div className="bg-white p-4 shadow-md flex justify-between items-center">
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="border p-2 rounded-md w-64"
            />
          </div>
          <div className="relative">
            <img
              src="/path-to-profile-pic.jpg"
              alt="User"
              className="w-8 h-8 rounded-full cursor-pointer"
              onClick={() => setOpen(!open)}
            />
            {open && (
              <div className="absolute right-0 bg-white shadow-md p-4 mt-2 w-48 rounded-lg">
                <ul className="space-y-4">
                  <li className="text-gray-700 cursor-pointer">Profile setting</li>
                  <li className="text-gray-700 cursor-pointer">Logout</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6 flex flex-col gap-6 bg-gray-100 h-full">
          <h2 className="text-3xl font-bold text-gray-800">Welcome to Your Dashboard</h2>

          {/* Informative Information about Cancer */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700">Learn About Cancer</h3>
            <p className="text-gray-600 mt-2">
              Cancer is a disease in which some of the body&apos;s cells grow uncontrollably and spread to other parts of the body.
              Early detection and treatment are crucial for survival. Regular check-ups and a healthy lifestyle can reduce the risk.
            </p>
          </div>

          {/* Community, Appointments, and Diet */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <FaComments className="text-4xl text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-700">Community</h3>
              <p className="text-gray-600 mt-2 text-center">Join our community discussions and support groups.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <FaClipboardList className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-700">Appointments</h3>
              <p className="text-gray-600 mt-2 text-center">Book an appointment with a doctor for consultations and check-ups.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <FaUtensils className="text-4xl text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-700">Diet</h3>
              <p className="text-gray-600 mt-2 text-center">Get personalized cancer prevention diet recommendations.</p>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="bg-red-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-red-700">Emergency Contact</h3>
            <p className="text-gray-600 mt-2">
              If you or someone you know is experiencing severe symptoms or need immediate help, please contact the emergency hotline below:
            </p>
            <p className="text-2xl font-bold text-red-700 mt-4">
              <FaPhoneAlt /> +123 987 654
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
