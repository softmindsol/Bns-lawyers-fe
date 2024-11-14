import React, { useState } from 'react';
import { 
  AiOutlineMessage, AiOutlineTeam, AiOutlineBarChart, AiOutlineSetting,
  AiOutlineSearch, AiOutlineHistory,
  AiOutlinePaperClip
} from 'react-icons/ai';
import { BiBot, BiBookOpen } from 'react-icons/bi';
import { BsThreeDots, BsLightningCharge } from 'react-icons/bs';
import { useDarkMode } from '../context/darkmaodeContext';

const SidebarButton = ({ icon, label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-12 h-12 rounded-2xl flex items-center justify-center text-gray-500 hover:bg-blue-50 hover:text-blue-600 ${
        isActive ? 'bg-blue-50 text-blue-600' : ''
      }`}
    >
      {icon}
    </button>
  );
};

const ChatListItem = ({ id, title, time, preview, isActive, isDarkMode, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-start space-x-3 px-3 py-2 rounded-lg transition-colors hover:bg-gray-100 ${
        isActive
          ? 'bg-blue-50 dark:bg-[#f3f4f6] text-blue-600 dark:text-blue-400'
          : isDarkMode
            ? 'bg-gray-800 text-white'
            : 'bg-white text-gray-700'
      }`}
    >
      <div className="flex-1 text-start">
        <h4 className="font-semibold mb-1 text-[#303841]">{title}</h4>
        <p className="text-sm text-[#303841]">{preview}</p>
      </div>
      <div className="text-sm text-gray-400">{time}</div>
    </button>
  );
};

const ChatHeader = ({ title, isDarkMode }) => {
  return (
    <div className={`p-6 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
      <h2 className="text-xl font-bold">{title}</h2>
    </div>
  );
};

const ChatInput = ({ isDarkMode, onSendMessage }) => {
  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null);

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      onSendMessage(message);
      setMessage('');
    }

 
  };

  return (
    <div className={`p-4 w-[75rem] flex items-center space-x-2 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-t`}>
    <input
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      className={`flex-1 px-4 py-2 rounded-xl ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100'} focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all`}
      placeholder="Enter your prompt..."
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleSendMessage(message, file);
        }
      }}
    />
    <div className="flex items-center space-x-2">
    <button
        onClick={() => handleSendMessage(message, file)}
        className={`p-2 rounded-full ${
          isDarkMode
            ? 'bg-blue-600 text-white hover:bg-blue-500'
            : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
        } transition-colors`}
      >
        <AiOutlineMessage className="w-5 h-5" />
      </button>
      <label htmlFor="file-input" className="cursor-pointer flex items-center px-2 py-2 rounded-full bg-[#f0f6ff]  text-white hover:bg-blue-100">
        <AiOutlinePaperClip
          className={"text-[#77a0f4] text-[24px] font-bold"}
        />
        <input
          id="file-input"
          type="file"
          accept="application/pdf"
          className="hidden"
          onChange={handleFileUpload}
        />
      </label>

    </div>
  </div>
);
};
const ChatMessage = ({ message, isAI, isDarkMode }) => {
  return (
    <div
      className={`flex ${
        isAI ? 'justify-start' : 'justify-end'
      } text-sm ${isDarkMode ? 'text-white' : 'text-gray-700'}`}
    >
      <div
        className={`max-w-xs p-3 rounded-2xl ${
          isAI
            ? `bg-[#fff] text-[#303831] shadow-md rounded-br-none`
            : `bg-[#0057ff] shadow-md text-white rounded-bl-none`
        }`}
      >
        {message}
      </div>
    </div>
  );
};

const ChatArea = () => {
  const { isDarkMode, setIsDarkMode } = useDarkMode();
  const [activeTab, setActiveTab] = useState('chat');
  const [activeChat, setActiveChat] = useState(null);
  const { messages, addMessage } = UseChatMessages();
  const [searchQuery, setSearchQuery] = useState('');

  const navigationItems = [
    { icon: <AiOutlineMessage />, label: 'Chat', id: 'chat' },
    { icon: <BiBookOpen />, label: 'Templates', id: 'templates' },
    { icon: <AiOutlineTeam />, label: 'Team', id: 'team' },
    { icon: <AiOutlineBarChart />, label: 'Analytics', id: 'analytics' },
  ];

  const chats = [
    { id: 1, title: "Contract Analysis", time: "2h ago", preview: "Reviewed employment contract..." },
 
  ];

  const handleSendMessage = (content) => {
    addMessage(content, false);
    // Simulate AI response
    setTimeout(() => {
      addMessage("I'll analyze your request and provide a detailed response shortly...", true);
    }, 1000);
  };

  return (
    <div className={`flex  h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-[#ffff]'}`}>

      {/* Chat List */}
      <div className={`w-80 ${isDarkMode ? 'bg-gray-800' : 'bg-gary-700'} border-r`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Legal Assistant</h2>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <BsThreeDots className="w-5 h-5" />
            </button>
          </div>

          <button className="w-full bg-[#0057ff] text-white p-4 rounded-2xl flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors">
            <BsLightningCharge className="w-5 h-5" />
            <span>New Consultation</span>
          </button>

          <div className="relative mt-6">
            <AiOutlineSearch className="w-5 h-5 absolute left-3 top-3 text-[#ced4da]" />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 rounded-xl ${
                isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 text-gray-800'
              } focus:ring-2 focus:ring-[#696969] transition-all`}
              placeholder="Search conversations..."
            />
          </div>
        </div>

        <div className="px-3">
          <div className="flex items-center space-x-2 px-3 py-6 text-[18px] text-[#303841] font-semibold">
            <AiOutlineHistory className="w-4 h-4 text-[18px] text-[#303841] font-semibold" />
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

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        <ChatHeader title={activeChat?.title} isDarkMode={isDarkMode} />
        
        <div className={`flex-1 overflow-y-auto p-6 ${isDarkMode ? 'bg-gray-900' : 'bg-[#f4f4f9]'}`}>
          <div className="w-full mx-auto space-y-6">
            {messages.map((message, index) => (
              <ChatMessage
                key={index}
                message={message.content}
                isAI={message.isAI}
                isDarkMode={isDarkMode}
              />
            ))}
          </div>
        </div>

        <ChatInput isDarkMode={isDarkMode} onSendMessage={handleSendMessage} />
      </div>


    </div>
  );
};

const UseChatMessages = () => {
  const [messages, setMessages] = useState([]);

  const addMessage = (content, isAI) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { content, isAI }
    ]);
  };

  return { messages, addMessage };
};

export default ChatArea;