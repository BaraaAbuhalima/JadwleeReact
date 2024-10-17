import { Layout } from "../Components/Layout";
import ProtectedRoute from "../Components/ProtectedRoute";
import { sessionName } from "../utils/constants";

const Dashboard = () => {
  return (
    <ProtectedRoute cookieName={sessionName}>
      <Layout>
        <></>
      </Layout>
    </ProtectedRoute>
  );
};

export default Dashboard;
