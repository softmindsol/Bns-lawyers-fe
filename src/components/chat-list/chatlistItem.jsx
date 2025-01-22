const ChatListItem = ({
  title,
  time,
  preview,
  isActive,
  isDarkMode,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`mb-2 w-full rounded-xl p-4 text-left transition-all ${
        isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-50"
      } ${isActive ? "bg-blue-50 text-blue-800" : ""}`}
    >
      <div className="mb-1 flex items-start justify-between">
        <span className="font-semibold">{title}</span>
        <span className="text-xs text-gray-500">{time}</span>
      </div>
      <p className="truncate text-sm text-gray-500">{preview}</p>
    </button>
  );
};

export default ChatListItem;
