

import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaBed, FaHotel } from "react-icons/fa";

function SideBar() {
  const navItems = [
    { name: "Home", path: "/", icon: <FaHome size={20} /> },
    { name: "Bookings", path: "/bookings", icon: <FaBed size={20} /> },
    { name: "Cabins", path: "/cabins", icon: <FaHotel size={20} /> },
  ];

  return (
    <aside className="h-full w-64 bg-white shadow-md flex flex-col items-center py-6 row-span-full">
      {/* Logo */}
      <div className="mb-10">
        <img
          className="h-24 w-auto"
          src="https://images.seeklogo.com/logo-png/53/1/emerald-hotel-logo-png_seeklogo-535618.png?v=1957813754941888560"
          alt="Emerald Hotel Logo"
        />
      </div>

      {/* Navigation */}
      <nav className="flex-1 w-full">
        <ul className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center w-full px-6 py-3 rounded-lg text-gray-700 font-medium hover:bg-indigo-100 transition ${
                    isActive ? "bg-indigo-200 text-indigo-700" : ""
                  }`
                }
              >
                {/* Icon */}
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default SideBar;
