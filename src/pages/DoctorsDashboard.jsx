import { useState } from "react";
import { FaCalendarAlt, FaUsers, FaVideo, FaSearch, FaUserCircle } from "react-icons/fa";

const DoctorDashboard = () => {
  const [open, setOpen] = useState(false);
  const [appointments] = useState([
    { id: 1, patient: "John Doe", date: "2025-02-15", time: "10:00 AM", status: "Pending" },
    { id: 2, patient: "Jane Smith", date: "2025-02-16", time: "11:30 AM", status: "Confirmed" },
  ]);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-blue-900 text-white w-64 p-6">
        <h2 className="text-2xl font-bold text-center mb-8">Doctor&apos;s Panel</h2>
        <div className="space-y-6">
          <a href="/appointments" className="flex items-center gap-3 text-lg hover:bg-blue-700 p-2 rounded">
            <FaCalendarAlt /> Appointments
          </a>
          <a href="/community" className="flex items-center gap-3 text-lg hover:bg-blue-700 p-2 rounded">
            <FaUsers /> Community
          </a>
          <a href="/schedule-meeting" className="flex items-center gap-3 text-lg hover:bg-blue-700 p-2 rounded">
            <FaVideo /> Schedule Meeting
          </a>
        </div>
      </div>

      <div className="flex flex-col w-full">
        {/* Navbar */}
        <div className="bg-white p-4 shadow-md flex justify-between items-center">
          <div className="flex items-center gap-4">
            <FaSearch className="text-gray-600" />
            <input type="text" placeholder="Search..." className="border p-2 rounded-md w-64" />
          </div>
          <div className="relative">
            <FaUserCircle className="text-3xl text-gray-700 cursor-pointer" onClick={() => setOpen(!open)} />
            {open && (
              <div className="absolute right-0 bg-white shadow-md p-4 mt-2 w-48 rounded-lg">
                <ul className="space-y-4">
                  <li className="text-gray-700 cursor-pointer">Profile Settings</li>
                  <li className="text-gray-700 cursor-pointer">Logout</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6 bg-gray-100 h-full">
          <h2 className="text-2xl font-bold text-gray-800">Doctor&apos;s Dashboard</h2>

          {/* Appointments Section */}
          <div className="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 className="text-xl font-semibold text-gray-700">Appointments</h3>
            <div className="mt-4 space-y-4">
              {appointments.map((appointment) => (
                <div key={appointment.id} className="flex justify-between bg-gray-200 p-4 rounded-md">
                  <p className="text-gray-800">{appointment.patient} - {appointment.date} at {appointment.time}</p>
                  <span className={`text-sm font-semibold ${appointment.status === "Confirmed" ? "text-green-600" : "text-yellow-600"}`}>{appointment.status}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Schedule Meeting Button */}
          <div className="mt-6">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md flex items-center gap-2">
              <FaVideo /> Schedule a Video Meeting
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
