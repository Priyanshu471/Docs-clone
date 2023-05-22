import React from "react";
import mail from "./mail.png";
import calender from "./calender.png";
import keeps from "./keeps.png";
import map from "./map.png";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="fixed h-screen right-0 top-36 w-16 p-3 flex flex-col justify-start gap-5 bg-transparent  rounded-l-xl">
      <div className="bg-gray-200 cursor-pointer rounded-full hover:bg-gray-300 flex justify-center p-1 px-2">
        <img src={mail} alt="Gmail logo" className="h-6 object-contain m-1" />
      </div>
      <div className="bg-gray-200 cursor-pointer rounded-full hover:bg-gray-300 flex justify-center p-1 px-2">
        <img
          src={calender}
          alt="G Claender logo"
          className="h-6 object-contain m-1"
        />
      </div>
      <div className="bg-gray-200 cursor-pointer rounded-full hover:bg-gray-300 flex justify-center p-1 px-2">
        <img
          src={keeps}
          alt="G Keeps logo"
          className="h-6 object-contain m-1"
        />
      </div>
      <div className="bg-gray-200 cursor-pointer rounded-full hover:bg-gray-300 flex justify-center p-1 px-2">
        <img src={map} alt="G Maps logo" className="h-6 object-contain m-1" />
      </div>

      <span className=" bg-gray-200 p-1 cursor-pointer rounded-full hover:bg-gray-300 flex justify-center items-center text-2xl">
        +
      </span>
    </div>
  );
};

export default SideBar;
