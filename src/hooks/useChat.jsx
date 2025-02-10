import { createContext, useContext, useState } from "react";
import axios from "axios";
import { OPEN_API_KEY, OPEN_API_URL } from "../utils/config";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);
  const [typingMessage, setTypingMessage] = useState("");

  const sendMessage = async ({ text, file }) => {
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), text, file, sender: "user" },
    ]);

    if (!file) {
      setTyping(true);
      setTypingMessage("");

      try {
        const response = await axios.post(
          OPEN_API_URL,
          {
            model: "gpt-4",
            messages: [{ role: "user", content: text }],
            temperature: 0.7,
          },
          {
            headers: {
              Authorization: `Bearer ${OPEN_API_KEY}`,
              "Content-Type": "application/json",
            },
          },
        );

        const aiMessage =
          response.data.choices[0]?.message?.content ||
          "Sorry, I didn't understand that.";

        let index = 0;
        const interval = setInterval(() => {
          if (index < aiMessage.length) {
            setTypingMessage((prev) => prev + aiMessage[index]);
            index++;
          } else {
            clearInterval(interval);
            setTimeout(() => {
              setMessages((prev) => [
                ...prev,
                { id: Date.now() + 1, text: aiMessage, sender: "ai" },
              ]);
              setTyping(false);
              setTypingMessage("");
            }, 500);
          }
        }, 50);
      } catch (error) {
        console.error("OpenAI API Error:", error);
        setTyping(false);
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 1,
            text: "Error fetching response. Please try again.",
            sender: "ai",
          },
        ]);
      }
    }
  };

  const resetChat = () => {
    setMessages([]);
    setTyping(false);
    setTypingMessage("");
  };

  return (
    <ChatContext.Provider
      value={{ messages, sendMessage, resetChat, typing, typingMessage }}
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
