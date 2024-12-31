import React, { useState } from "react";
import { FaRegFilePdf } from "react-icons/fa6";
import { IoMdAttach } from "react-icons/io";
import Navbar from "../navbar/navbar";

const ChatArea = () => {
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
      <Navbar />
      <div className="flex w-full px-20 flex-col h-[100vh] bg-white">
        {/* Header */}
        <div className="flex justify-between items-center p-6">
          {isNewChat && (
            <h2 className="text-xl font-normal">Hi, Welcome Sam! 👋</h2>
          )}
          <div className={`${isNewChat ? "" : "ml-auto"}`}>
            <button
              onClick={handleNewQuery}
              className="px-4 py-2 bg-mygradient1 text-white rounded-lg hover:bg-blue-700"
            >
              + New Query
            </button>
          </div>
        </div>

        {/* Chat Area */}
        {isNewChat ? (
          <div className="flex-1 flex flex-col justify-center items-center px-4 -mt-20">
            <div className="text-center space-y-8 max-w-xl w-full">
              <h1 className="text-2xl font-semibold text-[#0A2540] mb-8">
                What can I help with?
              </h1>
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Enter your message or upload a file..."
                  className="w-full p-4 pr-24 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 shadow-sm"
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
                  className={`flex items-start gap-2 mb-4 ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.sender === "ai" && (
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0" />
                  )}
                  <div
                    className={`p-4 rounded-2xl max-w-[80%] ${
                      message.sender === "user"
                        ? "bg-[#0057FF] text-white rounded-br-none"
                        : "bg-[#F4F4F9] text-[#303841] rounded-bl-none"
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
            <div className="p-4  border-gray-200">
              <div className="max-w-4xl mx-auto relative">
                <input
                  type="text"
                  placeholder="Enter your message or upload a file..."
                  className="w-full p-4 pr-24 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
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
