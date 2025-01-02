import Page from "../components/Page";
import TopContainer from "./dashboard/TopContainer";

const Dashboard = () => {
  return (
    <Page
      title="Dashboard"
      description="Monitor every activity of your inventory"
    >
      <TopContainer>
        <h1>Dashboard</h1>
      </TopContainer  >
    </Page>
  );
};

export default Dashboard;
