import { useState, useCallback } from 'react';

const UseChatMessages = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      content: "I've analyzed the employment contract and identified several key points that require attention:\n\n1. Non-compete clause duration extends beyond state limitations\n2. Intellectual property rights section needs clarification\n3. Severance package terms are ambiguous\n\nWould you like me to suggest specific revisions for any of these points?",
      isAI: true,
      timestamp: new Date().toISOString()
    },
    {
      id: 2,
      content: "Yes, please provide suggested revisions for the non-compete clause and intellectual property section.",
      isAI: false,
      timestamp: new Date().toISOString()
    }
  ]);

  const addMessage = useCallback((content, isAI = false) => {
    setMessages(prev => [...prev, {
      id: prev.length + 1,
      content,
      isAI,
      timestamp: new Date().toISOString()
    }]);
  }, []);

  return {
    messages,
    addMessage
  };
};

export default UseChatMessages;  // Default export
