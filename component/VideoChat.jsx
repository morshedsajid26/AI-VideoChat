import React from 'react'
import Container from './Container'
import Image from 'next/image'
import technology  from '../public/technology.png'
import cartoon from '../public/cartoon.png'

const VideoChat = () => {
  return (
    <div className='py-[250px]'>
        <Container className={`flex justify-center flex-col items-center w-[55%] `}>
            <h3 className='font-inter font-bold text-center  text-[#1447E6]  w-[20%] py-2.5 rounded-full shadow-3xl bg-[#E0E7FF]'>Video Chat</h3>   
            <div className='mt-[30px]'>
                <h3 className='font-inter font-bold text-[36px] text-center text-[#0F172B]'>Talk face to face with AI</h3>
                <p className='font-onest text-[18px] text-[#45556C] mt-2 text-center '>High-quality video chat enabling instant, face-to-face interaction between users and AI avatars.</p>
            </div>
            <div className='flex items-center justify-between mt-20'>

                <div>
                    <Image src={technology} alt=''/>
                </div>
                <div className='w-[45%] '>
                    <p className='font-onest text-[18px] text-[#45556C] mt-2 text '>Leveraging GPT technology, our platform provides personalized, real-time assistance. Get instant feedback and tailored resources to enhance your learning experience.</p>

                    
                    
                    <button className='bg-[#00AEEF] mt-10 px-15 py-2.5 rounded text-white   cursor-pointer'>
                        Try now
                    </button>
                </div>
            </div>


           
        </Container>

        <Container className={`flex justify-center flex-col items-center mt-[120px]`}>
             <div>
                <Image src={cartoon} alt=''/>
            </div>
        </Container>
      
    </div>
  )
}

export default VideoChat
