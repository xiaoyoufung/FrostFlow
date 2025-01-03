import PropTypes from "prop-types";

const NavMiddleLink = ({nav}) => {
  const {name, href, current} = nav
  return (
    <a
    key={name}
    href={href}
    aria-current={current ? "page" : undefined}
    className={`content-center px-1 pt-1 text-sm font-medium h-full border-b-2
      ${
      current
        ? "text-gray-900 border-gray-900"
        : "text-gray-500 border-transparent hover:bg-white hover:text-gray-700 hover:border-gray-300"
    }`}
  >
    {name}
  </a>
  )
}

NavMiddleLink.propTypes = {
    nav: PropTypes.shape({
        name: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
        current: PropTypes.bool.isRequired
      }).isRequired
    }

export default NavMiddleLink