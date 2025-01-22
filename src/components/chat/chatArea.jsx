import { useState } from "react";
import { FaRegFilePdf } from "react-icons/fa6";
import { IoMdAttach } from "react-icons/io";
import useAuthStore from "../../../stores/authStore";

const ChatArea = () => {
  const { user: { data: { first_name } = {}, loading } = {} } = useAuthStore();
  const [messages, setMessages] = useState([]);
  const [isNewChat, setIsNewChat] = useState(true);

  const handleSendMessage = ({ text, file }) => {
    setIsNewChat(false);
    const newMessage = {
      id: Date.now(),
      text,
      file,
      sender: "user",
    };
    setMessages((prev) => [...prev, newMessage]);

    if (!file) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 1,
            text: "It seems like there might be a typo or error in your message. Could you clarify or provide more details?",
            file: null,
            sender: "ai",
          },
        ]);
      }, 1000);
    }
  };

  const handleNewQuery = () => {
    setIsNewChat(true);
    setMessages([]);
  };

  return (
    <div>
      <div className="flex h-[100vh] w-full flex-col bg-white px-20">
        {/* Header */}
        <div className="flex items-center justify-between p-6">
          {isNewChat && (
            <h2 className="flex items-center gap-2 text-xl font-normal">
              Hi, Welcome{" "}
              {loading ? (
                <div className="skeleton-loader h-5 w-20 rounded bg-gray-200"></div>
              ) : (
                <span>{first_name}!</span>
              )}
              👋
            </h2>
          )}
          <div className={`${isNewChat ? "" : "ml-auto"}`}>
            <button
              onClick={handleNewQuery}
              className="rounded-lg bg-mygradient1 px-4 py-2 text-white hover:bg-blue-700"
            >
              + New Query
            </button>
          </div>
        </div>

        {/* Chat Area */}
        {isNewChat ? (
          <div className="-mt-20 flex flex-1 flex-col items-center justify-center px-4">
            <div className="w-full max-w-xl space-y-8 text-center">
              <h1 className="mb-8 text-2xl font-semibold text-[#0A2540]">
                What can I help with?
              </h1>
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Enter your message or upload a file..."
                  className="w-full rounded-lg border border-gray-200 p-4 pr-24 shadow-sm focus:border-blue-500 focus:outline-none"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && e.target.value.trim()) {
                      handleSendMessage({
                        text: e.target.value.trim(),
                        file: null,
                      });
                      e.target.value = "";
                    }
                  }}
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <IoMdAttach />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-32">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-4 flex items-start gap-2 ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.sender === "ai" && (
                    <div className="h-8 w-8 flex-shrink-0 rounded-full bg-blue-100" />
                  )}
                  <div
                    className={`max-w-[80%] rounded-2xl p-4 ${
                      message.sender === "user"
                        ? "rounded-br-none bg-[#0057FF] text-white"
                        : "rounded-bl-none bg-[#F4F4F9] text-[#303841]"
                    }`}
                  >
                    {message.file ? (
                      <a
                        href={URL.createObjectURL(message.file)}
                        download={message.file.name}
                        className="flex items-center gap-2"
                      >
                        <FaRegFilePdf />
                        {message.file.name}
                      </a>
                    ) : (
                      <span className="text-[14px] font-normal">
                        {message.text}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area when in chat mode */}
            <div className="border-gray-200 p-4">
              <div className="relative mx-auto max-w-4xl">
                <input
                  type="text"
                  placeholder="Enter your message or upload a file..."
                  className="w-full rounded-lg border border-gray-300 p-4 pr-24 focus:border-blue-500 focus:outline-none"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && e.target.value.trim()) {
                      handleSendMessage({
                        text: e.target.value.trim(),
                        file: null,
                      });
                      e.target.value = "";
                    }
                  }}
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2">
                  📎
                </button>
                <button className="absolute right-12 top-1/2 -translate-y-1/2">
                  ?
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ChatArea;
