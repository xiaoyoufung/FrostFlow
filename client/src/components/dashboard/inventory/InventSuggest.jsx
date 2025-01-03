import InventContainer from "./InventContainer";
import TopContainer from "../TopContainer";
import StatusLabel from "./StatusLabel";
import Status from "../../../utils/StorageStatus";

const InventSuggest = () => {
  return (
    <TopContainer>
        <h1 className="font-semibold p-2 text-base">Inventory Suggestion</h1>
        <div className="flex flex-row items-end justify-center px-8">
          <InventContainer />
          <LabelGroup />
        </div>
    </TopContainer>
  );
};

const LabelGroup = () => {
  return (
    <div className="inline-flex flex-col justify-between space-y-3 pl-5 pb-4">
      <StatusLabel status={Status.OUT_OF_STOCK} text="Out of Stock" />
      <StatusLabel status={Status.LOW_STOCK} text="Low Stock" />
      <StatusLabel status={Status.WELL_STOCK} text="Well Stock" />
      <StatusLabel status={Status.FULL_STOCK} text="Full Stock" />
    </div>
  );
};

export default InventSuggest;
