"use client";
import React from 'react'
import ThemeToggle from './ThemeToggle';




const Li = ({children}) => {
  return (
    <li className='text-black dark:text-whit font-inter cursor-pointer'>
      {children}
    </li>
  )
}



const Navbar = () => {
  return (
    <div >
      
         
         <nav className='flex justify-between items-center py-4 px-[5%] rounded-full border border-[#006489]/40 bg-white/20 backdrop-blur-sm  '>
        
            <ul className='flex justify-between w-[50%]  py-2.5' >
                <Li>Home</Li>
                <Li>Features</Li>
                <Li>Video Chat</Li>
                <Li>PRICING</Li>
                <Li>FAQ</Li>
                <Li>BLOG</Li>
            </ul>

            <div className='flex '>
               <div  className='bg-white p-[1px] rounded-full'>
                 <button className={`bg-[#0F172B]  px-6 py-2.5 rounded-full hover:bg-[#314D91] transition-all duration-300 cursor-pointer text-white dark:text-blck    `}>JOIN</button>
               </div>
               <ThemeToggle/>
            </div>
            
        </nav>

       
      
    </div>
  )
}

export default Navbar
