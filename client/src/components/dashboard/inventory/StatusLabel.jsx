import PropTypes from 'prop-types';
import Status from '../../../utils/StorageStatus';
const StatusLabel = ({status, text}) => {
  let color = '';

  switch (status) {
    case Status.OUT_OF_STOCK:
      color = 'bg-red-600/75';
      break;
    case Status.LOW_STOCK:
      color = 'bg-orange-500/75';
      break;
    case Status.WELL_STOCK:
      color = 'bg-amber-400';
      break;
    case Status.FULL_STOCK:
      color = 'bg-emerald-600/75';
      break;
    default:
      color = 'DC8583';
      break;
  }

  return (
    <div className='flex flex-row items-center w-full space-x-1'>
        <div className={`${color} w-2 h-2 rounded-sm`}></div>
        <p className='text-xs text-gray-500'>{text}</p>
    </div>
  )
}

StatusLabel.propTypes = {
  status: PropTypes.oneOf(Object.values(Status)).isRequired,
  text: PropTypes.string.isRequired,
}

export default StatusLabel