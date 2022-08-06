import React from "react";
import MyCarousel from "./Carousel";

const CarouselCntr = () => {
  return (
    <div className="">
      <div className="flex justify-between p-10 pt-12">
        <div>
          <img src="/svg/blue-svg/1.svg" className="w-36 md:w-48  lg:w-60" />
        </div>
        <div className="text-center my-auto font-brittany text-5xl text-tyrian-purple dark:text-pale-pink">
          Directors
        </div>
        <div>
          <img src="/svg/blue-svg/2.svg" className="w-36 md:w-48  lg:w-60" />
        </div>
      </div>

      <div className="py-4 rounded-xl  flex flex-col">
        <div>
          <MyCarousel />
        </div>
      </div>
    </div>
  );
};

export default CarouselCntr;
