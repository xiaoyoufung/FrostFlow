import PropTypes from "prop-types";
import StorageStatus from "../../../utils/StorageStatus";
import greenStorageIcon from "../../../assets/images/inventory/green-xs-storage.svg";
import redStorageIcon from "../../../assets/images/inventory/red-xs-storage.svg";
import orangeStorageIcon from "../../../assets/images/inventory/orange-xs-storage.svg";
import yellowStorageIcon from "../../../assets/images/inventory/yellow-xs-storage.svg";
import greyStorageIcon from "../../../assets/images/inventory/grey-xs-storage.svg";

const InventBox = ({ status }) => {
  let storageIcon = "";
  switch (status) {
    case StorageStatus.OUT_OF_STOCK:
      storageIcon = redStorageIcon;
      break;
    case StorageStatus.LOW_STOCK:
      storageIcon = orangeStorageIcon;
      break;
    case StorageStatus.WELL_STOCK:
      storageIcon = yellowStorageIcon;
      break;
    case StorageStatus.FULL_STOCK:
      storageIcon = greenStorageIcon;
      break;
    case StorageStatus.TRANSPARENT:
      storageIcon = (
        <div className="bg-transparent w-[30px] h-[31px]">
        </div>
      );
      break;
    default:
      storageIcon = greyStorageIcon;
      break;
  }

  return (
    <div className="shrink-0">
      {status === StorageStatus.TRANSPARENT ? (
        storageIcon
      ) : (
        <img src={storageIcon} alt="Inventory-Storage-Box" />
      )}
    </div>
  );
};

InventBox.propTypes = {
  status: PropTypes.oneOf(Object.values(StorageStatus)).isRequired,
};

export default InventBox;