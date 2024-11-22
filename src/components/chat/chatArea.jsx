import React, { useState } from 'react';
import { 
  AiOutlineMessage, AiOutlineTeam, AiOutlineBarChart, AiOutlineSetting,
  AiOutlineSearch, AiOutlineHistory,
  AiOutlinePaperClip
} from 'react-icons/ai';
import { BiBot, BiBookOpen } from 'react-icons/bi';
import { BsThreeDots, BsLightningCharge } from 'react-icons/bs';
import { useDarkMode } from '../context/darkmaodeContext';
import { MdClose } from 'react-icons/md';
import { FaRegFilePdf } from 'react-icons/fa6';

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
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setMessage(uploadedFile.name); // Show file name in input
    }
  };

  const handleSendMessage = () => {
    if (file) {
      // Send file
      onSendMessage({ text: null, file });
      setFile(null);
      setMessage(''); // Clear input
    } else if (message.trim() !== '') {
      // Send text
      onSendMessage({ text: message, file: null });
      setMessage('');
    }
  };

  const handleClearFile = () => {
    setFile(null);
    setMessage(''); // Clear input
  };

  return (
    <div className="flex items-center gap-2 p-2 border-t">
      {file && (
        <div className="flex items-center gap-2 bg-gray-200 px-3 py-1 rounded-lg">
          <span className="text-sm">{file.name}</span>
          <button onClick={handleClearFile} className="text-red-500 text-sm">x</button>
        </div>
      )}
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className={`flex-1 px-4 py-2 rounded-xl ${
          isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-100 text-black'
        } focus:ring-2 focus:ring-blue-500 focus:outline-none`}
        placeholder="Enter your message or upload a file..."
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSendMessage();
          }
        }}
        disabled={!!file} // Disable input when a file is uploaded
      />
      <label className="cursor-pointer">
        <input type="file" onChange={handleFileUpload} className="hidden" />
        📎
      </label>
      <button onClick={handleSendMessage} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
        Send
      </button>
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
  const [messages, setMessages] = useState([]);
  const isDarkMode = false; // Replace with your dark mode logic

  const handleSendMessage = ({ text, file }) => {
    const newMessage = {
      id: Date.now(),
      text,
      file,
      sender: 'user', // Distinguish user messages from AI responses
    };
    setMessages((prev) => [...prev, newMessage]);

    if (!file) {
      // Simulate AI response for text
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 1,
            text: "I'll analyze your request shortly...",
            file: null,
            sender: 'ai',
          },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="flex w-full flex-col h-screen">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-100">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start gap-2 mb-4 ${
              message.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`p-3 rounded-lg ${
                message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'
              }`}
            >
              {message.file ? (
                <a
                  href={URL.createObjectURL(message.file)}
                  download={message.file.name}
                  className="text-white underline flex justify-center items-center gap-2"
                >
                  <FaRegFilePdf />

                  {message.file.name}
                </a>
              ) : (
                <span>{message.text}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <ChatInput isDarkMode={isDarkMode} onSendMessage={handleSendMessage} />
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