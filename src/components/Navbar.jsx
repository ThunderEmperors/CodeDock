import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-gray-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        
        <Link to="/" className="text-2xl font-bold text-blue-400">
          CodeDock
        </Link>

        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `hover:text-blue-400 transition ${
                  isActive ? "text-blue-400 font-semibold" : ""
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className="md:hidden">
          <button className="text-white focus:outline-none">☰</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
