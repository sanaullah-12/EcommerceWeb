import React from "react";
import { IoHeartOutline } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
export default function Navbar() {
  return (
    <>
      <div className="   h-[94px] border-b-2 flex justify-around items-center ">
        <div className=" flex justify-between items-center w-full pl-[135px] pr-[135px]">
          <div>
            <h1 className=" text-xl font-bold">LOGO</h1>
          </div>
          <div className=" flex gap-12 font-poppins text-lg text-black">
            <ul>Home</ul>
            <ul>About</ul>
            <ul>Contact</ul>
            <ul>Sign Up</ul>
          </div>
          <div className=" flex justify-center items-center gap-5 ">
            <div>
              <input
                type="text"
                placeholder="What are you looking for?  "
                className=" w-[243px] h-[38px] bg-[#F5F5F5] rounded-[4px] pl-[10px] text-sm font-poppins "
              />
            </div>
            <IoHeartOutline className=" w-[28px] h-[28px]" />
            <RiShoppingCartLine className=" w-[28px] h-[28px]" />
          </div>
        </div>
      </div>
    </>
  );
}
