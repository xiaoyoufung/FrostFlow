import PropTypes from 'prop-types';

const StatusLabel = ({color, text}) => {
  return (
    <div>
        <div style={{ backgroundColor: color }}></div>
        <p>{text}</p>
    </div>
  )
}

StatusLabel.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default StatusLabel