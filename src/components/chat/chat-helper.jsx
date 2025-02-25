import { useChat } from "../../hooks/useChat";
import { IoSendSharp } from "react-icons/io5";

const ChatHelper = () => {
  const { sendMessage } = useChat();

  return (
    <>
      <div className="-mt-20 flex flex-1 flex-col items-center justify-center px-4">
        <div className="w-full max-w-xl space-y-8 text-center">
          <h1 className="mb-8 text-2xl font-semibold text-[#0A2540]">
            What can I help with?
          </h1>
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Enter your message to Ask Anything"
              className="w-full rounded-lg border border-gray-200 p-3 sm:p-4 pr-12 text-sm shadow-sm focus:border-blue-500 focus:outline-none md:text-base"
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
    </>
  );
};

export default ChatHelper;
