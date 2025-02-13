import { createContext, useContext, useState } from "react";
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
        const response = await fetch(OPEN_API_URL, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${OPEN_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "gpt-4",
            messages: [{ role: "user", content: text }],
            temperature: 0.7,
            stream: true,
          }),
        });

        if (!response.body) {
          throw new Error("No response body");
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let accumulatedMessage = "";

        while (true) {
          const { value, done } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value, { stream: true });
          const lines = chunk.split("\n");

          for (const line of lines) {
            if (line.startsWith("data: ")) {
              const jsonString = line.replace("data: ", "").trim();
              if (jsonString === "[DONE]") break;

              try {
                const parsedData = JSON.parse(jsonString);
                const newText = parsedData.choices?.[0]?.delta?.content || "";

                accumulatedMessage += newText;
                setTypingMessage(accumulatedMessage);
              } catch (error) {
                console.error("Error parsing stream chunk:", error);
              }
            }
          }
        }

        setMessages((prev) => [
          ...prev,
          { id: Date.now(), text: accumulatedMessage, sender: "ai" },
        ]);
        setTyping(false);
        setTypingMessage("");
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

  const stopChat = () => {
    setMessages([]);
    setTyping(false);
    setTypingMessage("");
  };

  return (
    <ChatContext.Provider
      value={{ messages, sendMessage, stopChat, typing, typingMessage }}
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
