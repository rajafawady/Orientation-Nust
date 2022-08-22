import React from "react";
import Events from "./Events";
import events from "../../util/events.json";
import Timer from "../CountdownTimer/Timer";
import Wordle from "../Wordle/index";
import Footer from "../Footer/index";
import MyComponent from "../Map/Map";
export default function Main() {
  return (
    <>
    <div className='w-full timer-div flex justify-center items-center'>
      <Timer/>
    </div>
    <div className='events'>
    
    <Events events={events}/>
    <div className='w-full flex flex-col items-center'>
   
    <div className='nust-map w-full flex justify-center py-12'>
    <MyComponent />
    </div>
    </div>
    <div className='mt-16'>
     <Wordle />
    </div>
    <Footer />
    </div>

    </>
  );
}
