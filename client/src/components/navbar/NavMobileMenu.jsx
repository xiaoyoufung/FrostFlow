import { DisclosureButton } from "@headlessui/react";
import PropTypes from "prop-types";

const NavMobileMenu = ({ nav }) => {
  const { name, href, current } = nav;
  return (
    <DisclosureButton
      key={name}
      as="a"
      href={href}
      aria-current={current ? "page" : undefined}
      className={`
        block pr-4 pl-3 py-2 text-base font-medium border-l-4
        ${
          current
            ? "text-indigo-600 bg-indigo-50  border-indigo-500"
            : "text-gray-600 border-transparent hover:bg-gray-50 hover:text-gray-800 hover:border-gray-300"
        }
            `}
    >
      {name}
    </DisclosureButton>
  );
};

NavMobileMenu.propTypes = {
  nav: PropTypes.shape({
    name: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    current: PropTypes.bool.isRequired
  }).isRequired
};

export default NavMobileMenu;
