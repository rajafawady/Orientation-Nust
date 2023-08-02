import React from 'react'
import MeetOurTeam from './MeetOurTeam'
import FlipCards from './FlipCards'


export default function EC() {
  return (
    
    <section className="flex flex-col justify-center items-center bg-white
    min-h-[100vh] -mt-[49px] ">

    
    
    <h1 className="text-center lg:text-7.5xl md:text-8xl text-6xl z-[100] font-heading font-semibold my-4  md:mt-0 mt-20 text-white">
    Meet Our Team.
  </h1>

  <h2 className="text-center lg:text-5xl md:text-5xl text-4xl z-[100] font-subHeading my-4  md:-mt[-30] text-white">
  Will be {" "}
  <span className="text-gradient">Revealed</span>{" "} Soon...
</h2>



<div className=" w-[140px] h-[140px] border-2 border-[#602042ee] rounded-full z-[101] p-[2px] justify-center items-center mt-10">



  <p className="font-body  text-[20px] leading-[23.4px] text-center pt-10 text-white">
    <span className="text-gradient">Stay</span>
  </p>
  <p className="font-body  text-[20px] leading-[23.4px] text-center text-white">
  <span className="text-gradient">Tuned</span>
</p>

</div>
  

    
      
      {/* gradient start */}
      <div className="absolute z-[5] w-[50%] h-[45%] md:top-5 md:left-60 left-25 top-4 pink__gradient" />
      <div className="absolute z-[6] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
      <div className="absolute z-[6] w-[45%] h-[55%] md:right-20 md:bottom-20 right-20 bottom-12 blue__gradient" />
      {/* gradient end */}
    

   
      
    
  </section>
     

 
    
  )
}