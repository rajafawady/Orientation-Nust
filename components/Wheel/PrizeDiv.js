import React from "react";

const PrizeDiv = ({ spinDone, prizeNumber, hideOnMobile }) => {
  return (
    <div
      className={`md:basis-1/2 flex-col justify-center 
    md:w-full sm:w-3/4 w-full md:h-60 h-40 my-6
    bg-center bg-no-repeat  rounded-2xl 
    ${spinDone ? 'bg-[url("/focus.jpg")] bg-cover' : 'bg-[url("/s2w.png")] bg-contain'}
    ${hideOnMobile ? "hidden md:flex" : "flex md:hidden"}`}
    >
      <div className="font-montserrat text-white text-lg sm:text-2xl md:text-xl lg:text-3xl text-center ">
        {spinDone ? (
          <div>
            You won <span className="sm:text-4xl md:text-3xl lg:text-5xl text-2xl"><br/>{prizeNumber}</span>!
          </div>
        ) : (
          <div className="">
            {/* <img src="/s2w.png" className="h-56 mx-auto" /> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default PrizeDiv;
