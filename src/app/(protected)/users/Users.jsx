"use client";

import Dropdown from "@/src/component/Dropdown";
import Table from "@/src/component/Table";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import Avatar from "@/public/Avatar.png";
import Link from "next/link";
import vector from "@/public/Vector.png";
import Pagination from "@/src/component/Pagination";
import Cookies from "js-cookie";
import axios from "axios";

export default function ActivityPage() {
  const [Active, setActive] = useState("All");
  const [baseOnTitle, setBaseOnTitle] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewOpen, setViewOpen] = useState(false);
  const [creditOpen, setCreditOpen] = useState(false);
  const [resetOpen, setResetOpen] = useState(false);
   
  useEffect(() => {
    axios.defaults.withCredentials = true;
  }, []);

  // ---- ACTION BUTTON UI ----
  let ActionButton = () => {
    return (
      <div>
        <button
          onClick={() => setViewOpen(true)}
          className="bg-[#00AEEF] font-inter font-medium py-2 px-11 rounded-full text-[#121212] cursor-pointer  hover:bg-[#00AEEF]/50 transition-all duration-300"
        >
          View
        </button>
      </div>
    );
  };

  // ---- Table Heads ----
  const TableHeads = [
    { Title: "Name", key: "name", width: "10%" },
    { Title: "ID", key: "id", width: "10%" },
    { Title: "Email", key: "email", width: "15%" },
    { Title: "Phone", key: "phone", width: "15%" },
    { Title: "Token Used", key: "token_used", width: "10%" },
    { Title: "Action", key: "action", width: "10%" },
  ];

  // ---------- ✅ Fetch All Users API ----------
   useEffect(() => {
    const fetchUsers = async () => {
      try {
        const email = Cookies.get("email"); // MUST MATCH login cookie

        if (!email) {
          console.log("Admin email not found in cookies");
          return;
        }

        const res = await axios.get("http://127.0.0.1:8000/api/all-users", {
          headers: { email: email },
          withCredentials: true,
        });

        const data = res.data; // axios uses res.data (NOT res.json())

        if (data.status === "success") {
          const formatted = data.users.map((u) => ({
            name: u.name,
            id: "#" + u.id,
            email: u.email,
            phone: u.mobile,
            token_used: u.token_used ?? "0",
            action: <ActionButton />,
          }));

          setBaseOnTitle(formatted);
        } else {
          console.error("API Error:", data);
        }
      } catch (error) {
        console.error("Fetch Error:", error);
      }
    };

    fetchUsers();
  }, []);

  // ---- Pagination ----
  const itemsPerPage = 10;
  const totalPages = Math.ceil(baseOnTitle.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = baseOnTitle.slice(startIndex, startIndex + itemsPerPage);

  const pathname = usePathname();
  const pathParts = pathname.split("/").filter(Boolean);
  const headerText = pathParts.join(" ");

  const handleOptionSelect = (option) => {
    console.log("Selected:", option);
  };

  return (
    <div>
      <h3 className="capitalize font-inter text-[#000000] font-medium text-[24px] mb-8">
        {headerText}
      </h3>

      <div className="flex items-center gap-14">
        <div className="relative ">
          <input
            type="text"
            className="border outline-none border-[#000000] py-[14px] px-12 w-[462px] rounded-[15px] text-[#000000] placeholder:text-[#000000] font-inter"
            placeholder="Search"
          />
          <FaSearch className=" absolute top-1/2 left-6 -translate-y-1/2 text-[#7AA3CC]" />
        </div>

        <Dropdown
          placeholder="Filter by Usage"
          options={["1", "2", "3"]}
          onSelect={handleOptionSelect}
          className={`w-[14%]`}
        />

        <Dropdown
          placeholder="Filter by Registration Date"
          options={["1", "2", "3"]}
          onSelect={handleOptionSelect}
          className={`w-[21%]`}
        />
      </div>

      <div>
        <Table TableHeads={TableHeads} TableRows={currentItems} />
      </div>

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      {/* ---- All Modal Code unchanged ---- */}
      {viewOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 ">
          <div className="bg-white  w-[50%] rounded-[15px]  ">
            <div className="bg-black w-full rounded-[15px] py-6 px-8 flex items-center justify-between ">
              <p className="text-[#FFFFFF] font-inter text-[20px]">
                User Deatils: Ahmed Rahman
              </p>

              <ImCross
                onClick={() => setViewOpen(false)}
                className="text-white cursor-pointer "
              />
            </div>

            <div className="px-8 pt-12">
              <div className="flex items-center gap-4">
                <Image src={Avatar} alt="profile" />

                <div>
                  <h3 className="font-inter font-semibold text-[24px] text-[#000000]">
                    Ahmed Rahman
                  </h3>
                  <p className="font-inter text-[#000000] my-1">
                    example@gmail.com
                  </p>
                  <p className="font-inter text-[#6D6D6D]">User ID: USR001</p>
                </div>
              </div>

              <div>
                <p className="font-inter text-[20px] text-[#000000] mt-10">
                  Usage Summery
                </p>
                <div className="flex items-center gap-14 mt-2">
                  <div className="bg-[#C4EBE9] w-[32%] rounded-2xl p-4">
                    <p className="font-inter text-[20px] text-[#000000] ">
                      Total Billed Tokens: 1.2M
                    </p>
                    <p className="font-inter text-[20px] text-[#000000] mt-4">
                      Your Minutes Used: 5320
                    </p>
                  </div>
                  <Link href="/logs">
                    <button className="font-inter text-[20px] text-[#00AEEF] cursor-pointer border-b">
                      View Session History
                    </button>
                  </Link>
                </div>
              </div>

              <div className="flex gap-6 mt-8 border-b border-[#C2C2C2] pb-4">
                <button
                  onClick={() => {
                    setViewOpen(false);
                    setCreditOpen(true);
                  }}
                  className="font-inter  bg-[#00AEEF] cursor-pointer text-[#000000] py-2 px-12 rounded-[8px] font-medium"
                >
                  Add Credit
                </button>

                <button
                  onClick={() => {
                    setViewOpen(false);
                    setResetOpen(true);
                  }}
                  className="font-inter border  border-[#00AEEF] cursor-pointer text-[#000000] py-2 px-12 rounded-[8px] font-medium"
                >
                  Reset Usage
                </button>
              </div>

              <div className="flex justify-between py-6">
                <button className="font-inter  bg-[#E4E4E6] cursor-pointer text-[#616161] py-2 px-5 rounded-[8px] font-medium">
                  View Conversation Logs
                </button>
                <button className="font-inter  bg-[#00AEEF] cursor-pointer text-[#000000] py-2 px-5 rounded-[8px] font-medium">
                  Apply Adjustment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ---- Credit Modal ---- */}
      {creditOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 ">
          <div className="bg-white  w-[30%] rounded-[15px]  ">
            <div className="bg-black w-full rounded-[15px] py-6 px-8 flex items-center justify-between ">
              <p className="text-[#FFFFFF] font-inter text-[20px]">
                Add Credit to User Account
              </p>

              <ImCross
                onClick={() => setCreditOpen(false)}
                className="text-white cursor-pointer "
              />
            </div>

            <div className="px-8 pt-12">
              <div>
                <h3 className="font-inter font-semibold text-[24px] text-[#000000]">
                  Add Credit to User Account
                </h3>
                <p className="font-inter text-[#6D6D6D] mt-2">
                  For: John Doe (example@gmail.com)
                </p>
              </div>

              <div className="mt-10">
                <p className="font-inter text-[20px] text-[#000000]">
                  Amount to Add:
                </p>

                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Token Number"
                    className="py-2 px-2 font-inter border-2 border-[#00AEEF] rounded-[8px] text-[#000000]  placeholder:text-[#000000] outline-none w-[50%]"
                  />
                  <button className="py-2 px-9 font-inter bg-[#F6F6F6] border-2 border-[#C5C5C5] rounded-[8px] text-[#000000] ml-8">
                    Token
                  </button>
                </div>

                <div className="mt-10 pb-4">
                  <p className="font-inter text-[20px] text-[#000000]">
                    Reason for Credit:
                  </p>
                  <input
                    type="text"
                    placeholder="e.g., promotional offer, bug compensation"
                    className="mt-4 py-2 px-2 font-inter border-2 border-[#A4A4A4] rounded-[8px] text-[#7B7B7B]  placeholder:text-[#7B7B7B] outline-none w-[90%]"
                  />
                </div>
                <div className="flex justify-center gap-8 py-6 border-t border-[#C2C2C2]">
                  <button
                    onClick={() => setCreditOpen(false)}
                    className="font-inter  bg-[#E4E4E6] cursor-pointer text-[#616161] py-2 px-5 rounded-[8px] font-medium"
                  >
                    Cancel
                  </button>
                  <button className="font-inter  bg-[#00AEEF] cursor-pointer text-[#000000] py-2 px-5 rounded-[8px] font-medium">
                    Add Credit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ---- Reset Modal ---- */}
      {resetOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 ">
          <div className="bg-[#23262F] p-8  w-[40%] rounded-[15px]  ">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-[#FFFFFF] font-inter text-[20px]">
                  Add Credit to User Account
                </p>
              </div>

              <ImCross
                onClick={() => setResetOpen(false)}
                className="text-white cursor-pointer "
              />
            </div>
            <p className="font-inter text-[#6D6D6D] mt-1">
              For: John Doe (example@gmail.com)
            </p>

            <div className="border border-[#515151] px-6 py-4 mt-8">
              <div className="flex gap-8 ">
                <Image src={vector} alt="vector" />
                <p className="font-inter text-[32px] w-[70%] text-white">
                  Are you sure want to reset all usage data for this user?
                </p>
              </div>
              <p className="font-inter text-[24px]  text-white mt-14">
                This action cannot undone.
              </p>
            </div>

            <div className="mt-8 pb-4">
              <p className="font-inter text-[20px] text-[#FFFFFF]">
                Reason for Reset:
              </p>
              <input
                type="text"
                placeholder="e.g., promotional offer, bug compensation"
                className="mt-4 py-2 px-2 font-inter border-2 border-[#A4A4A4] rounded-[8px] text-[#7B7B7B]  placeholder:text-[#7B7B7B] outline-none w-full"
              />
            </div>
            <div className="flex justify-end gap-8 py-6 ">
              <button
                onClick={() => setResetOpen(false)}
                className="font-inter  bg-[#E4E4E6] cursor-pointer text-[#000000] py-2 px-10 rounded-[8px] font-medium"
              >
                Cancel
              </button>
              <button className="font-inter  bg-[#EF4800] cursor-pointer text-[#FFFFFF] py-2 px-10 rounded-[8px] font-medium">
                Reset Usage
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
