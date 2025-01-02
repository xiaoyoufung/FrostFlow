import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import NavLogo from "./Navlogo";
import NavbarUserProfile from "./NavbarUserProfile";
import NavMobileMenu from "./NavMobileMenu";
import NavMiddleLink from "./NavMiddleLink";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Inventory", href: "#", current: false },
  { name: "User", href: "#", current: false },
  { name: "Customer", href: "#", current: false },
  { name: "Product", href: "#", current: false },
  { name: "Storage", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

export default function Navbar() {
  return (
    <>
      <Disclosure as="nav" className="bg-white shadow">
        <div className="lg:mx-2 px-4 md:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* left section */}
            <NavLeftSection />

            {/* middle section */}
            <NavMiddleSection />

            {/* right section */}
            <NavRightSection />

            <div className="-mr-2 flex md:hidden">
              {/* Mobile menu button */}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md  p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block size-6 group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden size-6 group-data-[open]:block"
                />
              </DisclosureButton>
            </div>
          </div>
        </div>

        <DisclosurePanel className="md:hidden">
          <div className="space-y-1 pb-3 pt-2 sm:px-3">
            {navigation.map((item) => (
              <NavMobileMenu key={item.name} menu={item} />
            ))}
          </div>
          <div className="border-t border-gray-200 pt-4 pb-3">
            <NavbarUserProfile {...user} />
            <div className="mt-3 space-y-1">
              {userNavigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="block rounded-md px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </>
  );
}

const NavLeftSection = () => {
  return (
    <div className="flex items-center">
      <div className="shrink-0">
        <NavLogo />
      </div>
    </div>
  );
};

const NavMiddleSection = () => {
  return (
    <div className="hidden md:flex h-full">
      <div className="space-x-8 h-full md:flex">
        {navigation.map((item) => (
          <NavMiddleLink key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
};

const NavRightSection = () => {
  return (
    <div className="hidden md:block">
      <div className="flex items-center">
        {/* Profile dropdown */}
        <Menu as="div" className="relative">
          <div>
            <MenuButton className="relative flex max-w-xs items-center text-sm">
              <div className="md:flex lg:hidden">
                <img
                  alt=""
                  src={user.imageUrl}
                  className="size-9 lg:size-8 rounded-full"
                />
              </div>
              <div className="lg:flex items-center md:hidden">
                <NavbarUserProfile {...user} />
                <ChevronDownIcon className="w-5 h-5" />
              </div>
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
    </div>
  );
};
