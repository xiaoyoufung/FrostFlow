import Page from "../components/Page";
import InventSuggest from "./dashboard/inventory/InventSuggest";
import RoomEnv from "./dashboard/roomEnv/RoomEnv";
import Table from "./template/Table";
import nearProduct from "../data/nearProduct.json";

const Dashboard = () => {
  const tHead = [
    { title: "Imported Date", className: "pl-6 pr-3" },
    { title: "Product Name", className: "px-3" },
    { title: "Customer Name", className: "px-3" },
    { title: "Lot Number", className: "px-3" },
    { title: "In Stock", className: "px-3" },
    { title: "Expire Date", className: "pl-3 pr-6" },
  ];

  return (
    <Page
      title="Dashboard"
      description="Monitor every activity of your inventory"
    >
      <div className="flex flex-row justify-between">
        <InventSuggest />
        <RoomEnv />
      </div>
      <Table tHead={tHead} data={nearProduct.products} />

    </Page>
  );
};

export default Dashboard;