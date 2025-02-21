import { useChat } from "../../hooks/useChat";
import { FaRegStopCircle } from "react-icons/fa";
import { useState } from "react";
import { IoSendSharp } from "react-icons/io5";

const ChatInput = () => {
  const { sendMessage, stopTyping, typing } = useChat();
  const [setFocused] = useState(false);

  return (
    <div className="sticky bottom-0 z-10 w-full border-t border-gray-200 bg-white">
      <div className="p-4">
        {typing && (
          <button
            className="absolute bottom-[120px] left-[48%] z-20 flex size-10 items-center justify-center rounded-full bg-gray-200 text-red-500 shadow-md transition-all duration-200 hover:bg-gray-300 hover:shadow-lg"
            onClick={stopTyping}
          >
            <FaRegStopCircle />
          </button>
        )}
        <div className="flex items-center justify-center">
          <div
            className={
              "rounded-lg border border-gray-300 bg-white/80 p-4 pr-12 backdrop-blur-sm transition-all duration-200 hover:border-gray-400 focus:border-blue-500 focus:outline-none lg:w-[600px]"
            }
          >
            <input
              type="text"
              placeholder="Enter your message to Ask Anything"
              className="w-full focus:outline-none"
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
              <IoSendSharp />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
