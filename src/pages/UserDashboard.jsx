import  { useState } from "react";

const UserDashboard = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-64 p-6">
        <h2 className="text-2xl font-bold text-center mb-8">CancerAwareness</h2>
        <div className="space-y-6">
          <a href="/" className="block text-lg hover:bg-gray-700 p-2 rounded">
            Dashboard
          </a>
          <a href="/community" className="block text-lg hover:bg-gray-700 p-2 rounded">
            Community
          </a>
          <a href="/appointments" className="block text-lg hover:bg-gray-700 p-2 rounded">
            Appointments
          </a>
          <a href="/diet" className="block text-lg hover:bg-gray-700 p-2 rounded">
            Diet
          </a>
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
                  <li className="text-gray-700 cursor-pointer">Change Profile</li>
                  <li className="text-gray-700 cursor-pointer">Change Username</li>
                  <li className="text-gray-700 cursor-pointer">Logout</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6 flex flex-col gap-6 bg-gray-100 h-full">
          <h2 className="text-2xl font-bold text-gray-800">Welcome to Your Dashboard</h2>

          {/* Informative Information about Cancer */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700">Learn About Cancer</h3>
            <p className="text-gray-600 mt-2">
              Cancer is a disease in which some of the body&apos;s cells grow uncontrollably and spread to other parts of the body.
              Early detection and treatment are crucial for survival. Regular check-ups and a healthy lifestyle can reduce the risk.
            </p>
          </div>

          {/* Community, Appointments, and Diet */}
          <div className="flex gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md w-1/3">
              <h3 className="text-xl font-semibold text-gray-700">Community</h3>
              <p className="text-gray-600 mt-2">Join our community discussions and support groups.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md w-1/3">
              <h3 className="text-xl font-semibold text-gray-700">Appointments</h3>
              <p className="text-gray-600 mt-2">Book an appointment with a doctor for consultations and check-ups.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md w-1/3">
              <h3 className="text-xl font-semibold text-gray-700">Diet</h3>
              <p className="text-gray-600 mt-2">Get personalized cancer prevention diet recommendations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
