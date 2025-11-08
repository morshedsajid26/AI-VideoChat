"use client"
import React, { useEffect } from 'react'
import call from "@/public/call.png";
import cartoon_man from "@/public/cartoon_man.png";
import Container from '@/src/component/Container';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


const ChatRoom = () => {
      const router = useRouter();

      useEffect(() => {
    const elem = document.documentElement; 
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  }, []);

    const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };

  const handleBack = () => {
    exitFullscreen();
    router.back();    
  };

  return (
    <div>
       <Container
        className={`flex justify-center flex-col items-center py-10 `}
      >
        <div className="relative ">
          <Image className="md:w-auto md:h-auto " src={cartoon_man} alt="cartoon" />

          <div className="bg-[#D9D9D9] flex flex-col items-center py-5 md:py-10">
            
 
            <Image 
             onClick={handleBack}
            className="md:w-auto md:h-auto h-[30px] w-[30px] cursor-pointer" src={call} alt="call"/>

            <p className="font-inter  text-[#000000] text-[12px] md:text-[16px] mt-3"> 00:03:02            
            </p>
            
            <input type="text" placeholder='type' className='md:w-[730px] w-[350px] md:py-8 py-3 px-4 md:px-10 outline-0 bg-white font-inter rounded-2xl md:mt-14 mt-7 text-[12px] md:text-[16px]' />

          </div>
        </div>
      </Container>
    </div>
  )
}

export default ChatRoom
