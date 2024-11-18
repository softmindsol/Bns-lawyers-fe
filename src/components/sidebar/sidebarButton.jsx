import React from 'react';

const SidebarButton = ({ icon, label, onClick, isActive }) => {
  return (
    <div className='flex justify-center items-center hap-5'>   
    <button 
      onClick={onClick}
      className={`w-12 h-12 rounded-2xl flex items-center justify-center text-gray-500 hover:bg-blue-50 hover:text-blue-600 transition-all group ${
        isActive ? 'bg-blue-50 text-blue-600' : ''
      }`}
    >
      <div className="w-6 h-6 flex justify-center items-center">
        {icon}
      </div>
   
    </button>
       <span className=" ">
       {label}
     </span>
     </div>
  );
};

export default SidebarButton;  // Exporting as default
