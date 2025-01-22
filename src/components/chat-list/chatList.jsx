import { useState } from "react";
import { AiOutlineSearch, AiOutlineHistory } from "react-icons/ai";
import { BsThreeDots, BsLightningCharge } from "react-icons/bs";
import ChatListItem from "./ChatListItem";

const ChatList = ({ isDarkMode, setActiveChat }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const chats = [
    {
      id: 1,
      title: "Contract Analysis",
      time: "2h ago",
      preview: "Reviewed employment contract...",
    },
    {
      id: 2,
      title: "Legal Research",
      time: "5h ago",
      preview: "Case law regarding...",
    },
    {
      id: 3,
      title: "Client Consultation",
      time: "1d ago",
      preview: "Meeting notes for...",
    },
  ];

  return (
    <div className={`w-80 ${isDarkMode ? "bg-gray-800" : "bg-white"} border-r`}>
      <div className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold">Legal Assistant</h2>
          <button className="rounded-lg p-2 hover:bg-gray-100">
            <BsThreeDots className="h-5 w-5" />
          </button>
        </div>

        <button className="flex w-full items-center justify-center space-x-2 rounded-2xl bg-blue-600 p-4 text-white transition-colors hover:bg-blue-700">
          <BsLightningCharge className="h-5 w-5" />
          <span>New Consultation</span>
        </button>

        <div className="relative mt-6">
          <AiOutlineSearch className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full rounded-xl py-2 pl-10 pr-4 ${
              isDarkMode ? "border-gray-600 bg-gray-700" : "bg-gray-100"
            } transition-all focus:ring-2 focus:ring-blue-500`}
            placeholder="Search conversations..."
          />
        </div>
      </div>

      <div className="px-3">
        <div className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-500">
          <AiOutlineHistory className="h-4 w-4" />
          <span>Recent Conversations</span>
        </div>

        {chats
          .filter(
            (chat) =>
              chat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              chat.preview.toLowerCase().includes(searchQuery.toLowerCase()),
          )
          .map((chat, index) => (
            <ChatListItem
              key={chat.id}
              {...chat}
              isActive={index === 0}
              isDarkMode={isDarkMode}
              onClick={() => setActiveChat(chat)}
            />
          ))}
      </div>
    </div>
  );
};

export default ChatList;
