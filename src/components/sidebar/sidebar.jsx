import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineFileText,
  AiOutlineShareAlt,
  AiOutlineCreditCard,
} from "react-icons/ai";
import Logo from "../../assets/sidebarlogo.png";
import shuttle from "../../assets/shuttle.png"

const Sidebar = () => {
  const [selected, setSelected] = useState("Home");
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleFeedbackClick = () => {
    setSelected("Share Feedback");
    setShowFeedback(!showFeedback);
  };

  const handleSubmit = () => {
    console.log("Feedback submitted:", feedback);
    setFeedback("");
    setShowFeedback(false);
  };

  const menuItems = [
    { label: "Home", icon: <AiOutlineHome size={20} />, link: "#" },
    { label: "Getting Started", icon: <AiOutlineFileText size={20} />, link: "#" },
    { label: "Prepare Contract", icon: <AiOutlineFileText size={20} />, link: "#" },
  ];

  return (
    <div className="h-screen my-6 mx-6 w-72 bg-white shadow-xl flex flex-col">
      <div className="p-4 border-b">
        <div className="flex justify-center items-center">
          <img src={Logo} alt="Logo" />
        </div>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                onClick={() => setSelected(item.label)}
                className={`flex items-center space-x-3 p-2 rounded-lg ${
                  selected === item.label
                    ? "text-white bg-[#0057FF]"
                    : "text-[#0A2540] hover:bg-gray-100"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            </li>
          ))}

          <li>
            <div className="space-y-2">
              <a
                href="#"
                onClick={handleFeedbackClick}
                className={`flex items-center space-x-3 p-2 rounded-lg ${
                  selected === "Share Feedback"
                    ? "text-white bg-[#0057FF]"
                    : "text-[#0A2540] hover:bg-gray-100"
                }`}
              >
                <AiOutlineShareAlt size={20} />
                <span>Share Feedback</span>
              </a>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  showFeedback ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="relative mt-6 px-2">
                  <textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Share your feedback here..."
                    className="w-full h-[247px] p-3 text-sm border border-[#CCCCCC] bg-[#F9F9FC] rounded-lg resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <button
                    onClick={handleSubmit}
                    className="absolute bottom-3 text-[14px] font-medium right-4 bg-mygradient1 text-white px-4 py-2 text-sm rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>

      <div className="px-4 py-2 my-4 mx-2 rounded-[6px] bg-[#F4F4F9] border-t">
        <a
          href="#"
          className={`flex items-center space-x-3 rounded-lg ${
            selected === "Upgrade Plan"
              ? "text-white bg-[#0057FF]"
              : "text-[#0A2540] hover:bg-gray-100"
          }`}
          onClick={() => setSelected("Upgrade Plan")}
        >
          <div><img src={shuttle} alt="Shuttle" /></div>
          <div>
            <h1 className="text-[#0A2540] text-[16px] font-medium">Upgrade Plan</h1>
            <span className="text-textgray text-[10px] font-normal">More access to the best plans</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;