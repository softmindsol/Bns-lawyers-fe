import { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineFileText,
  AiOutlineShareAlt,
} from "react-icons/ai";
import Logo from "../../assets/sidebarlogo.png";
import { NavLink, useLocation } from "react-router-dom";
import UpgradePlan from "./upgrade-plan";

const Sidebar = ({ isOpen, onClose }) => {
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedback, setFeedback] = useState("");
  const location = useLocation();

  const handleFeedbackClick = () => {
    setShowFeedback(!showFeedback);
  };

  const handleSubmit = () => {
    console.log("Feedback submitted:", feedback);
    setFeedback("");
    setShowFeedback(false);
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
                <div className="relative mt-6 px-2">
                  <textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Share your feedback here..."
                    className="h-[247px] w-full resize-none rounded-lg border border-[#CCCCCC] bg-[#F9F9FC] p-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <button
                    onClick={handleSubmit}
                    className="absolute bottom-3 right-4 rounded-md bg-mygradient1 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                  >
                    Submit
                  </button>
                </div>
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
