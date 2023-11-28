import React from "react";
import {
  EMAIL_LOGO,
  GRADE1,
  GRADE2,
  GRADE3,
  GRADE4,
  SECURITY,
  TOOLS1,
  TOOLS2,
  TOOLS3,
  TOOLS4,
  YOUR_DATA,
} from "../Utils/constant";

const Email = () => {
  return (
    <div>
      <div className=" block sm:flex">
        <div className=" mx-4 sm:mx-0 w-full sm:w-3/4">
          <img src={EMAIL_LOGO} alt="" />
        </div>
        <div className=" w-full mx-4 sm:mx-0 sm:w-1/4 mt-40">
          <h1 className=" text-xl sm:text-3xl font-medium mb-5">
            Email and calendar, together in one place
          </h1>
          <p className=" text-sm sm:text-lg">
            Send, receive, and manage your email. Use Outlook’s built-in
            calendar to keep track of appointments and events.
          </p>
        </div>
      </div>
      <div className="  bg-gray-100">
        <h1 className=" text-center text-xl sm:text-4xl py-16">
          Stay safe and connected with security you can trust
        </h1>
        <div className=" block sm:flex  mx-6 sm:mx-32">
          <div className=" bg-white mr-0 sm:mr-7  ml-0 sm:ml-10 w-full sm:w-[550px] shadow-md ">
            <h1 className=" text-lg sm:text-3xl text-center font-semibold mt-8">
              Your data, controlled by you
            </h1>
            <p className=" my-7 text-center">
              Outlook puts you in control of your privacy.
            </p>
            <img
              className="  px-5"
              src={YOUR_DATA}
              alt="Your data, controlled by you"
            />
            <div className="flex px-5 my-4">
              <img
                className="w-7 h-7  mt-4 sm:mt-0 sm:w-10 sm:h-10"
                src={TOOLS1}
                alt="We help you"
              />
              <p className=" pt-1 mx-4">
                We help you take charge with easy-to-use tools and clear
                choices.
              </p>
            </div>
            <div className="flex px-5 my-3">
              <img
                className=" w-7 h-7  mt-4 sm:mt-0 sm:w-10 sm:h-10"
                src={TOOLS2}
                alt="We help you"
              />
              <p className=" pt-2 mx-4">
                We’re transparent about data collection and use so you can make
                informed decisions.
              </p>
            </div>
            <div className="flex px-5 my-3">
              <img
                className=" w-7 h-7  mt-4 sm:mt-0 sm:w-10 sm:h-10"
                src={TOOLS3}
                alt="We help you"
              />
              <p className=" pt-2 mx-4">
                We don’t use your email, calendar, or other personal content to
                target ads to you.
              </p>
            </div>
            <div className="flex px-5 my-3">
              <img
                className="w-7 h-7  mt-4 sm:mt-0 sm:w-10 sm:h-10"
                src={TOOLS4}
                alt="We help you"
              />
              <p className=" pt-2 mx-4">
                When we collect data, we use it to benefit you and make your
                experience better.
              </p>
            </div>
          </div>
          <div className=" bg-white ml-0 sm:ml-7 mr-0 sm:mr-10 shadow-md w-full sm:w-[550px] ">
            <h1 className="text-3xl text-center font-semibold mt-8">
              Backed by enterprise-grade security
            </h1>
            <p className=" my-7 text-center">
              Outlook works around the clock to help protect your data.
            </p>
            <img
              className="px-5"
              src={SECURITY}
              alt="Backed by enterprise-grade security"
            />
            <div className="flex px-5 my-3">
              <img
                className="w-7 h-7  mt-4 sm:mt-0 sm:w-10 sm:h-10"
                src={GRADE1}
                alt="We help you"
              />
              <p className=" pt-2 mx-4">
                Protection delivered by the same tools Microsoft uses for
                business customers.
              </p>
            </div>
            <div className="flex px-5 my-3">
              <img
                className="w-7 h-7  mt-4 sm:mt-0 sm:w-10 sm:h-10"
                src={GRADE2}
                alt="We help you"
              />
              <p className=" pt-2 mx-4">
                Data encryption in your mailbox and after email is sent.
              </p>
            </div>
            <div className="flex px-5 my-3">
              <img
                className="w-7 h-7  mt-4 sm:mt-0 sm:w-10 sm:h-10"
                src={GRADE3}
                alt="We help you"
              />
              <p className=" pt-2 mx-4">
                Automatic deactivation of unsafe links containing phishing
                scams, viruses, or malware. (Premium)
              </p>
            </div>
            <div className="flex px-5 my-3">
              <img
                className="w-7 h-7  mt-4 sm:mt-0 sm:w-10 sm:h-10"
                src={GRADE4}
                alt="We help you"
              />
              <p className=" pt-2 mx-4">
                Ransomware detection and recovery for your important files in
                OneDrive. (Premium)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Email;
