import { DisclosureButton } from "@headlessui/react";
import PropTypes from "prop-types";

const NavMobileMenu = ({ menu }) => {
  return (
    <DisclosureButton
      key={menu.name}
      as="a"
      href={menu.href}
      aria-current={menu.current ? "page" : undefined}
      className={`block px-5 py-2 text-base font-medium ${menu.current ? "text-indigo-600 bg-indigo-50 border-l-4 border-indigo-500" : "text-gray-600 hover:bg-gray-50 hover:text-gray-800 hover:border-l-4 hover:border-gray-300"}`}
    >
      {menu.name}
    </DisclosureButton>
  );
};

NavMobileMenu.propTypes = {
  menu: PropTypes.array.isRequired,
};

export default NavMobileMenu;