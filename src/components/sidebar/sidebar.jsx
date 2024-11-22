import React, { useState } from 'react';
import { FiMenu, FiX } from "react-icons/fi";
import { RiHome4Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";
import { BiBot } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "", href: "/home", icon: RiHome4Line },
    { name: "", href: "/prtition-form", icon: CgNotes },
    { name: "", href: "/prepare-contract", icon: IoSettingsOutline },
  ];

  const isLinkActive = (href) => {
    if (typeof window !== "undefined") {
      return window.location.pathname === href;
    }
    return false;
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative max-w-[30rem] h-full">
      <div className="flex bg-white justify-center border-r items-center pt-3">
        <div className="px-3 py-3 bg-[#0057ff] rounded-2xl flex items-center justify-center hover:scale-110 transition-transform">
          <BiBot className="w-8 h-8 text-white" />
        </div>
      </div>

      {/* Sidebar for larger screens */}
      <div className="bg-white border-r min-h-screen h-full sticky top-0 py-8 w-36 space-y-6 hidden lg:block">
        <nav>
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className="py-2 px-6 mb-1 flex justify-center items-center hover:bg-gray-50 transition-colors"
            >
              {React.createElement(link.icon, {
                className: `text-2xl transition-colors ${
                  isLinkActive(link.href)
                    ? "text-[#0057ff]"
                    : "text-gray-600 hover:text-gray-900"
                }`,
              })}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Menu Icon */}
      <div className="lg:hidden flex items-center p-2">
        <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 bg-white border-r text-gray-900 h-screen p-5 w-64 space-y-6 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="flex justify-between items-center">
          <div className="px-3 py-3 bg-[#0057ff] rounded-2xl flex items-center justify-center">
            <BiBot className="w-8 h-8 text-white" />
          </div>
          <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
            <FiX />
          </button>
        </div>
        <nav className="mt-8">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className="block py-2 px-3 mb-2 rounded hover:bg-gray-50 transition-colors"
            >
              {React.createElement(link.icon, {
                className: `text-2xl ${
                  isLinkActive(link.href)
                    ? "text-[#0057ff]"
                    : "text-gray-600 hover:text-gray-900"
                }`,
              })}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;