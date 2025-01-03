import Page from "../components/Page";
import InventSuggest from "./dashboard/inventory/InventSuggest";
import RoomEnv from "./dashboard/roomEnv/RoomEnv";
import Table from "./template/Table";

const Dashboard = () => {
  return (
    <Page
      title="Dashboard"
      description="Monitor every activity of your inventory"
    >
      <div className="flex flex-row justify-between">
        <InventSuggest />
        <RoomEnv />
      </div>
      <Table />

    </Page>
  );
};

export default Dashboard;