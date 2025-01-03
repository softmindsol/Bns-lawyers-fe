import React, { useState } from 'react';
import Sidebar from '../../components/sidebar/sidebar';
import ChatArea from '../../components/chat/chatArea';
import SettingsPanel from '../../components/settings-panel/settingsPanel';
import { DarkModeProvider, useDarkMode } from '../../components/context/darkmaodeContext';
import UseChatMessages from '../../components/hooks/usechatMassages';

const DashboardContent = () => {
  const { isDarkMode, setIsDarkMode } = useDarkMode();
  const [activeTab, setActiveTab] = useState('chat');
  const [activeChat, setActiveChat] = useState(null);
  const { messages, addMessage } = UseChatMessages();

  const handleSendMessage = content => {
    addMessage(content, false);
    // Simulate AI response
    setTimeout(() => {
      addMessage(
        "I'll analyze your request and provide a detailed response shortly...",
        true
      );
    }, 1000);
  };

  return (
    <div className='grid grid-cols-[1fr_5fr]'>
      <Sidebar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <ChatArea
        isDarkMode={isDarkMode}
        activeChat={activeChat}
        messages={messages}
        onSendMessage={handleSendMessage}
      />
    </div>
  );
};

const Dashboard = () => {
  return (
    <DarkModeProvider>
      <DashboardContent />
    </DarkModeProvider>
  );
};

export default Dashboard;
