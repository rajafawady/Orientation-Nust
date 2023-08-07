import React from 'react';
import Image from 'next/image'
import MeetOurTeam from './MeetOurTeam';
import FlipCards from './FlipCards';
import Opswing from './Opswing';

export default function EC() {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <div className='w-full flex justify-center'>
        <div className="text-center lg:text-7xl md:text-6xl text-5xl mb-8 font-heading font-bold my-4 md:mb-20 md:mt-6 text-tyrian-purple dark:text-pale-pink">
          <MeetOurTeam placeholderText={[{ type: "heading1", text: "Meet Our Team" },]} />
        </div>
      </div>

      <FlipCards />

      <div className="w-full justify-center py-16 pb-80 mt-16 bg-[#602042] dark:bg-gray-800">
        <div className="justify-center text-center flex-col pt-6">
          <span className="font-sans font-bold text-white text-5xl md:text-7xl ">Directorate</span>

          <div className="justify-center">
            <div className="grid grid-cols-2 gap-10 mt-20 justify-center">
              <div className="flex flex-col items-center">
                <h2 className="font-subHeading font-semibold text-center text-white md:text-4xl text-2xl md:mb-40 mb-20">Operations Wing</h2>
                <Opswing />
              </div>

              <div className="flex flex-col items-center">
                <h2 className="font-subHeading font-semibold text-center justify-center text-white md:text-4xl text-2xl md:mb-40 mb-20">Resources Wing</h2>
                <Opswing />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-10 mt-20 justify-center">
              <div className="flex flex-col items-center">
                <h2 className="font-subHeading font-semibold text-center justify-center text-white md:text-4xl text-2xl md:mt-80 mt-60 md:mb-40 mb-20">Coordination Wing</h2>
                <Opswing />
              </div>

              <div className="flex flex-col items-center">
                <h2 className="font-subHeading font-semibold text-center justify-center text-white md:text-4xl text-2xl md:mt-80 mt-60 md md:mb-40 mb-20">Media Wing</h2>
                <Opswing />
              </div>
            </div>

            <div className="flex flex-col items-center mt-20"> 
              <h2 className="font-subHeading font-semibold text-center justify-center text-white md:text-4xl text-2xl mt-60 md:mb-40 mb-20">Outreach Wing</h2>
              <Opswing />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
