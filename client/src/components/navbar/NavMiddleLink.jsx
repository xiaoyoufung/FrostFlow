import PropTypes from "prop-types";

const NavMiddleLink = ({item}) => {
  return (
    <a
    key={item.name}
    href={item.href}
    aria-current={item.current ? "page" : undefined}
    className={`content-center px-1 pt-1 text-sm font-medium h-full border-b-2 border-transparent
      ${
      item.current
        ? "text-grey border-gray-900"
        : "text-gray-500 hover:bg-white hover:text-gray-700 hover:border-gray-300"
    }`}
  >
    {item.name}
  </a>
  )
}

NavMiddleLink.propTypes = {
    item: PropTypes.array.isRequired,
    }

export default NavMiddleLink