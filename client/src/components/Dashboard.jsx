import Page from "../components/Page";
import InventSuggest from "./dashboard/inventory/InventSuggest";
import RoomEnv from "./dashboard/roomEnv/RoomEnv";

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
     
    </Page>
  );
};

export default Dashboard;
