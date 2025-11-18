"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import logo from "@/public/auth_logo.png";
import InputField from '@/src/component/InputField';
import Password from '@/src/component/Password';
import { FcGoogle } from "react-icons/fc";
import axios from 'axios';
import { useRouter } from 'next/navigation';

const SignIn = () => {
  const router = useRouter();

  // form state
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // ui states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // handle change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!formData.email || !formData.password) {
      setError("Email and password are required");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post("http://127.0.0.1:8000/api/user-login", {
        email: formData.email,
        password: formData.password,
      });

      if (res.status === 200) {
        setSuccess("Login successful!");
        // Optionally save token if returned
        if (res.data.token) {
          localStorage.setItem("authToken", res.data.token);
        }
        setTimeout(() => {
          router.push("/"); // redirect after login
        }, 400);
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="h-screen grid justify-center items-center py-20 overflow-y-auto hide-scrollbar">
      <form
        onSubmit={handleSubmit}
        className="w-[500px] text-cente gap-5 flex flex-col items-center rounded-2xl"
      >
        <Image src={logo} alt="" />

        <h3 className='font-inter font-bold text-[30px] text-[#333333] mb-9 mt-15'>
          Sign in to your account
        </h3>

        <InputField
          label='Email Address'
          placeholder='Enter your email here'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />

        <Password
          label='Password'
          placeholder="Enter your password"
          name='password'
          value={formData.password}
          onChange={handleChange}
        />

        <div className="flex justify-between items-center w-full mt">
          <div className="flex gap-2.5">
            <input type="checkbox" className="accent-[#000000]" />
            <p className="text-[#333333] font-inter">Remember Password</p>
          </div>
          <a
            href="/resetpass"
            className="text-[#333333] hover:text-[#00AEEF] font-inter underline"
          >
            Forgot Password?
          </a>
        </div>

        {error && <p className="text-red-500 text-sm mt-3">{error}</p>}
        {success && <p className="text-green-600 text-sm mt-3">{success}</p>}

        <button
          type='submit'
          disabled={loading}
          className='bg-[#010006] text-white w-full font-inter py-3 rounded-[8px] cursor-pointer mt-4'
        >
          {loading ? "Logging in..." : "Log In"}
        </button>

        <div className='w-full flex items-center justify-between mt-6'>
          <span className='w-[45%] bg-[#989898] h-[1px]'></span>
          <p className='font-inter text-[#6A7282]'>or</p>
          <span className='w-[45%] bg-[#989898] h-[1px]'></span>
        </div>

        <p className='font-inter text-[#6A7282] mt-9'>
          Don't have an account? 
          <a href="/signup" className='text-[#333333] underline'>
            Sign up
          </a>
        </p>

        <button className='border-[#010006] border cursor-pointer relative w-full font-inter py-3 rounded-full mt-9'>
          Continue with Google
          <FcGoogle className='w-6 h-6 absolute top-1/2 left-32 -translate-y-1/2' />
        </button>
      </form>
    </main>
  );
};

export default SignIn;
