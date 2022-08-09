import React from "react";
import Layout from "../components/Layout";
import EC from "../components/EC/EC";
import { AppleWatchDock } from "../components/AppleWatchDock";
import Motion from "../components/SubComponents/Motion";
import ClipArt from "../components/SubComponents/ClipArt";
import { AnimationPropExample } from "../components/SubComponents/AnimationBack";
import { TypeWriter } from "../components/SubComponents/TextAnimation";


const directorateText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

const team = () => {
  return (
    <>
      <div className="">
        <Layout>
          <div className="mt-12">

            {/* <img src="/svg/blue-svg/1.svg" width={200} className='fixed left-32 top-96' /> */}
          <EC />

            <div className="md:flex justify-center w-full py-16 mt-16 bg-tyrian-purple dark:bg-gray-800">
              <div className="sm:w-full md:w-2/3">
                  <div className="pl-6 pt-6">
                    <span className="font-sans font-extrabold text-white text-7xl">Directorate</span>
                  </div>
                  <div className="pl-6 pt-6">
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
