import PropTypes from 'prop-types';
import Status from '../../../model/StorageStatus';

const StatusLabel = ({color, text}) => {
  return (
    <div className='flex flex-row items-center w-full space-x-1'>
        <div className={`bg-storage-status-${color} w-2 h-2 rounded-sm`}></div>
        <p className='text-xs text-gray-700'>{text}</p>
    </div>
  )
}

StatusLabel.propTypes = {
  color: PropTypes.oneOf(Object.values(Status)).isRequired,
  text: PropTypes.string.isRequired,
}

export default StatusLabel