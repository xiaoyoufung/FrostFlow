import PropTypes from 'prop-types'
import { getColor, getText } from '../../../utils/StatusFunc';
import StatusLabel from "./StatusLabel";
import Shape from '../../../utils/Shape';

const LabelGroup = ({statusLists}) => {

  return (
    <div className="inline-flex flex-col justify-between space-y-3 pl-5 pb-4">
        {statusLists.map((status) => {
            return <StatusLabel key={status.id} shape={Shape.SQUARE} color={`bg-${getColor(status.name)}`} text={getText(status.name)} />;
        })}
    </div>
  )
}

LabelGroup.propTypes = {
    statusLists: PropTypes.array.isRequired,
}

export default LabelGroup