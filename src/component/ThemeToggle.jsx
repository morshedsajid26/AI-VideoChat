"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import sun from "@/public/sunIcon.png"
import moon from "@/public/moonIcon.png"

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
   
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);
 useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggle = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDark(true);
    }
  };

  return (
    // <button
    //   onClick={toggle}
    //   className="px-4 py-2 border rounded bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors"
    // >
    //   {dark ? "Light Mode" : "Dark Mode"}
    // </button>

     <div
                onClick={toggle}
                className={`relative flex items-center w-24 h-11 border-[#006489] dark:border-white border bg-white/20 md:backdrop-blur-sm  rounded-full cursor-pointer transition-all duration-300 ${dark ? "md:bg-white/20  md:backdrop-blur-sm " : ""
                        }`}
            >
                
                <div
                    className={`absolute rounded-full  flex items-center justify-center font-bold transition-all duration-300 ${dark ? "translate-x-[52px]" : "translate-x-2"
                        }`}
                >
                    {dark ? <Image src={sun} className="w-8 h-8"/> : <Image src={moon} className="w-8 h-8"/>}
                </div>

                
             
                </div>
  );
}
