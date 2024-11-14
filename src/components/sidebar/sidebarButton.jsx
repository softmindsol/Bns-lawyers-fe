import React from 'react';

const SidebarButton = ({ icon, label, onClick, isActive }) => {
  return (
    <button 
      onClick={onClick}
      className={`w-12 h-12 rounded-2xl flex items-center justify-center text-gray-500 hover:bg-blue-50 hover:text-blue-600 transition-all group ${
        isActive ? 'bg-blue-50 text-blue-600' : ''
      }`}
    >
      <div className="w-6 h-6 flex justify-center items-center">
        {icon}
      </div>
      <span className="absolute left-20 bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity text-sm">
        {label}
      </span>
    </button>
  );
};

export default SidebarButton;  // Exporting as default
