import React from "react";
import { AiOutlineSend } from "react-icons/ai";
const Newsletter = () => {
  return (
    <>
      <div className="h-[60vh] bg-[#fcf5f5] flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold ">Newsletter</h1>
        <h1 className="text-center md:text-2xl font-normal  mt-2 ">
          Get timely updates from your favorite products
        </h1>
        <div className="w-[80%] md:w-1/2 h-[50px] flex justify-between   bg-white border-2  mt-3">
          <input
            className="flex-[6] pl-4"
            placeholder="Your Email"
            type="search"
          />
          <button className="bg-teal-400 flex-[1] flex justify-center items-center">
            <AiOutlineSend size={30} color="black" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
