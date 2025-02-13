import { IoMdAttach } from "react-icons/io";
import { useChat } from "../../hooks/useChat";
import { FaRegStopCircle } from "react-icons/fa";

const ChatInput = () => {
  const { sendMessage, stopTyping, typing } = useChat();

  return (
    <>
      <div className="border-gray-200 p-4">
        {typing && (
          <button
            className="fixed bottom-[120px] left-[56%] flex size-10 items-center justify-center rounded-full bg-gray-200 text-red-500 shadow-md transition-opacity duration-200 hover:bg-gray-300"
            onClick={stopTyping}
          >
            <FaRegStopCircle />
          </button>
        )}
        <div className="relative mx-auto max-w-4xl">
          <input
            type="text"
            placeholder="Enter your message or upload a file..."
            className="w-full rounded-lg border border-gray-300 p-4 pr-24 focus:border-blue-500 focus:outline-none"
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
      </div>
    </>
  );
};

export default ChatInput;
