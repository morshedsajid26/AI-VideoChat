import Image from "next/image";
import React from "react";
import logo from "@/public/auth_logo.png";
import InputField from "@/src/component/InputField";
import Link from "next/link";
import Password from "@/src/component/Password";

const NewPass = () => {
  return (
    <main className="h-screen grid justify-center items-center py-20 overflow-y-auto hide-scrollbar">
      <form className=" w-[500px]  text-cente gap-5 flex flex-col items-center rounded-2xl">
        <Image src={logo} alt="" />

        <h3 className="font-inter font-bold text-[30px] text-[#333333] mb-9 mt-15">
         Enter new password
        </h3>

        <Password
        label='Password'
        placeholder='Enter your password'
        
        />

         <Password
        label='Confirm Password'
        placeholder='Enter your password again'
        
        />

        

        <Link href="/success" className="w-full ">
          <button className="bg-[#010006] text-white w-full font-inter py-3 rounded-[8px] mt-5 cursor-pointer">
            Update Password
          </button>
        </Link>

      </form>
    </main>
  );
};

export default NewPass;
