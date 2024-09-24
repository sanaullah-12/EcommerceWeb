import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
export default function Header() {
  return (
    <div className=" bg-black h-12   flex justify-center items-center gap-60  ">
      <div className=" bg-red">
        <h1 className="text-sm font-poppins gap-5  text-center text-[#D9D9D9]">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <span className=" text-base font-semibold ml-5  underline text-[#ffffff]    ">
            Shop Now
          </span>
        </h1>
      </div>
      <div className=" flex justify-center items-center">
        <h3 className=" text-white">English</h3>
        <span>
          <IoMdArrowDropdown className=" text-white " />
        </span>
      </div>
    </div>
  );
}
