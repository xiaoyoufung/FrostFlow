import InventContainer from "./InventContainer";
import TopContainer from "../TopContainer";

const InventSuggest = () => {
  return (
    <TopContainer>
      <div className="px-2 m-2 flex flex-col justify-center">
        <h1 className="font-semibold pt-3 text-base">Inventory Suggestion</h1>
        <InventContainer />
      </div>
    </TopContainer>
  );
};

export default InventSuggest;
