import React from "react";
import {
  ANDROID,
  APPLE,
  BLOG,
  FLOWEER,
  LINKEDIN,
  QR_CODE,
  TWITTER,
} from "../Utils/constant";

const Looking = () => {
  return (
    <div className=" mt-10 sm:mt-[430px]  ">
      <div className=" grid sm:flex">
        <div>
          <img src={FLOWEER} alt="Expand " />
        </div>
        <div className=" w-[600px] mt-32 mr-16 ">
          <h1 className=" text-3xl mx-4 sm:mx-0 font-medium">
            Expand your Outlook
          </h1>
          <p className=" text-lg mx-4 sm:mx-0 ">
            A Microsoft 365 subscription includes premium Outlook features like
            an ad-free interface, enhanced security, the full desktop version of
            Office apps, and 1 TB of cloud storage.
          </p>
          <a
            className=" mx-4 sm:mx-0 text-blue-700 text-lg font-medium hover:underline"
            href="/"
          >
            Learn about premium
          </a>
        </div>
      </div>
      <div className="bg-gray-100  hidden sm:block pb-20">
        <div className=" hidden sm:block text-center mx-[700px] my-5 py-10 ">
          <img src={APPLE} alt="" />
        </div>
        <p className=" text-center text-3xl">Get the Outlook mobile app</p>
        <img className=" mx-auto" src={QR_CODE} alt="" srcset="" />
        <p className=" text-center text-lg">
          <span className=" text-blue-700 underline cursor-pointer">
            Click here
          </span>
          if you're having trouble with the QR code
        </p>
      </div>
      <div className=" my-5 sm:my-0 bg-blue-600 text-center text-white py-28 ">
        <h1 className=" text-3xl">Looking for Hotmail?</h1>
        <p className=" text-lg">
          You've found it. We've redesigned and relaunched Hotmail as Outlook.
          We're still committed to building the best free email and calendar.
        </p>
      </div>
      <div className=" flex my-10 mx-10">
        <p className=" text-lg">Follow Microsoft 365</p>
        <img
          className=" w-10 h-10 ml-7 mx-1 cursor-pointer"
          src={LINKEDIN}
          alt=""
        />
        <img className=" w-10 h-10 mx-1 cursor-pointer " src={TWITTER} alt="" />
        <img className=" w-10 h-10 mx-1 cursor-pointer" src={BLOG} alt="" />
      </div>
    </div>
  );
};

export default Looking;
