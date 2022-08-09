import React from "react";
import Card2 from "./Card2";
import MeetOurTeam from "./MeetOurTeam";
import { Team } from "../SubComponents/Lottie";

const CardList = () => {
  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="flex justify-center md:justify-between px-10">
          <div className="my-auto basis-2/12  md:block hidden">
            
          </div>
          <div className="flex flex-col justify-center  md:basis-8/12 ">
            <div className="text-center lg:text-7xl md:text-6xl text-5xl mb-8 font-montserrat my-4 md:mb-20 md:mt-6 text-tyrian-purple dark:text-pale-pink">
            <MeetOurTeam />
            </div>
            <div className="text-center font-brittany text-4xl md:text-5xl md:my-0 mb-10 md:mb-12 text-tyrian-purple dark:text-pale-pink">
              Executive Committee
            </div>
          </div>
          <div className="my-auto basis-2/12 md:block hidden">
        
          </div>
        </div>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:flex-row `}
        >
          <div className="px-4 py-4 md:py-8 mx-auto flex justify-evenly" layout>
            <Card2 name={"Shaukat Ali"} role={"President"} />
          </div>
          <div className="px-4 py-8 mx-auto" layout>
            <Card2 name={"Shaukat Ali"} role={"VP Operations"} />
          </div>
          <div className="px-4 py-8 mx-auto" layout>
            <Card2 name={"Shaukat Ali"} role={"VP Coordination"} />
          </div>
          <div className="px-4 py-8 mx-auto" layout>
            <Card2 name={"Shaukat Ali"} role={"VP Sponsorship"} />
          </div>
          <div className="px-4 py-8 mx-auto" layout>
            <Card2 name={"Shaukat Ali"} role={"VP Resources"} />
          </div>
          <div className="px-4 py-8 mx-auto" layout>
            <Card2 name={"Shaukat Ali"} role={"VP Media"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardList;
