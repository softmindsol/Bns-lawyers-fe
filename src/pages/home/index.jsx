import ChatArea from "../../components/chat/chatArea";
import Layout from "../../layout";

const DashboardContent = () => {
  return (
    <Layout>
      <ChatArea />
    </Layout>
  );
};

const Dashboard = () => {
  return <DashboardContent />;
};

export default Dashboard;
