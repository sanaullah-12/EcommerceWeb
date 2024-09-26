import React from "react";
import Button from "../Button/button";

export default function Card({ image, classname, title, price, star, rating }) {
  return (
    <>
      <div>
        <div className={` ${classname} `}>
          <div className=" pl-3 pt-3">
            <Button
              text="-40%"
              classname="w-[55px] h-[26px] bg-[#DB4444] text-white rounded-[4px] "
            />
          </div>
          <div className=" flex justify-center  ">
            <img src={image} alt="image" />
          </div>
           
        </div>
        <div className=" pt-3 font-poppins">
          <div className=" font-semibold text-sm ">{title}</div>
          <div className=" text-[#DB4444] font-medium">${price}</div>
          <div className=" text-[#FFAD33]">{star}</div>
        </div>
      </div>
    </>
  );
}
