import React from 'react';
import { AiOutlineMessage, AiOutlineTeam, AiOutlineBarChart, AiOutlineSetting } from 'react-icons/ai';
import { BiBot, BiBookOpen } from 'react-icons/bi';
import SidebarButton from './sidebarButton';

const Sidebar = ({ isDarkMode, setIsDarkMode, activeTab, setActiveTab }) => {
  const navigationItems = [
    { icon: <AiOutlineMessage />, label: 'Chat', id: 'chat' },
    { icon: <BiBookOpen />, label: 'Templates', id: 'templates' },
    { icon: <AiOutlineTeam />, label: 'Team', id: 'team' },
    { icon: <AiOutlineBarChart />, label: 'Analytics', id: 'analytics' },
  ];

  return (
    <div className={`w-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-r flex flex-col items-center py-8 space-y-8`}>
      <div className="flex flex-col items-center space-y-2">
        <div className="px-3 py-3 bg-[#0057ff] rounded-2xl flex items-center justify-center hover:scale-110 transition-transform">
          <BiBot className="w-8 h-8 text-white" />
        </div>
      </div>
      
      <nav className="flex-1 flex flex-col items-center space-y-6">
        {navigationItems.map((item) => (
          <SidebarButton
            key={item.id}
            icon={item.icon}
            label={item.label}
            isActive={activeTab === item.id}
            onClick={() => setActiveTab(item.id)}
          />
        ))}
      </nav>

      <div className="flex flex-col items-center space-y-4">
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="w-12 h-12 rounded-2xl flex items-center justify-center text-gray-500 hover:bg-blue-50 hover:text-blue-600"
        >
          <AiOutlineSetting className="w-6 h-6" />
        </button>
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center text-white">
          JD
        </div>
      </div>
    </div>
  );
};

export default Sidebar;  