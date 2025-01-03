import PropTypes from "prop-types";

const TopContainer = ({children}) => {
  return (
    <div className="bg-slate-50 shadow-sm border border-black/5 rounded-lg">
       <div className="p-2 m-2 flex flex-col justify-center">
        {children}
        </div>
    </div>
  )
}

TopContainer.propTypes = {
    children: PropTypes.node.isRequired,
}

export default TopContainer