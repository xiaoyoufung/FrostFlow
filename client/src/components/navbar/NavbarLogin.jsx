import React from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const NavbarLogin = () => {
  let isLogged = false;
  let navComponent = null;

  if (isLogged) {
    navComponent = (
        <div>

        </div>
    )
  } else{
    navComponent = (
        <a href="#" className="text-sm/6 font-semibold text-gray-900">
        Log out
      </a>
    )
  }

  return (
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
      <div className="flex items-center space-x-4">
        <div className="bg-gray-300 w-10 h-10 rounded-full"></div>

        <div>
            <p className="font-semibold text-sm/6">Justin Laksana</p>
            <p className="font-medium text-xs/6">justtinlak07@gmail.com</p>
        </div>

        <div>
            <ChevronDownIcon className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default NavbarLogin;
