import PropTypes from 'prop-types';

const Navlink = (props) => {
  return (
    <a href="#" className="text-sm/6 font-semibold text-gray-900">
      {props.children}
    </a>
  );
};

Navlink.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Navlink;
