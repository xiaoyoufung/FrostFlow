import PropTypes from 'prop-types';

import Shape from '../../../utils/Shape';

const StatusLabel = ({shape, color, text}) => {
  let roundedStyle = '';
  if(shape === Shape.CIRCLE){
    roundedStyle = 'rounded-full';
  } else{
    roundedStyle = 'rounded-sm';
  }

  return (
    <div className='flex flex-row items-center w-full space-x-1'>
        <div className={`${color} w-2 h-2 ${roundedStyle}`}></div>
        <p className='text-xs text-gray-500'>{text}</p>
    </div>
  )
}

StatusLabel.propTypes = {
  shape: PropTypes.oneOf(Object.values(Shape)).isRequired,
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default StatusLabel