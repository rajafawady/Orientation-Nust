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
      <div className="rounded-xl p-3  w-11/12 shadow-2xl gap-3 flex flex-grow flex-col items-center justify-center">
        <div className="flex items-center flex-grow">
          <button
            onClick={() => setActiveIndex(0)}
            className="border-slate-400 border-2 text-xl font-bold p-3 hover:bg-slate-100"
          >
            Day One
          </button>
          <button
            onClick={() => setActiveIndex(1)}
            className="border-slate-400 border-2 text-xl font-bold p-3 hover:bg-slate-100"
          >
            Day Two
          </button>
          <button
            onClick={() => setActiveIndex(2)}
            className="border-slate-400 border-2 text-xl font-bold p-3 hover:bg-slate-100"
          >
            Day Three
          </button>
          <button
            onClick={() => setActiveIndex(3)}
            className="border-slate-400 border-2 text-xl font-bold p-3 hover:bg-slate-100"
          >
            Day Four
          </button>
          <button
            onClick={() => setActiveIndex(4)}
            className="border-slate-400 border-2 text-xl font-bold p-3 hover:bg-slate-100"
          >
            Day Five
          </button>
        </div>
        <div className="flex-grow flex justify-center">
          <IndexReturner activeIndex={activeIndex}></IndexReturner>
        </div>
      </div>
    </div>
  );
};

const IndexReturner = ({ activeIndex }) => {
  switch (activeIndex) {
    case 0:
      return (
        <table class="border-collapse border border-gray-300">
          <thead>
            <tr>
              <th class="border border-gray-300 px-4 py-2">Time</th>
              <th class="border border-gray-300 px-4 py-2">Event</th>
              <th class="border border-gray-300 px-4 py-2">Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 px-4 py-2" rowSpan={2}>
                0900-1300 hrs
              </td>
              <td class="border border-gray-300 px-4 py-2">
                Reception at Schools
              </td>
              <td class="border border-gray-300 px-4 py-2">
                Respective Schools (Less SEECS)
              </td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">
                SEECS Reception and Orientation
              </td>
              <td class="border border-gray-300 px-4 py-2">NET Exam Hall</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">1000-1130 hrs</td>
              <td class="border border-gray-300 px-4 py-2">
                Briefing & Q/A session with Parents
              </td>
              <td class="border border-gray-300 px-4 py-2">
                Jinnah Auditorium
              </td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">1130-1300 hrs</td>
              <td class="border border-gray-300 px-4 py-2">
                Principal S3H address to students + Q/A session
              </td>
              <td class="border border-gray-300 px-4 py-2">
                Jinnah Auditorium
              </td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">1300-1400 hrs</td>
              <td class="border border-gray-300 px-4 py-2">
                Lunch / Prayers break
              </td>
              <td class="border border-gray-300 px-4 py-2">Open</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">1400-1500 hrs</td>
              <td class="border border-gray-300 px-4 py-2">
                Principal NBS address to students + Q/A session
              </td>
              <td class="border border-gray-300 px-4 py-2">
                Jinnah Auditorium
              </td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">1500-1600 hrs</td>
              <td class="border border-gray-300 px-4 py-2">
                OG Activities + Icebreaking Activities
              </td>
              <td class="border border-gray-300 px-4 py-2">NBS Ground</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">1600-1700 hrs</td>
              <td class="border border-gray-300 px-4 py-2">
                Gathering Freshmen for Batch Photo
              </td>
              <td class="border border-gray-300 px-4 py-2">
                Convocation Ground
              </td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">1700-2030 hrs</td>
              <td class="border border-gray-300 px-4 py-2">Batch Photo</td>
              <td class="border border-gray-300 px-4 py-2">
                Convocation Ground
              </td>
            </tr>
          </tbody>
        </table>
      );
    case 1:
      return <div>2TEST</div>;
    default:
      return null;
  }
};
export default EventPlan;
