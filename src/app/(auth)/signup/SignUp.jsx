import Image from 'next/image'
import React from 'react'
import logo from "@/public/auth_logo.png"
import InputField from '@/src/component/InputField'
import Password from '@/src/component/Password'
import { FcGoogle } from "react-icons/fc";


const SignUp = () => {
  return (
     <main className="h-screen grid justify-center items-center py-20 overflow-y-auto hide-scrollbar  ">
      <form className=" w-[500px]  text-cente gap-5 flex flex-col items-center rounded-2xl">

        <Image src={logo} alt=''/>

      <h3 className='font-inter font-bold text-[30px] text-[#333333] mb-9 mt-15'>Create your free account</h3>

      <div className='w-full flex flex-col gap-5'>
        <InputField
      label='Full Name'
      placeholder='Enter your name here'
      />

      <InputField
      label='Email Address'
      placeholder='Enter your email here'
      />

      <InputField
      label='Where did you hear about us?'
      placeholder='Facebook'
      />

      <Password
      label='Password'
      placeholder="Enter your password"
      />

      <Password
      label='Confirm Password'
      placeholder="Enter your password again"
      />
      </div>

      <div className="flex justify-between items-center  w-full mt">
          <div className="flex gap-2.5">
            <input type="checkbox" className=" accent-[#6A7282]" />
            <p className="text-[#6A7282] font-inter text-[12px]">I’d like to receive updates, exclusive offers, and product news via email.</p>
          </div>
          
        </div>



      <button className='bg-[#010006] text-white w-full font-inter py-3 mt-9 rounded-[8px] '>
        Sign Up
      </button>

      <div className='w-full flex items-center justify-between '>
        <span className='w-[45%] bg-[#989898] h-[1px]'></span>
        <p className='font-inter text-[#6A7282]'>or</p>
        <span className='w-[45%] bg-[#989898]  h-[1px]'></span>
      </div>

      <p className='font-inter text-[#6A7282] mt-9'>Aleady have an account? 
       <a href="/signin"
       className='text-[#333333] underline'
       > Sign in</a>

      </p>

      
         <button className='border-[#010006] border cursor-pointer relative w-full  font-inter py-3 rounded-full mt-9'>
        Continue with Google
      <FcGoogle className='w-6 h-6 absolute top-1/2 left-32 -translate-y-1/2 ' />
      </button>
     
      
      </form>

    </main>
  )
}

export default SignUp