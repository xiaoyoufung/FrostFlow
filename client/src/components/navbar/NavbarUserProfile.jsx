import React from "react";

const NavbarUserProfile = () => {
  return (
    <div className="flex items-center space-x-3">
      <div className="bg-gray-300 w-10 h-10 rounded-full"></div>

      <div className="text-start">
        <p className="font-semibold text-sm/6">Justin Laksana</p>
        <p className="font-medium text-xs/6 text-gray-500">
          justtinlak07@gmail.com
        </p>
      </div>
    </div>
  );
};

export default NavbarUserProfile;
