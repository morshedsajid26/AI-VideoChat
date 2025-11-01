import Image from "next/image";
import React from "react";
import logo from "@/public/auth_logo.png";
import InputField from "@/src/component/InputField";
import Link from "next/link";

const Reset = () => {
  return (
    <main className="h-screen grid justify-center items-center py-20 overflow-y-auto hide-scrollbar">
      <form className=" w-[500px]  text-cente gap-5 flex flex-col items-center rounded-2xl">
        <Image src={logo} alt="" />

        <h3 className="font-inter font-bold text-[30px] text-[#333333] mb-9 mt-15">
          Reset your passowrd
        </h3>

        <InputField label="Email Address" placeholder="Enter your email here" />

        <Link href="/checkotp" className="w-full ">
          <button className="bg-[#010006] text-white w-full font-inter py-3 rounded-[8px] cursor-pointer mt-5 ">
            Reset Password
          </button>
        </Link>

        <div className="flex justify-end w-full">
          <p className="text-[#333333] font-inter">
            Back to
            <a
              href="/resetpass"
              className="text-[#00AEEF]  font-inter underline"
            >
              
              sign in
            </a>
          </p>
        </div>
      </form>
    </main>
  );
};

export default Reset;
