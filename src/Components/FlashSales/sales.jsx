import React from "react";

export default function Sales() {
  return (
    <>
      <div className=" pt-24 pl-[134px]">
        <div className=" flex gap-5 items-center">
          <div className=" w-[20px] h-[40px] bg-[#DB4444] rounded-sm"></div>
          <div>
            <span className="  text-[#DB4444] font-semibold font-poppins">
              Today's
            </span>
          </div>
        </div>

        <div className="flex items-center gap-24 pt-5">
          <div>
            <h2 className=" text-2xl font-medium font-poppins">Flash Sales</h2>
          </div>
          <div>
            <div className="flex gap-6">
              <h1 className=" text-[12px] font-poppins font-semibold">Days</h1>
              <h1 className=" text-[12px] font-poppins font-semibold">Hours</h1>
              <h1 className=" text-[12px] font-poppins font-semibold">
                Minutes
              </h1>
              <h1 className=" text-[12px] font-poppins font-semibold">
                Seconds
              </h1>
            </div>
            <div className="flex gap-4">
              <h1 className="text-2xl font-bold font-poppins">03</h1>
              <span className=" text-[#DB4444] ">:</span>
              <h1 className="text-2xl font-bold font-poppins">12</h1>
              <span className=" text-[#DB4444]">:</span>
              <h1 className="text-2xl font-bold font-poppins ">56</h1>
              <span className=" text-[#DB4444]">:</span>
              <h1 className="text-2xl font-bold font-poppins">18</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
