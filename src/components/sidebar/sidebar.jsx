import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { RiHome4Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";
import { BiBot } from "react-icons/bi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "", href: "/home", icon: RiHome4Line },
    { name: "", href: "/prtition-form", icon: CgNotes },
    {
      name: "",
      href: "/project-management",
      icon: IoSettingsOutline,
    },
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
    <div className="relative h-full">
      <div className="flex bg-white  justify-center border-r items-center pt-3">
        <div className="px-3  py-3 bg-[#0057ff] rounded-2xl flex items-center justify-center hover:scale-110 transition-transform">
          <BiBot className="w-8 h-8 text-white" />
        </div>
      </div>
      {/* Sidebar for larger screens */}
      <div className="bg-white text-blue border-r   min-h-screen h-full sticky top-0  py-8 w-64 space-y-6 hidden lg:block">
        <nav>
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className={` py-2 px-6 mb-1 flex justify-center items-center rounded-tr-[12px] rounded-br-[12px] rounded-tl-[0px] rounded-bl-[0px] ${
                isLinkActive(link.href)
                  ? "bg-[#0057ff] text-white text-[14px]  font-medium  rounded-tr-[4px] rounded-br-[4px]"
                  : "text-textblack text-[14px] font-medium"
              }`}
            >
              {React.createElement(link.icon, {
                className: "inline-block mr-2 text-[24px]",
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
        className={`fixed top-0 left-0 bg-gray-800 text-white h-screen p-5 w-64 space-y-6 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <h1 className="text-2xl font-bold">Logo</h1>
        <nav>
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className={`block py-2 px-3 rounded ${
                isLinkActive(link.href)
                  ? "bg-secondary text-white"
                  : "text-textblack hover:bg-gray-700 hover:text-white"
              }`}
            >
              {React.createElement(link.icon, {
                className: "inline-block mr-2",
              })}
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
