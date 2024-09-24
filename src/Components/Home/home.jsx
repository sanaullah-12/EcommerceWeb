import React from "react";
import ilogo from "../../assets/icons/iphonelogo.png";
import Iphone from "../../assets/iphoneimage.png";
export default function Home() {
  return (
    <>
      <div>
        <div className=" flex justify-between   pl-[135px] pr-[135px] ">
          <div className=" w-[280px]        text-start font-poppins  text-balance border-r-2">
            <div className=" list-none text-lg  ">
              <li className=" m-2">Women's Fashion</li>
              <li className=" m-2">Mens's Fashion</li>
              <li className=" m-2">Electronics</li>
              <li className=" m-2">Home & Lifestyle</li>
              <li className=" m-2">Medicine</li>
              <li className=" m-2">Sports & Outdoor</li>
              <li className=" m-2">Baby’s & Toys</li>
              <li className=" m-2">Groceries & Pets</li>
              <li className=" m-2">Health & Beauty</li>
            </div>
          </div>
          <div className=" pt-5">
            <div className=" w-[890px]    bg-black">
              <div className=" flex justify-between items-center pl-[64px] ">
                <div>
                  <div className="flex items-center gap-5 ">
                    <img src={ilogo} alt="img" className=" w-[40px] h-[49px]" />
                    <span className=" text-white">Iphone 14 Series</span>
                  </div>
                  <div className=" ">
                    <h1 className=" text-white text-5xl pt-5  ">
                      UP to 10% <br />
                      off Voucher
                    </h1>
                  </div>
                  <div>
                    <h5 className=" text-white pt-5 underline">Shop Now</h5>
                  </div>
                </div>
                <div>
                  <img
                    src={Iphone}
                    alt="img"
                    className=" w-[400px] h-[300px]"
                  />
                </div>
              </div>
              <div className="flex justify-center items-center gap-3 pb-4">
                <div className=" w-3 h-3 bg-[#808080] rounded-md "></div>
                <div className=" w-3 h-3 bg-[#808080] rounded-md "></div>
                <div className=" w-3 h-3 bg-[#DB4444] border-white  border-2 rounded-md "></div>
                <div className=" w-3 h-3 bg-[#808080] rounded-md "></div>
                <div className=" w-3 h-3 bg-[#808080] rounded-md "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
