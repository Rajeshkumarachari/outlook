import React from "react";
import { ORGANISED, SEARCH_IMAGE } from "../Utils/constant";

const Organized = () => {
  return (
    <div className=" bg-gray-100">
      <div className=" relative">
        <img className=" pt-20" src={ORGANISED} alt="Keep your" />
      </div>
      <div className="  relative mt-[-750px]  text-center ">
        <p className=" text-4xl my-3">Keep your busy life organized</p>
        <p className=" text-lg ">Outlook does more so you can get more done.</p>
      </div>
    </div>
  );
};

export default Organized;
