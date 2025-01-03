import InventContainer from "./InventContainer";
import TopContainer from "../TopContainer";
import LabelGroup from "./LabelGroup";
import StatusLogic from "./StatusLogic";

const InventSuggest = () => {
  return (
    <TopContainer>
        <h1 className="font-semibold p-2 text-base">Inventory Suggestion</h1>
        <div className="flex flex-row items-end justify-center px-8">
          <InventContainer />
          <LabelGroup statusLists={StatusLogic()} />
        </div>
    </TopContainer>
  );
};

export default InventSuggest;
