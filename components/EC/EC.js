import React from 'react'
import MeetOurTeam from './MeetOurTeam'
import FlipCards from './FlipCards'

export default function EC() {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <div className='w-full flex justify-center'>
        <div className="text-center lg:text-7xl md:text-6xl text-5xl mb-8 font-montserrat my-4 md:mb-20 md:mt-6 text-tyrian-purple dark:text-pale-pink">
          <MeetOurTeam placeholderText={[{ type: "heading1", text: "Meet Our Team" },]}/>
        </div>
      </div>
   


      <FlipCards />

 
    </div>
  )
}


