import { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineFileText,
  AiOutlineShareAlt,
} from "react-icons/ai";
import Logo from "../../assets/sidebarlogo.png";
import shuttle from "../../assets/shuttle.png";

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
    { label: "Home", icon: <AiOutlineHome size={20} />, link: "/home" },
    {
      label: "Getting Started",
      icon: <AiOutlineFileText size={20} />,
      link: "#",
    },
    {
      label: "Prepare Contract",
      icon: <AiOutlineFileText size={20} />,
      link: "#",
    },
  ];

  return (
    <div className="mx-6 my-6 flex h-screen w-72 flex-col bg-white shadow-xl">
      <div className="border-b p-2">
        <div className="flex items-center justify-center">
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
                className={`flex items-center space-x-3 rounded-lg p-2 ${
                  selected === item.label
                    ? "bg-[#0057FF] text-white"
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
                className={`flex items-center space-x-3 rounded-lg p-2 ${
                  selected === "Share Feedback"
                    ? "bg-[#0057FF] text-white"
                    : "text-[#0A2540] hover:bg-gray-100"
                }`}
              >
                <AiOutlineShareAlt size={20} />
                <span>Share Feedback</span>
              </a>

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
                    className="absolute bottom-3 right-4 rounded-md bg-mygradient1 px-4 py-2 text-[14px] text-sm font-medium text-white transition-colors hover:bg-blue-700"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>

      <div className="mx-2 my-4 rounded-[6px] border-t bg-[#F4F4F9] px-4 py-2">
        <a
          href="#"
          className={`flex items-center space-x-3 rounded-lg ${
            selected === "Upgrade Plan"
              ? "bg-[#0057FF] text-white"
              : "text-[#0A2540] hover:bg-gray-100"
          }`}
          onClick={() => setSelected("Upgrade Plan")}
        >
          <div>
            <img src={shuttle} alt="Shuttle" />
          </div>
          <div>
            <h1 className="text-[16px] font-medium text-[#0A2540]">
              Upgrade Plan
            </h1>
            <span className="text-[10px] font-normal text-textgray">
              More access to the best plans
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
