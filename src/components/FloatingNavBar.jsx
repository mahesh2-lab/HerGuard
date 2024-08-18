import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  Avatar,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { ProfileMenu } from "./Avatar";

const FloatingNavBar = () => {
  return (
    <div className="absolute w-[97%] h-20  top-5 left-1/2 opacity-90 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] transform -translate-x-1/2 flex border border-[#FAF7F7] backdrop-blur-sm bg-[#E5E4E4] bg-opacity-80 rounded-[17px] shadow-md p-2 z-[1000]">
      <div className=" flex items-center w-full justify-between">
        <div className="ml-4 flex items-center ">
          <img src="logo.svg" className="h-11 w-11 " />
          <div className=" relative mx-auto  text-gray-600 ml-24">
            <input
              className="border-2 border-[#FFFFFF] bg-[#F3E9E9] w-[500px]  placeholder:text-blue-gray-900 h-10 px-5 pr-16 rounded-[10px] text-base focus:outline-none"
              type="search"
              name="search"
              placeholder="Search"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 mt-[15px] mr-4"
            >
              <svg
                className="text-gray-600 h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                xmlSpace="preserve"
                width="512px"
                height="512px"
              >
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="mr-4 flex items-center">
          <div className="flex items-center gap-x-10 mr-24 ">
            <p className="text-lg relative after:bg-blue-gray-900 after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
              Report Location
            </p>
            <p className="text-lg relative after:bg-blue-gray-900 after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
              About Us
            </p>
            <p className="text-lg relative after:bg-blue-gray-900 after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
              Contach Us
            </p>
          </div>
          <ProfileMenu />
        </div>
      </div>
    </div>
  );
};


export default FloatingNavBar;
