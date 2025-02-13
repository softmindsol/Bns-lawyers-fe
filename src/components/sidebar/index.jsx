import { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineFileText,
  AiOutlineShareAlt,
} from "react-icons/ai";
import Logo from "../../assets/sidebarlogo.png";
import { NavLink, useLocation } from "react-router-dom";
import UpgradePlan from "./upgrade-plan";
import FeedBack from "./feedback";

const Sidebar = ({ isOpen, onClose }) => {
  const [showFeedback, setShowFeedback] = useState(false);
  const location = useLocation();

  const handleFeedbackClick = () => {
    setShowFeedback(!showFeedback);
  };

  const menuItems = [
    { label: "Home", icon: <AiOutlineHome size={20} />, link: "/home" },
    {
      label: "Petition Form",
      icon: <AiOutlineFileText size={20} />,
      link: "/petition-form",
    },
    {
      label: "Prepare Contract",
      icon: <AiOutlineFileText size={20} />,
      link: "/prepare-contract",
    },
  ];

  return (
    <div
      className={`fixed left-0 top-0 z-50 h-screen w-72 transform bg-white shadow-xl transition-transform duration-300 lg:static lg:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="border-b p-4">
        <div className="flex items-center justify-center">
          <img src={Logo} alt="Logo" />
        </div>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.link}
                className={`flex items-center space-x-3 rounded-lg p-2 ${
                  location.pathname === item.link
                    ? "bg-[#0057FF] text-white"
                    : "text-[#0A2540] hover:bg-gray-100"
                }`}
                onClick={onClose}
              >
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}

          <li>
            <div className="space-y-2">
              <button
                className={`flex w-full items-center space-x-3 rounded-lg p-2 ${
                  showFeedback
                    ? "bg-[#0057FF] text-white"
                    : "text-[#0A2540] hover:bg-gray-100"
                }`}
                onClick={handleFeedbackClick}
              >
                <AiOutlineShareAlt size={20} />
                <span>Share Feedback</span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  showFeedback
                    ? "max-h-[300px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <FeedBack {...setShowFeedback} />
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <UpgradePlan setShowFeedback={() => setShowFeedback(false)} />
    </div>
  );
};

export default Sidebar;
