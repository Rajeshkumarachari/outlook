import React from "react";
import { ALL_LOGOS, SEARCH_IMAGE, USER_IMAGE } from "../Utils/constant";

const Slide = () => {
  return (
    <div className=" mt-[700px] ">
      <div className=" px-5  mx-2 sm:mx-36  border-black">
        <img
          className=" px-0 sm:px-40"
          src={SEARCH_IMAGE}
          alt="Intelligence "
        />
        <h1 className=" text-2xl  font-semibold ml-3 sm:ml-44">
          Intelligence that works for you
        </h1>
        <p className=" text-lg ml-3 sm:ml-44">
          Locate messages, people, and documents with Outlook search.
        </p>
      </div>
      <div className=" block sm:flex">
        <div className="w-[300px]  mt-32 ml-20">
          <h1 className=" text-lg sm:text-3xl font-medium">
            Free access to Office apps
          </h1>
          <p className=" text-base sm:text-lg">
            Collaborating is easy with Word, PowerPoint, and Excel. You can chat
            in real time with Skype—right from your Outlook account.
          </p>
        </div>
        <div className="">
          <img
            className="  pr-4 sm:pr-0 h-[200px] sm:h-[400px] "
            src={ALL_LOGOS}
            alt="Office apps"
          />
        </div>
      </div>
      <div>
        <div className="relative z-10">
          <img src={USER_IMAGE} alt="More accessible than ever" />
        </div>
        <div className=" relative w-[350px] mt-[20px] sm:mt-[-600px] ml-5 sm:ml-[1020px] z-20 ">
          <h1 className=" text-3xl font-medium">More accessible than ever</h1>
          <p>
            We’ve designed Outlook to be everyone’s most accessible inbox, with
            intuitive, voice-controlled navigation, support for multiple
            assistive devices, and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide;
