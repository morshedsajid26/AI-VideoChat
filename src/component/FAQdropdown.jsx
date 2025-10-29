"use client";
import React, { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa';


const FAQdropdown = ({question,answer,className}) => {
    const [dropdown,setDropdown]=useState(false);
  return (
    <div className={`w-full ${className}`}>
      <div  onClick={()=>setDropdown(!dropdown)}  className="one  border-b border-white cursor-pointer">
                      <div  className="up flex items-center justify-between py-[25.5px]">
                          <h4 className='text-[#333333] text-[18px] font-semibold font-inter'>{question}</h4>
                          {dropdown? <FaMinus className='w-[14px] h-[14px] text-[#333333]' />: <FaPlus className='w-[14px] h-[14px] text-[#333333]' />}
                          
                      </div>
                      <p className={`text-[#45556C] text-[16px] font-inter  ${dropdown? "opacity-100 h-auto visible overflow-auto pb-4" : "opacity-0 h-0 invisible overflow-hidden"}`}>{answer}</p>
                      
                  </div>
    </div>
  )
}

export default FAQdropdown
