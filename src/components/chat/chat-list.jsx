import { FaRegFilePdf } from "react-icons/fa6";
import { FiCopy } from "react-icons/fi";
import { useState } from "react";
import { useChat } from "../../hooks/useChat";

const ChatList = () => {
  const { messages, typing, typingMessage } = useChat();
  const [copiedMessageId, setCopiedMessageId] = useState(null);

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedMessageId(id);
    setTimeout(() => setCopiedMessageId(null), 2000);
  };

  const formatMessage = (text) => {
    try {
      const parsedJSON = JSON.parse(text);
      return (
        <pre className="rounded-md bg-gray-100 p-2 text-sm">
          {JSON.stringify(parsedJSON, null, 2)}
        </pre>
      );
    } catch (error) {
      console.error(error);
      return text.split("\n").map((line, index) => {
        if (/^[-•]\s/.test(line)) {
          return (
            <li key={index} className="ml-4 list-disc">
              {formatInline(line.replace(/^[-•]\s/, ""))}
            </li>
          );
        }

        return (
          <p key={index} className="mb-1">
            {formatInline(line)}
          </p>
        );
      });
    }
  };

  const formatInline = (text) => {
    return text.split(/(\*\*.*?\*\*|\*.*?\*)/).map((part, i) => {
      if (/^\*\*(.*?)\*\*$/.test(part)) {
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      }
      if (/^\*(.*?)\*$/.test(part)) {
        return <em key={i}>{part.slice(1, -1)}</em>;
      }
      return part;
    });
  };

  return (
    <div className="flex-1">
      {messages?.map((message) => (
        <div
          key={message.id}
          className={`mb-4 flex items-start gap-2 ${
            message.sender === "user" ? "justify-end" : "justify-start"
          }`}
        >
          {message.sender === "ai" && (
            <div className="h-8 w-8 flex-shrink-0 rounded-full bg-blue-100" />
          )}
          <div
            className={`group relative max-w-[80%] rounded-2xl p-4 ${
              message.sender === "user"
                ? "rounded-br-none bg-[#0057FF] text-white"
                : "rounded-bl-none bg-[#F4F4F9] text-[#303841]"
            }`}
          >
            {message.file ? (
              <a
                href={URL.createObjectURL(message.file)}
                download={message.file.name}
                className="flex items-center gap-2"
              >
                <FaRegFilePdf />
                {message.file.name}
              </a>
            ) : (
              <div className="text-[14px] font-normal">
                {formatMessage(message.text)}
              </div>
            )}

            <button
              className="absolute right-1 top-2 flex size-6 items-center justify-center rounded-full bg-white text-black opacity-0 shadow-lg transition-opacity duration-200 hover:text-gray-700 group-hover:opacity-100"
              onClick={() => handleCopy(message.text, message.id)}
            >
              <FiCopy size={16} />
            </button>

            {copiedMessageId === message.id && (
              <span className="absolute -top-6 right-2 text-xs font-bold text-black">
                Copied!
              </span>
            )}
          </div>
        </div>
      ))}

      {typing && (
        <div className="mb-4 flex items-start justify-start gap-2">
          <div className="h-8 w-8 flex-shrink-0 rounded-full bg-blue-100" />
          <div className="max-w-[80%] rounded-2xl rounded-bl-none bg-[#F4F4F9] px-6 py-4 text-[#303841]">
            <span className="text-[14px] font-normal">
              {typingMessage?.length > 0 ? typingMessage : "Thinking ..."}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatList;
