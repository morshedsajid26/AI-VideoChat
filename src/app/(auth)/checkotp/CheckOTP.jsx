import React from "react";
import { FaCheck } from "react-icons/fa";

const CheckOTP = () => {
  return (
    <div className="min-h-screen grid place-items-center">
      <div className="bg-[#E6F7FB] w-[30%] px-30 py-30 text-center gap-5 flex flex-col items-center rounded-2xl">

        <div className="w-10 h-10 bg-[#00AF06] flex items-center justify-center rounded-full">
        <FaCheck className="text-white w-5 h-5" />

        </div>

        <p className="font-inter text-[24px] text-[#333333]">
          Password updated Successfully!
        </p>
      </div>
    </div>
  );
};

export default CheckOTP;
