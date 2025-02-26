import { createContext, useContext, useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import http from "../utils/http";

const ChatContext = createContext();

async function getLawsData(payload) {
  try {
    const response = await http.post(`/chat/send`, payload);
    const data = response?.data;
    return data?.response;
  } catch (error) {
    console.error("Failed to fetch laws data:", error);
    throw error;
  }
}

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);
  const [typingMessage, setTypingMessage] = useState("");
  const [threadId, setThreadId] = useState(uuidv4());
  const abortControllerRef = useRef(null);

  const sendMessage = async ({ text }) => {
    setMessages((prev) => [...prev, { id: Date.now(), text, sender: "user" }]);

    setTyping(true);
    setTypingMessage("");

    abortControllerRef.current = new AbortController();
    const { signal } = abortControllerRef.current;

    try {
      const lawsData = await getLawsData({
        message: text,
        thread_id: threadId,
      });

      setMessages((prev) => [
        ...prev,
        { id: Date.now(), text: lawsData, sender: "ai" },
      ]);
      setTyping(false);
      setTypingMessage("");
    } catch (error) {
      if (signal.aborted) {
        console.log("Yanıt manuel olarak durduruldu.");
      } else {
        console.error("Akış Hatası:", error);
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now(),
            text: "Yanıt alınırken hata oluştu.",
            sender: "ai",
          },
        ]);
      }
      setTyping(false);
      setTypingMessage("");
    }
  };

  const stopTyping = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      setTyping(false);
      setTypingMessage("");
    }
  };

  const stopChat = () => {
    setMessages([]);
    setTyping(false);
    setTypingMessage("");
    setThreadId(uuidv4());
  };

  return (
    <ChatContext.Provider
      value={{
        messages,
        sendMessage,
        stopTyping,
        stopChat,
        typing,
        typingMessage,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};
