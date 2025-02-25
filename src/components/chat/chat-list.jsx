import { FaRegFilePdf } from "react-icons/fa6";
import { logo_sm, typing_icon } from "../../assets";
import { FiCopy } from "react-icons/fi";
import { useState, useRef, useEffect } from "react";
import { useChat } from "../../hooks/useChat";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./markdown.style.css";
import { ReactSVG } from "react-svg";

const ChatList = () => {
  const { messages, typing, typingMessage } = useChat();
  const [copiedMessageId, setCopiedMessageId] = useState(null);
  const messagesEndRef = useRef(null);
  const containerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, typing]);

  useEffect(() => {
    const container = containerRef.current;
    let scrollTimer;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => setIsScrolling(false), 150);
    };

    container?.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedMessageId(id);
    setTimeout(() => setCopiedMessageId(null), 2000);
  };

  return (
    <div
      ref={containerRef}
      className={`flex h-[calc(100vh-180px)] flex-col overflow-y-auto pb-4 transition-all duration-300 md:pb-28 lg:pb-28 ${
        isScrolling ? "scrollbar-visible" : "scrollbar-hidden"
      }`}
    >
      <style>{`
        .scrollbar-visible::-webkit-scrollbar {
          width: 6px;
          transition: all 0.3s;
        }

        .scrollbar-hidden::-webkit-scrollbar {
          width: 0px;
          transition: all 0.3s;
        }

        ::-webkit-scrollbar-track {
          background: transparent;
          margin: 4px 0;
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(156, 163, 175, 0.5);
          border-radius: 3px;
          transition: all 0.3s;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(156, 163, 175, 0.8);
        }

        .message-appear {
          animation: messageSlide 0.3s ease-out forwards;
        }

        @keyframes messageSlide {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <div className="flex-1 px-4">
        {messages?.map((message, index) => (
          <div
            key={message.id}
            className={`message-appear mb-4 flex items-start gap-2 ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {message?.sender === "ai" && <ReactSVG src={logo_sm} />}
            <div
              className={`group relative max-w-[80%] rounded-2xl p-4 shadow-sm transition-shadow duration-200 hover:shadow-md ${
                message?.sender === "user"
                  ? "rounded-br-none bg-[#0057FF] text-white"
                  : "rounded-bl-none bg-[#F4F4F9] text-[#303841]"
              }`}
            >
              {message?.file ? (
                <a
                  href={URL.createObjectURL(message?.file)}
                  download={message?.file?.name}
                  className="flex items-center gap-2 transition-opacity hover:opacity-80"
                >
                  <FaRegFilePdf />
                  {message?.file?.name}
                </a>
              ) : (
                <div className="markdown-container">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {message?.text}
                  </ReactMarkdown>
                </div>
              )}

              <button
                className="absolute right-1 top-2 flex size-6 items-center justify-center rounded-full bg-white text-black opacity-0 shadow-lg transition-all duration-200 hover:text-gray-700 hover:shadow-md group-hover:opacity-100"
                onClick={() => handleCopy(message?.text, message?.id)}
              >
                <FiCopy size={16} />
              </button>

              {copiedMessageId === message?.id && (
                <span className="animate-fade-in-down absolute -top-6 right-2 rounded-md bg-white px-2 py-1 text-xs font-bold text-black shadow-sm shadow-primary">
                  Copied!
                </span>
              )}
            </div>
          </div>
        ))}

        {typing && (
          <div className="message-appear mb-4 flex items-start justify-start gap-2">
            <div className="h-8 w-8 flex-shrink-0 rounded-full bg-blue-100 shadow-sm" />
            <div className="max-w-[80%] rounded-2xl rounded-bl-none bg-[#F4F4F9] px-6 py-4 text-[#303841] shadow-sm">
              <span className="text-[14px] font-normal">
                {typingMessage?.length > 0 ? (
                  typingMessage
                ) : (
                  <img src={typing_icon} />
                )}
              </span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default ChatList;
