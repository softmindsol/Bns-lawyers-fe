import { createContext, useContext, useState, useRef } from "react";
import { OPEN_API_KEY, OPEN_API_URL } from "../utils/config";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);
  const [typingMessage, setTypingMessage] = useState("");
  const abortControllerRef = useRef(null);

  const sendMessage = async ({ text }) => {
    setMessages((prev) => [...prev, { id: Date.now(), text, sender: "user" }]);

    setTyping(true);
    setTypingMessage("");

    abortControllerRef.current = new AbortController();
    const { signal } = abortControllerRef.current;

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
          stream: true, // Streaming enabled
        }),
        signal,
      });

      if (!response.ok) throw new Error("Failed to connect to API");

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let partialMessage = "";

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });

        // Extract only "content" from JSON
        const lines = chunk
          .split("\n")
          .map((line) => line.replace(/^data: /, "").trim())
          .filter((line) => line && line !== "[DONE]");

        for (const line of lines) {
          try {
            const json = JSON.parse(line);
            const content = json?.choices?.[0]?.delta?.content;
            if (content) {
              partialMessage += content;
              setTypingMessage(partialMessage);
            }
          } catch (error) {
            console.error("Error parsing chunk:", error);
          }
        }
      }

      setMessages((prev) => [
        ...prev,
        { id: Date.now(), text: partialMessage, sender: "ai" },
      ]);
      setTyping(false);
      setTypingMessage("");
    } catch (error) {
      if (signal.aborted) {
        console.log("Typing stopped manually.");
      } else {
        console.error("Streaming Error:", error);
        setMessages((prev) => [
          ...prev,
          { id: Date.now(), text: "Error fetching response.", sender: "ai" },
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
