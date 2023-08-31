import React, { useState } from "react";

const EventPlan = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const text = [
    "Text for day 1",
    "Text for day 2",
    "Text for day 3",
    "Text for day 4",
    "Text for day 5",
  ];
  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex items-center justify-center gap-1 md:gap-3 px-3 mt-10">
        <div className="w-1/4 h-[3px] bg-[#3F2073]"></div>
        <h1 className="my-3 p-4 shrink-0 heading">Event Plan</h1>
        <div className="w-1/4 h-[3px] bg-[#3F2073]"></div>
      </div>
      <div className="rounded-xl p-3  w-11/12 shadow-2xl gap-3 flex flex-grow justify-center">
        <div className="flex flex-col flex-grow">
          <button
            onClick={() => setActiveIndex(0)}
            className="border-slate-400 border-b-2 flex-grow text-xl font-bold p-3 hover:bg-slate-100"
          >
            Day One
          </button>
          <button
            onClick={() => setActiveIndex(1)}
            className="border-slate-400 border-b-2 flex-grow text-xl font-bold p-3 hover:bg-slate-100"
          >
            Day Two
          </button>
          <button
            onClick={() => setActiveIndex(2)}
            className="border-slate-400 border-b-2 flex-grow text-xl font-bold p-3 hover:bg-slate-100"
          >
            Day Three
          </button>
          <button
            onClick={() => setActiveIndex(3)}
            className="border-slate-400 border-b-2 flex-grow text-xl font-bold p-3 hover:bg-slate-100"
          >
            Day Four
          </button>
          <button
            onClick={() => setActiveIndex(4)}
            className="border-slate-400 border-b-2 flex-grow text-xl font-bold p-3 hover:bg-slate-100"
          >
            Day Five
          </button>
        </div>
        <div className="flex-grow">{text[activeIndex]}</div>
      </div>
    </div>
  );
};

export default EventPlan;
