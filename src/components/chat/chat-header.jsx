import { useChat } from "../../hooks/useChat";
import useAuthStore from "../../stores/auth.store";

const ChatHeader = () => {
  const { user: { data: { first_name } = {}, loading } = {} } = useAuthStore();
  const { messages, stopChat } = useChat();
  return (
    <>
      <div className="mb-10 flex flex-wrap items-center justify-between gap-2 lg:p-6">
        {messages.length === 0 && (
          <h2 className="text-base font-normal lg:text-xl">
            Hi, Welcome
            {loading ? (
              <div className="skeleton-loader h-5 w-20 rounded bg-gray-200"></div>
            ) : (
              <span> {first_name}!</span>
            )}
            👋
          </h2>
        )}
        <div className={`${messages.length === 0 ? "" : "ml-auto"}`}>
          <button
            onClick={stopChat}
            className="whitespace-nowrap rounded-lg bg-mygradient1 px-2 py-2 text-sm text-white hover:bg-blue-700 md:text-base lg:px-4"
          >
            + New Query
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatHeader;
