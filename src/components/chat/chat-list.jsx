import { FaRegFilePdf } from "react-icons/fa6";
import { useChat } from "../../hooks/useChat";

const ChatList = () => {
  const { messages, typing, typingMessage } = useChat();

  return (
    <>
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
              className={`max-w-[80%] rounded-2xl p-4 ${
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
                <span className="text-[14px] font-normal">{message.text}</span>
              )}
            </div>
          </div>
        ))}

        {typing && (
          <div className="mb-4 flex items-start justify-start gap-2">
            <div className="h-8 w-8 flex-shrink-0 rounded-full bg-blue-100" />
            <div className="max-w-[80%] rounded-2xl rounded-bl-none bg-[#F4F4F9] p-4 text-[#303841]">
              <span className="text-[14px] font-normal">{typingMessage}</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ChatList;
