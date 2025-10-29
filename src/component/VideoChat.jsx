import React from "react";
import Container from "./Container";
import Image from "next/image";
import technology from "@/public/technology.png";
import cartoon from "@/public/cartoon.png";
import video from "@/public/video.png";
import icon from "@/public/icon.png";
import { PiSealCheckFill } from "react-icons/pi";

const VideoChat = () => {
  return (
    <div className="py-[250px]">
      <Container
        className={`flex justify-center flex-col items-center w-[55%] `}
      >
       <div className='w-[20%] py-2.5 rounded-full shadow-3xl bg-[#E0E7FF] flex items-center justify-center gap-2'>
        <Image src={icon} alt='icon' />
            <h3 className="font-inter font-bold text-center  text-[#1447E6]  ">
          Video Chat
        </h3>

        </div>
        <div className="mt-[30px]">
          <h3 className="font-inter font-bold text-[36px] text-center text-[#0F172B]">
            Talk face to face with AI
          </h3>
          <p className="font-onest text-[18px] text-[#45556C] mt-2 text-center ">
            High-quality video chat enabling instant, face-to-face interaction
            between users and AI avatars.
          </p>
        </div>
        <div className="flex items-center justify-between mt-20">
          <div>
            <Image src={technology} alt="" />
          </div>
          <div className="w-[45%] ">
            <p className="font-onest text-[18px] text-[#45556C] mt-2 text ">
              Leveraging GPT technology, our platform provides personalized,
              real-time assistance. Get instant feedback and tailored resources
              to enhance your learning experience.
            </p>

            <div className="flex flex-col gap-2.5 mt-[30px]">
              <p className="text-[#6A7282] fot-inter flex items-center gap-4 px-2.5 py-2 border border-[#00AEEF] w-[60%] rounded-full ">
                <PiSealCheckFill className="w-5 h-5" />
                Face to face AI interaction
              </p>

              <p className="text-[#6A7282] fot-inter flex items-center gap-4 px-2.5 py-2 border border-[#00AEEF] w-[60%] rounded-full ">
                <PiSealCheckFill className="w-5 h-5" />
                Face to face AI interaction
              </p>

              <p className="text-[#6A7282] fot-inter flex items-center gap-4 px-2.5 py-2 border border-[#00AEEF] w-[60%] rounded-full ">
                <PiSealCheckFill className="w-5 h-5" />
                Face to face AI interaction
              </p>
            </div>

            <button className="bg-[#00AEEF] mt-10 px-15 py-2.5 rounded text-white   cursor-pointer">
              Try now
            </button>
          </div>
        </div>
      </Container>

      <Container
        className={`flex justify-center flex-col items-center mt-[120px]`}
      >
        <div className="relative">
          <Image src={cartoon} alt="cartoon" />

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[70%] bg-[#B9ECFF] px-25 pt-5 pb-[45px] text-center flex flex-col items-center gap-5 rounded-xl">
            <p className="text-[#000000] font-inter font-medium">Kelvin is waiting for you</p>

            <Image src={video} alt="video"/>

            <p className="font-inter text-[#000000]">By joining this meeting you accept our 

                <a className="text-[#00AEEF] underline" href="/"> privacy policy</a>
            </p>

          </div>
        </div>
      </Container>
    </div>
  );
};

export default VideoChat;
