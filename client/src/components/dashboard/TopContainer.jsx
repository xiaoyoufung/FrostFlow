import PropTypes from "prop-types";

const TopContainer = ({children}) => {
  return (
    <div className="bg-white shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)]">
        {children}
    </div>
  )
}

TopContainer.propTypes = {
    children: PropTypes.node.isRequired,
}

export default TopContainer