"use client";
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import sideicon1 from '@/public/sideicon1.png';
import sideicon2 from '@/public/sideicon2.png';
import sideicon3 from '@/public/sideicon3.png';
import sideicon4 from '@/public/sideicon4.png';
import sideicon5 from '@/public/sideicon5.png';
import sideicon6 from '@/public/sideicon6.png';
import logout from '@/public/logout.png';

const navitems = [
  { name: 'Overview', link: '/dashboard', icon: sideicon1 },
  { name: 'Users', link: '/users', icon: sideicon2 },
  { name: 'Usage', link: '/usage', icon: sideicon3 },
  { name: 'API Keys', link: '/api/keys', icon: sideicon4 },
  { name: 'Logs', link: '/logs', icon: sideicon5 },
  { name: 'Settings', link: '/', icon: sideicon6 },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="w-[241px] max-h-screen shrink-0 flex flex-col pl-2.5 pr-14 py-7 bg-[#F1F1F1] rounded-3xl">
      <div className="text-center">
        <p className="text-4xl font-bold">Logo</p>
      </div>

      <ul className="flex flex-col gap-6 mt-[90px]">
        {navitems.map((item, index) => {
          const isActive = pathname === item.link;

          return (
            <Link
              href={item.link}
              key={index}
              className={`py-2 px-2 font-inter font-medium flex items-center gap-4 cursor-pointer rounded-[8px] transition-all duration-200 ${
                isActive
                  ? 'bg-[#00AEEF] '
                  : 'text-[#000000] hover:bg-[#00AEEF] '
              }`}
            >
              <Image
                src={item.icon}
                alt={item.name}
                className={`w-6 h-6`}
              />
              {item.name}
            </Link>
          );
        })}
      </ul>

      <div className="mt-auto">
        <button className="flex items-center gap-4 py-2 px-2 w-full text-[#FF1100] hover:bg-[#00AEEF]  font-inter font-medium cursor-pointer rounded-[8px] transition-all duration-200">
          <Image src={logout} alt="log out" className="w-6 h-6" />
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
