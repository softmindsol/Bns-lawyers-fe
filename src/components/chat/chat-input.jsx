import { IoMdAttach } from "react-icons/io";
import { useChat } from "../../hooks/useChat";
import { FaRegStopCircle } from "react-icons/fa";
import { useState } from "react";

const ChatInput = () => {
  const { sendMessage, stopTyping, typing } = useChat();
  const [focused, setFocused] = useState(false);

  return (
    <div className="sticky bottom-0 z-10 w-full bg-white border-t border-gray-200">
      <div className="p-4">
        {typing && (
          <button
            className="absolute bottom-[120px] left-[56%] flex size-10 items-center justify-center rounded-full bg-gray-200 text-red-500 shadow-md transition-all duration-200 hover:bg-gray-300 hover:shadow-lg z-20"
            onClick={stopTyping}
          >
            <FaRegStopCircle />
          </button>
        )}
        <div className="flex justify-center items-center">
          <div className="">
            <div className={"rounded-lg border border-gray-300 p-4 pr-12 focus:outline-none lg:w-[600px] transition-all duration-200 bg-white/80 backdrop-blur-sm hover:border-gray-400 focus:border-blue-500 "}>
              <input
                type="text"
                placeholder="Enter your message or upload a file..."
                className="w-full focus:outline-none "
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && e.target.value.trim()) {
                    sendMessage({ text: e.target.value.trim(), file: null });
                    e.target.value = "";
                  }
                }}
              />
               <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
              <IoMdAttach />
            </button>
            </div>
            {/* <div className="relative w-full">
            <input
              type="text"
              placeholder="Enter your message or upload a file..."
              className="w-full rounded-lg border border-gray-200 p-4 pr-24 text-sm shadow-sm focus:border-blue-500 focus:outline-none md:text-base"
              onKeyDown={(e) => {
                if (e.key === "Enter" && e.target.value.trim()) {
                  sendMessage({ text: e.target.value.trim(), file: null });
                  e.target.value = "";
                }
              }}
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
              <IoMdAttach />
            </button>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;