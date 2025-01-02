import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import PropTypes from "prop-types";
import NavbarUserProfile from "./NavbarUserProfile";

const NavbarLogin = ({ userNavigation }) => {
  return (
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
      <Menu as="div" className="relative ml-3">
        <div>
          <MenuButton className="relative flex items-center space-x-3">
            <span className="sr-only">Open user menu</span>
            <NavbarUserProfile />
            <ChevronDownIcon className="w-6 h-6" />
          </MenuButton>
        </div>
        <MenuItems
          transition
          className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
          {userNavigation.map((item) => (
            <MenuItem key={item.name}>
              <a
                href={item.href}
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
              >
                {item.name}
              </a>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </div>
  );
};

NavbarLogin.propTypes = {
  userNavigation: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default NavbarLogin;
