import Image from 'next/image'
import React from 'react'
import Avatar from "@/public/Avatar.png"
import { IoMdNotificationsOutline } from 'react-icons/io'

const Topbar = () => {
  return (
    <div className='bg-amber-100 flex items-center justify-between '>
      <div>
        <input type="text" className='border' placeholder='Search' />
      </div>
      
      <div className='flex items-center gap-10'>
        <IoMdNotificationsOutline className='h-8 w-8 text-[#020202]' />

        <Image src={Avatar} alt='profile'/>
      </div>
    </div>
  )
}

export default Topbar
