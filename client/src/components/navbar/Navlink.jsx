import PropTypes from "prop-types";

const Navlink = ({ children, active, onClick }) => {
  return (
    <div className="relative" onClick={onClick}>
      <a
        href="#"
        className={`text-sm/6 font-semibold ${active ? "text-gray-900" : "text-gray-500"}`}
      >
        {children}
      </a>
      {active && (
        <div className="absolute -bottom-6 left-0 right-0 h-0.5 bg-gray-900"></div>
      )}
    </div>
  );
};

Navlink.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Navlink;
