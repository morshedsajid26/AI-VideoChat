import Link from 'next/link';
import React from 'react'
import { FaUsers } from 'react-icons/fa';
import { MdHome } from 'react-icons/md';
import  sideicon3  from '@/public/sideicon3.png';
import  sideicon1  from '@/public/sideicon1.png';
import  sideicon2  from '@/public/sideicon2.png';
import  sideicon4  from '@/public/sideicon4.png';
import  sideicon5  from '@/public/sideicon5.png';
import  sideicon6  from '@/public/sideicon6.png';
import logout from '@/public/logout.png';
import Image from 'next/image';



const navitems = [
  {name: 'Overview', link: '/dashboard' ,icon: sideicon1},
  {name: 'Users', link: '/' ,icon: sideicon2},
  {name: 'Usage', link: '/' ,icon: sideicon3},
    {name: 'API Keys', link: '/' ,icon: sideicon4},
    {name: 'Logs', link: '/' ,icon: sideicon5},
    {name: 'Settings', link: '/' ,icon: sideicon6},

];



const Sidebar = () => {
  return (
    <div className={`w-[241px] max-h-screen shrink-0 flex flex-col  pl-2.5 pr-14   py-7 bg-[#F1F1F1] rounded-3xl`}>
        <div className='text-center'>
           <p className='text-4xl'>Logo</p>
        </div>
      
      <ul className='flex flex-col gap-6  mt-[90px] '>
        {navitems.map((item, index) => (
          <Link href={item.link} key={index} className='py-2 px-2  text-[#000000] hover:bg-[#00AEEF] font-inter font-medium flex items-center gap-4 cursor-pointer rounded-[8px]'>
            <Image src={item.icon} alt={item.name} className='w-6 h-6'/>
              {item.name}
            
          </Link>
        ))}
      </ul>

      <div className='mt-[300px]'>
        <button className='flex items-center gap-4 py-2 px-2 w-full text-[#FF1100] hover:bg-[#00AEEF] font-inter font-medium  cursor-pointer rounded-[8px] '>
            <Image src={logout} alt='log out'/>
            Log Out
        </button>
      </div>
    </div>
  )
}

export default Sidebar
