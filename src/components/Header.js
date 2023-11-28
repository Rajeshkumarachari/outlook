import React from "react";
import { LOGO, OUTLOOK_LOGO, SEARCH, USER_ICON } from "../Utils/constant";

const Header = () => {
  return (
    <div>
      <div className="  border w-full sm:w-fit">
        <img
          className=" pl-[85px] h-6 my-4 cursor-pointer rotate-"
          src={LOGO}
          alt="logo"
        />
        <div className="ml-6 hidden sm:block   border-l-[3px] border-black h-6  my-4"></div>
        <p className=" px-2 hidden sm:block py-4 ml-6 text-xl font-semibold cursor-pointer hover:underline underline-offset-4 decoration-2 ">
          Microsoft 365
        </p>
        <p className="new  hidden sm:block ">Outlook</p>
        <p className="new hidden sm:block ">Products</p>
        <p className="new hidden sm:block    ">Plans and pricing</p>
        <p className="new hidden sm:block  ">For business</p>
        <p className="new hidden sm:block ">Support</p>
        <button className="border hidden sm:block  border-black py-4 px-2  h-9 mt-3 pt-2 font-semibold rounded hover:underline">
          Buy now
        </button>
        <p className=" hidden sm:block  new ml-[200px] ">All Microsoft</p>
        <img className="w-5 h-5 mx-6 my-5" src={SEARCH} alt="search" />
        <img className="w-7 h-7 my-4 mx-7" src={USER_ICON} alt="usericon" />
      </div>
      <div className=" block sm:flex bg-gray-100">
        <div className="mt-20 ml-20 ">
          <h1 className=" text-4xl my-8 text-blue-600 font-semibold">
            Microsoft Outlook
          </h1>
          <p className=" text-2xl font-semibold">
            Connect, organize, and get things done with free personal email and
            calendar.
          </p>
          <div className="">
            <button className=" bg-blue-500 text-white  px-28 py-[9px] mr-7 my-5  text-lg rounded-sm">
              Sign in
            </button>
            <button className=" bg-white text-blue-600 px-14 sm:px-20 py-2 border-[3px] border-blue-600 text-lg font-semibold rounded-sm  ">
              Create free account
            </button>
          </div>
          <p className=" text-blue-700 text-lg font-semibold hover:underline cursor-pointer">
            Try premium {">"}
          </p>
        </div>
        <div className="w-full mx-5 sm:mx-0 sm:w-[800px] ">
          <img src={OUTLOOK_LOGO} alt="laptop_mobile_logo" />
        </div>
      </div>
      <div className=" bg-blue-600 w-full h-20 sm:h-36">
        <p className=" text-sm sm:text-2xl text-white  text-center py-2 sm:py-14">
          Everything you need to be your most productive and connected self–at
          home, on the go, and everywhere in between
        </p>
      </div>
    </div>
  );
};

export default Header;
