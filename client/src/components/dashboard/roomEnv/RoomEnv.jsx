import React from "react";
import PropTypes from "prop-types";
import TopContainer from "../TopContainer";

const RoomEnv = () => {
  return (
    <>
      <TopContainer>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="mr-4">
                <h1 className="text-xl font-medium text-gray-900">Room Environment</h1>
              </div>
            </div>
          </div>
        </div>
      </TopContainer>
    </>
  );
};

export default RoomEnv;
