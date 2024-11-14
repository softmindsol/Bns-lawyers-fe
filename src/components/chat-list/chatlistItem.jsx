import React from 'react';

const ChatListItem = ({ title, time, preview, isActive, isDarkMode, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`w-full p-4 rounded-xl mb-2 text-left transition-all ${
        isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
      } ${isActive ? 'bg-blue-50 text-blue-800' : ''}`}
    >
      <div className="flex justify-between items-start mb-1">
        <span className="font-semibold">{title}</span>
        <span className="text-xs text-gray-500">{time}</span>
      </div>
      <p className="text-sm text-gray-500 truncate">{preview}</p>
    </button>
  );
};
