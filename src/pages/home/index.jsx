import ChatArea from "../../components/chat/chatArea";
import UseChatMessages from "../../hooks/usechatMassages";
import Layout from "../../layout";

const DashboardContent = () => {
  const { messages, addMessage } = UseChatMessages();

  const handleSendMessage = (content) => {
    addMessage(content, false);
    setTimeout(() => {
      addMessage(
        "I'll analyze your request and provide a detailed response shortly...",
        true,
      );
    }, 1000);
  };

  return (
    <Layout>
      <ChatArea messages={messages} onSendMessage={handleSendMessage} />
    </Layout>
  );
};

const Dashboard = () => {
  return <DashboardContent />;
};

export default Dashboard;
