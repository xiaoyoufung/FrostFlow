import PropTypes from 'prop-types'
import StorageStatus from '../../../model/StorageStatus'

const InventBox = ({status}) => {
    let boxColor = '';
    let boxImage = '';
    switch (status) {
        case StorageStatus.OUT_OF_STOCK:
            boxColor = 'red';
            break;
        case StorageStatus.LOADING:
            boxColor = 'orange';
            break;
        case StorageStatus.ERROR:
            boxColor = 'yellow';
            break;
        case StorageStatus.LOADED:
            boxColor = 'green';
            break;
        default:
            boxColor = 'gray';
            break;
    }

    boxImage = `/images/inventory/${boxColor}-xs-storage.svg`;

  return (
    <div>
        <img src={boxImage} alt="Inventory-Storage-Box" />
    </div>
  )
}

InventBox.propTypes = {
    status: PropTypes.instanceOf(StorageStatus).isRequired
}

export default InventBox