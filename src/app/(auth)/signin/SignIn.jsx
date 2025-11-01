import Image from 'next/image'
import React from 'react'
import logo from "@/public/auth_logo.png"
import InputField from '@/src/component/InputField'
import Password from '@/src/component/Password'
import { FcGoogle } from "react-icons/fc";


const SignIn = () => {
  return (
     <main className="h-screen grid justify-center items-center py-20 overflow-y-auto hide-scrollbar">
      <form className=" w-[500px]  text-cente gap-5 flex flex-col items-center rounded-2xl">

        <Image src={logo} alt=''/>

      <h3 className='font-inter font-bold text-[30px] text-[#333333] mb-9 mt-15'>Sign in to your account</h3>

      <InputField
      label='Email Address'
      placeholder='Enter your email here'
      />
      <Password
      label='Password'
      placeholder="Enter your password"
      />

      <div className="flex justify-between items-center  w-full mt">
          <div className="flex gap-2.5">
            <input type="checkbox" className=" accent-[#000000]" />
            <p className="text-[#333333] font-inter ">Remember Password</p>
          </div>
          <a href="/resetpass" className="text-[#333333] hover:text-[#00AEEF] font-inter underline">Forgot Password?</a>
        </div>



      <button className='bg-[#010006] text-white w-full font-inter py-3 rounded-[8px] cursor-pointer'>
        Log In
      </button>

      <div className='w-full flex items-center justify-between '>
        <span className='w-[45%] bg-[#989898] h-[1px]'></span>
        <p className='font-inter text-[#6A7282]'>or</p>
        <span className='w-[45%] bg-[#989898]  h-[1px]'></span>
      </div>

      <p className='font-inter text-[#6A7282] mt-9'>Don't have an account? 
       <a href="/signup"
       className='text-[#333333] underline'
       > Sign up</a>

      </p>

      
         <button className='border-[#010006] border cursor-pointer relative w-full  font-inter py-3 rounded-full mt-9'>
        Continue with Google
      <FcGoogle className='w-6 h-6 absolute top-1/2 left-32 -translate-y-1/2 ' />
      </button>
     
      
      </form>

    </main>
  )
}

export default SignIn