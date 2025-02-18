import { createContext, useContext, useState, useRef } from "react";
import { BASE_URL, OPEN_API_KEY, OPEN_API_URL } from "../utils/config";

const ChatContext = createContext();

async function getLawsData(search) {
  try {
    const response = await fetch(
      `${BASE_URL}/yargitay/search/${encodeURIComponent(search)}`,
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data.current?.temperature_2m;
  } catch (error) {
    console.error("Failed to fetch laws data:", error);
    throw error;
  }
}

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
      // Fetch legal data
      const lawsData = await getLawsData(text);

      const response = await fetch(OPEN_API_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${OPEN_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-4",
          messages: [
            {
              role: "system",
              content:
                "Sen bir yapay zeka asistanısın ve Türk hukuku konusunda uzmanlaşmışsın. Tüm cevaplarını Türk hukukuna uygun olarak ver ve yalnızca Türkçe yanıtla.",
            },
            { role: "user", content: `${text} - Ek Bilgi: ${lawsData}` },
          ],
          temperature: 0.3,
          stream: true,
        }),
        signal,
      });

      if (!response.ok) throw new Error("Yargıtay Sistemi aktif değil.");

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let partialMessage = "";

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });

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
            console.error("Yargıtay Sistemi aktif değil.", error);
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
