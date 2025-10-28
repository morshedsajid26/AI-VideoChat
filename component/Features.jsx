import React from 'react'
import Container from './Container'
import Image from 'next/image'
import frame1 from '../public/Frame1.png'
import frame2 from '../public/Frame2.png'
import frame3 from '../public/Frame3.png'

const Features = () => {
  return (
    <div className='py-[200px]'>
        <Container className={`flex justify-center flex-col items-center`}>
            <h3 className='font-inter font-bold text-center  text-[#1447E6]  w-[15%] py-2.5 rounded-full shadow-3xl bg-[#E0E7FF]'>Features</h3>

            <div className='mt-[30px]'>
                <h3 className='font-inter font-bold text-[36px] text-center text-[#00AEEF]'>AI Video Chat Features</h3>
                <p className='font-onest text-[18px] text-[#45556C] mt-2 text-center '>An AI-powered video chat platform that lets users engage in real-time, lifelike conversations with intelligent avatars</p>
            </div>

            <div className='grid grid-cols-3 justify-between w-full gap-7 mt-[88px]'>
                <div className='bg-[#FFADAD]/30 p-[2px] rounded-[20px]'>
                <div className='bg-[#FBF6F6] rounded-[20px] py-6 px-4'>
                    <Image src={frame1} alt=''/>
                    <h3 className='font-inter font-bold text-[20px] text-[#000000] mt-[85px]'>Web-Based Video Chat
                    </h3>

                    <p className='font-onest text-[16px] text-[#7E7E7E] mt-2.5'>A seamless web-based video chat system that runs directly in the browser.</p>
                </div>
                    </div>

                    
                 <div className='bg-[#00AEEF]/30 p-[2px] rounded-[20px]'>
                <div className='bg-[#FBF6F6] rounded-[20px] py-6 px-4'>
                    <Image src={frame1} alt=''/>
                    <h3 className='font-inter font-bold text-[20px] text-[#000000] mt-[85px]'>AI Avatars

                    </h3>

                    <p className='font-onest text-[16px] text-[#7E7E7E] mt-2.5'>Realistic AI avatars that can see, speak, and respond naturally in real time.</p>
                </div>
                    </div> 
                    
                <div className='bg-[#EC34EF]/30 p-[2px] rounded-[20px]'>
                <div className='bg-[#FBF6F6] rounded-[20px] py-6 px-4'>
                    <Image src={frame1} alt=''/>
                    <h3 className='font-inter font-bold text-[20px] text-[#000000] mt-[85px]'>Real-Time Conversations

                    </h3>

                    <p className='font-onest text-[16px] text-[#7E7E7E] mt-2.5'>Enjoy seamless interaction combining voice and video for a truly human-like exchange.</p>
                </div>
                    </div>
            </div>
            
        </Container>
        
    </div>
  )
}

export default Features
