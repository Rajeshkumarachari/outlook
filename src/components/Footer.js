import React from "react";

const Footer = () => {
  return (
    <div className=" bg-gray-100 ">
      <div className=" block sm:flex">
        <div className=" grid py-10 ml-20">
          <h1 className=" text-lg text-gray-800 font-semibold">What's new</h1>
          <p className="footer">Microsoft 365</p>
          <p className="footer">Games</p>
          <p className="footer">Surface Pro 9</p>
          <p className="footer">Surface Laptop 5</p>
          <p className="footer">Surface Laptop Go 2</p>
          <p className="footer">Windows 11 apps</p>
        </div>
        <div className=" py-10 mx-12">
          <h1 className=" text-lg text-gray-800 font-semibold">
            Microsoft Store
          </h1>
          <p className="footer">Account profile</p>
          <p className="footer">Download Center</p>
          <p className="footer">Microsoft Store Support</p>
          <p className="footer">Returns</p>
          <p className="footer">Order tracking</p>
        </div>
        <div className=" py-10 mx-12">
          <h1 className=" text-lg text-gray-800 font-semibold">Education</h1>
          <p className="footer">Microsoft in education</p>
          <p className="footer">Devices for education</p>
          <p className="footer">Microsoft Teams for Education</p>
          <p className="footer">Microsoft 365 Education</p>
          <p className="footer">Office Education</p>
          <p className="footer">Educator training and development</p>
          <p className="footer">Deals for students and parents</p>
          <p className="footer">Azure for students</p>
        </div>
        <div className=" py-10 mx-12">
          <h1 className=" text-lg text-gray-800 font-semibold">Business</h1>
          <p className="footer">Microsoft Cloud</p>
          <p className="footer">Microsoft Security</p>
          <p className="footer">Azure</p>
          <p className="footer">Dynamics 365</p>
          <p className="footer">Microsoft 365</p>
          <p className="footer">Microsoft Advertising</p>
          <p className="footer">Microsoft Industry</p>
          <p className="footer">Microsoft Teams</p>
        </div>
        <div className=" py-10 mx-12">
          <h1 className=" text-lg text-gray-800 font-semibold">
            Developer & IT
          </h1>
          <p className="footer">Developer Center</p>
          <p className="footer">Documentation</p>
          <p className="footer">Documentation</p>
          <p className="footer">Microsoft Learn</p>
          <p className="footer">Microsoft Tech Community</p>
          <p className="footer">Azure Marketplace</p>
          <p className="footer">AppSource</p>
          <p className="footer">Microsoft Power Platform</p>
          <p className="footer">Visual Studio</p>
        </div>
        <div className=" py-10 mx-12">
          <h1 className=" text-lg text-gray-800 font-semibold">Company</h1>

          <p className="footer">Careers</p>
          <p className="footer">About Microsoft</p>
          <p className="footer">Company news</p>
          <p className="footer">Privacy at Microsoft</p>
          <p className="footer">Investors</p>
          <p className="footer">Security</p>
        </div>
      </div>
      <div className=" flex-wrap sm:flex">
        <div className=" grid">
          <p className=" footer mx-5">English(India) </p>
          <p className=" footer">Your Privacy Choices</p>
        </div>
        <div>
          <div className="  grid mx-40">
            <p className=" footer mx-5">Contact Microsoft</p>
            <p className=" footer mx-5"> Privacy</p>
            <p className=" footer mx-5"> Terms of use </p>
            <p className=" footer mx-5">Trademarks </p>
            <p className=" footer mx-5"> About our ads</p>
            <p className=" text-sm text-gray-500 my-2 mx-5">© Microsoft 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
