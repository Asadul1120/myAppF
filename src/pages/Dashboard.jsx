import { useState } from "react";
import {
  Home,
  User,
  Settings,
  LogOut,
  Folder,
  BarChart2,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";



const Dashboard = () => {
  const [active, setActive] = useState("overview");


  return (
    <div className="min-h-screen flex bg-gray-900 text-gray-100 pt-36">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-gray-200 flex flex-col justify-between border-r border-gray-700">
        <div>
          <div className="p-6 text-2xl font-bold text-indigo-400 border-b border-gray-700">
            MyDashboard
          </div>

          <nav className="mt-6 space-y-1">
            {[
              { id: "overview", name: "Overview", icon: Home },
              { id: "projects", name: "Projects", icon: Folder },
              { id: "adminchat", name: "Messages", icon: MessageCircle },
              { id: "analytics", name: "Analytics", icon: BarChart2 },
              { id: "profile", name: "Profile", icon: User },
              { id: "settings", name: "Settings", icon: Settings },
            ].map(({ id, name, icon: Icon }) => (
              <Link
                key={id}
                onClick={() => setActive(id)}
                to={`/${id}`}
                className={`flex items-center w-full px-5 py-3 text-left transition ${
                  active === id
                    ? "bg-indigo-600 text-white"
                    : "hover:bg-gray-700 hover:text-indigo-400"
                }`}
              >
                <Icon className="mr-3" size={20} /> {name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="p-6 border-t border-gray-700">
          <Link to="/" className="flex items-center w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-md transition">
            <LogOut className="mr-3" size={18} /> Logout
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold text-white capitalize mb-8">
          {active}
        </h1>

        {/* Overview Section */}
        {active === "overview" && (
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Total Projects", value: "12" },
              { title: "Messages", value: "8" },
              { title: "Visitors", value: "1.2k" },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg hover:bg-gray-700 transition"
              >
                <h2 className="text-lg font-semibold mb-2 text-gray-300">
                  {card.title}
                </h2>
                <p className="text-3xl font-bold text-indigo-400">
                  {card.value}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Projects Section */}
        {active === "projects" && (
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((p) => (
              <div
                key={p}
                className="bg-gray-800 p-6 rounded-xl shadow-md hover:bg-gray-700 transition"
              >
                <h3 className="text-xl font-semibold text-indigo-400 mb-2">
                  Project #{p}
                </h3>
                <p className="text-gray-400 mb-4">
                  A short description of your awesome project.
                </p>
                <button className="text-indigo-400 hover:text-indigo-300 font-semibold">
                  View Details
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Profile Section */}
        {active === "profile" && (
          <div className="bg-gray-800 p-8 rounded-xl shadow-md max-w-lg">
            <img
              src="https://i.pravatar.cc/150?img=8"
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-indigo-500 mx-auto mb-4"
            />
            <h2 className="text-center text-2xl font-bold text-white mb-2">
              Asadul Islam
            </h2>
            <p className="text-center text-gray-400 mb-4">
              Full Stack Developer
            </p>
            <button className="block mx-auto bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition">
              Edit Profile
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
