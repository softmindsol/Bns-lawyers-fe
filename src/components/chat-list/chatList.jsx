import React, { useState } from 'react';
import { AiOutlineSearch, AiOutlineHistory } from 'react-icons/ai';
import { BsThreeDots, BsLightningCharge } from 'react-icons/bs';
import ChatListItem from './ChatListItem';

const ChatList = ({ isDarkMode, setActiveChat }) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const chats = [
    { id: 1, title: "Contract Analysis", time: "2h ago", preview: "Reviewed employment contract..." },
    { id: 2, title: "Legal Research", time: "5h ago", preview: "Case law regarding..." },
    { id: 3, title: "Client Consultation", time: "1d ago", preview: "Meeting notes for..." }
  ];

  return (
    <div className={`w-80 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-r`}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Legal Assistant</h2>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <BsThreeDots className="w-5 h-5" />
          </button>
        </div>

        <button className="w-full bg-blue-600 text-white p-4 rounded-2xl flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors">
          <BsLightningCharge className="w-5 h-5" />
          <span>New Consultation</span>
        </button>

        <div className="relative mt-6">
          <AiOutlineSearch className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full pl-10 pr-4 py-2 rounded-xl ${
              isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100'
            } focus:ring-2 focus:ring-blue-500 transition-all`}
            placeholder="Search conversations..."
          />
        </div>
      </div>

      <div className="px-3">
        <div className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-500">
          <AiOutlineHistory className="w-4 h-4" />
          <span>Recent Conversations</span>
        </div>
        
        {chats
          .filter(chat => 
            chat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            chat.preview.toLowerCase().includes(searchQuery.toLowerCase())
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
