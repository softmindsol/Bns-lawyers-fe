import { useChat } from "../../hooks/useChat";
import ChatHeader from "./chat-header";
import ChatHelper from "./chat-helper";
import ChatInput from "./chat-input";
import ChatList from "./chat-list";

const ChatArea = () => {
  const { messages } = useChat();

  return (
    <div className="mx-auto flex h-screen w-full max-w-screen-xl flex-col bg-white">
      <ChatHeader />

      {messages?.length === 0 ? (
        <ChatHelper />
      ) : (
        <>
          <ChatList />

          <ChatInput />
        </>
      )}
    </div>
  );
};

export default ChatArea;
