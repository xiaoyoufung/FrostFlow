import InventContainer from "./InventContainer";
import TopContainer from "../TopContainer";
import StatusLabel from "./StatusLabel";
import Status from "../../../model/StorageStatus";

const InventSuggest = () => {
  return (
    <TopContainer>
      <div className="p-2 m-2 flex flex-col justify-center">
        <h1 className="font-semibold p-2 text-base">Inventory Suggestion</h1>
        <div className="flex flex-row items-end justify-center px-8">
          <InventContainer />
          <LabelGroup />
        </div>
      </div>
    </TopContainer>
  );
};

const LabelGroup = () => {
  return (
    <div className="inline-flex flex-col justify-between space-y-3 pl-5 pb-4">
      <StatusLabel color={Status.OUT_OF_STOCK} text="Out of Stock" />
      <StatusLabel color={Status.LOW_STOCK} text="Low Stock" />
      <StatusLabel color={Status.WELL_STOCK} text="Well Stock" />
      <StatusLabel color={Status.FULL_STOCK} text="Full Stock" />
    </div>
  );
};

export default InventSuggest;
