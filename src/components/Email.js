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
      <div className=" flex">
        <div className=" w-3/4">
          <img src={EMAIL_LOGO} alt="" />
        </div>
        <div className=" w-1/4 mt-40">
          <h1 className=" text-3xl font-medium mb-5">
            Email and calendar, together in one place
          </h1>
          <p className=" text-lg">
            Send, receive, and manage your email. Use Outlook’s built-in
            calendar to keep track of appointments and events.
          </p>
        </div>
      </div>
      <div className="  bg-gray-100">
        <h1 className=" text-center text-4xl py-16">
          Stay safe and connected with security you can trust
        </h1>
        <div className="flex  mx-32">
          <div className=" bg-white mr-7 ml-10 w-[550px] shadow-md ">
            <h1 className=" text-3xl text-center font-semibold mt-8">
              Your data, controlled by you
            </h1>
            <p className=" my-7 text-center">
              Outlook puts you in control of your privacy.
            </p>
            <img
              className=" px-5"
              src={YOUR_DATA}
              alt="Your data, controlled by you"
            />
            <div className="flex px-5 my-3">
              <img src={TOOLS1} alt="We help you" />
              <p className=" pt-2 mx-4">
                We help you take charge with easy-to-use tools and clear
                choices.
              </p>
            </div>
            <div className="flex px-5 my-3">
              <img src={TOOLS2} alt="We help you" />
              <p className=" pt-2 mx-4">
                We’re transparent about data collection and use so you can make
                informed decisions.
              </p>
            </div>
            <div className="flex px-5 my-3">
              <img src={TOOLS3} alt="We help you" />
              <p className=" pt-2 mx-4">
                We don’t use your email, calendar, or other personal content to
                target ads to you.
              </p>
            </div>
            <div className="flex px-5 my-3">
              <img src={TOOLS4} alt="We help you" />
              <p className=" pt-2 mx-4">
                When we collect data, we use it to benefit you and make your
                experience better.
              </p>
            </div>
          </div>
          <div className=" bg-white ml-7  mr-10 shadow-md w-[550px] ">
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
              <img src={GRADE1} alt="We help you" />
              <p className=" pt-2 mx-4">
                Protection delivered by the same tools Microsoft uses for
                business customers.
              </p>
            </div>
            <div className="flex px-5 my-3">
              <img src={GRADE2} alt="We help you" />
              <p className=" pt-2 mx-4">
                Data encryption in your mailbox and after email is sent.
              </p>
            </div>
            <div className="flex px-5 my-3">
              <img src={GRADE3} alt="We help you" />
              <p className=" pt-2 mx-4">
                Automatic deactivation of unsafe links containing phishing
                scams, viruses, or malware. (Premium)
              </p>
            </div>
            <div className="flex px-5 my-3">
              <img src={GRADE4} alt="We help you" />
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
