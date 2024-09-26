import React, { useEffect, useState } from "react";
import gameremote from "../../assets/Images/firstiemgame.png";
import Card from "../../Utils/Card/card";
import { SalesData } from "../../MockData/SALES_DATA";
import Button from "../../Utils/Button/button";

export default function Sales({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
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
              <h1 className="text-2xl font-bold font-poppins">
                {timeLeft.days || 0}
              </h1>
              <span className=" text-[#DB4444] ">:</span>
              <h1 className="text-2xl font-bold font-poppins">
                {timeLeft.hours || 0}
              </h1>
              <span className=" text-[#DB4444]">:</span>
              <h1 className="text-2xl font-bold font-poppins  ">
                {timeLeft.minutes || 0}
              </h1>
              <span className="text-[#DB4444]">:</span>
              <h1 className="text-2xl font-bold font-poppins">
                {timeLeft.seconds || 0}
              </h1>
            </div>
          </div>
        </div>
        <div>
          <div className=" flex justify-between items-center pr-[135px] pt-[40px]">
            {SalesData.map((items, i) => (
              <Card
                classname="w-[270px] h-[230px] bg-[#F5F5F5] rounded-[4px]"
                image={items.image}
                title={items.heading}
                price={items.price}
                star={items.stars}
              />
            ))}
          </div>
        </div>
        <div className=" flex justify-center items-center pt-[60px] pb-10">
          <Button
            text="View All Products"
            classname="w-[200px] h-[46px] bg-[#DB4444] text-white rounded-[4px] "
          />
        </div>
      </div>
    </>
  );
}
