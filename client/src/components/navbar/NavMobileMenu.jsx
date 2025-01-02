import { DisclosureButton } from "@headlessui/react";
import PropTypes from "prop-types";

const NavMobileMenu = ({ navigation }) => {
  return (
    <div key={navigation.name} className="relative">
      <div className="relative h-10 bg-indigo-50 flex items-center">
        <div className="absolute inset-y-0 left-0 w-1 bg-indigo-600"></div>
        <DisclosureButton
          key={navigation.name}
          as="a"
          href={navigation.href}
          aria-current={navigation.current ? "page" : undefined}
          className={`${
            (navigation.current
              ? "bg-gray-100 text-grey"
              : "text-gray-500 hover:bg-gray-700 hover:text-white",
            "block rounded-md px-3 py-2 text-base font-medium")
          }`}
        >
          {navigation.name}
        </DisclosureButton>
      </div>
    </div>
  );
};

NavMobileMenu.propTypes = {
  navigation: PropTypes.array.isRequired,
};

export default NavMobileMenu;
