import React from "react";
import Layout from "../components/Layout";
import EC from "../components/EC/EC";
import { AppleWatchDock } from "../components/AppleWatchDock";
import Motion from "../components/SubComponents/Motion";
import ClipArt from "../components/SubComponents/ClipArt";
import { AnimationPropExample } from "../components/SubComponents/AnimationBack";
import { TypeWriter } from "../components/SubComponents/TextAnimation";


const directorateText = "Every great event needs an even better team full of passionate individuals lazer-focused on success. With this in mind each individual member of the directorate was selected after a meticulous evaluation procedure, ensuring that the ON '22 dream team is comprised of the absolute best that NUST has to offer. Fast forward to the present: true to expectations, our beyond capable directorate has been working day and night to pull off an event that you'll remember well into the later years of your time at NUST. All of the memories you'll be making during the orientation are all thanks to these hardworking individuals and their teams."

const team = () => {
  return (
    <>
      <div className="">
        <Layout title={"Our Team"}>
          <div className="mt-12">

            {/* <img src="/svg/blue-svg/1.svg" width={200} className='fixed left-32 top-96' /> */}
          <EC />

            <div className="md:flex justify-center w-full py-16 mt-16 bg-tyrian-purple dark:bg-gray-800">
              <div className="sm:w-full md:w-2/3">
                  <div className="pl-6 pr-6 pt-6">
                    <span className="font-sans font-extrabold text-white text-5xl md:text-7xl ">Directorate</span>
                  </div>
                  <div className="pl-6 pr-6 pt-6">
                    <TypeWriter Text={directorateText}/>
                  </div>
              </div>
              <div className="sm:w-full md:w-1/3 flex justify-center">
                <AppleWatchDock />
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
};

export default team;
