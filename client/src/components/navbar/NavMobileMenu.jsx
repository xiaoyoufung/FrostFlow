import { DisclosureButton } from "@headlessui/react";
import PropTypes from "prop-types";

const NavMobileMenu = ({ menu }) => {
  return (
    <div key={menu.name} className="relative">
      <div
        className={`relative h-10 ${menu.current && "bg-indigo-50"} flex items-center`}
      >
        <div
          className={`absolute inset-y-0 left-0 w-1 ${menu.current && "bg-indigo-600"}`}
        ></div>
        <DisclosureButton
          key={menu.name}
          as="a"
          href={menu.href}
          aria-current={menu.current ? "page" : undefined}
          className={`block rounded-md px-5 py-2 text-base font-medium ${menu.current ? "text-indigo-600" : "text-gray-500 hover:bg-gray-700 hover:text-white"}`}>
          {menu.name}
        </DisclosureButton>
      </div>
    </div>
  );
};

NavMobileMenu.propTypes = {
  menu: PropTypes.array.isRequired,
};

export default NavMobileMenu;
