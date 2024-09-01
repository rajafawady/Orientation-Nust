import React, { useState } from "react";

const EventPlan = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex items-center justify-center gap-1 md:gap-3 px-3 mt-10">
        <div className="w-1/4 h-[3px] bg-coral"></div>
        <h1 className="my-3 p-4 shrink-0 heading">Event Plan</h1>
        <div className="w-1/4 h-[3px] bg-coral"></div>
      </div>
      <div className="flex justify-center md:w-11/12 min-h-[500px]">
        <div className="rounded-xl p-3 w-screen md:w-11/12 shadow-2xl gap-3 flex flex-col items-center">
          <div className="md:flex hidden md:flex-row">
            <button
              onClick={() => setActiveIndex(0)}
              className="border-slate-400 border-2 text-xl font-bold p-3 hover:bg-slate-100"
            >
              Day Zero
            </button>
            <button
              onClick={() => setActiveIndex(1)}
              className="border-slate-400 border-2 text-xl font-bold p-3 hover:bg-slate-100"
            >
              Day One
            </button>
            <button
              onClick={() => setActiveIndex(2)}
              className="border-slate-400 border-2 text-xl font-bold p-3 hover:bg-slate-100"
            >
              Day Two
            </button>
            <button
              onClick={() => setActiveIndex(3)}
              className="border-slate-400 border-2 text-xl font-bold p-3 hover:bg-slate-100"
            >
              Day Three
            </button>
            <button
              onClick={() => setActiveIndex(4)}
              className="border-slate-400 border-2 text-xl font-bold p-3 hover:bg-slate-100"
            >
              Day Four
            </button>
            <button
              onClick={() => setActiveIndex(5)}
              className="border-slate-400 border-2 text-xl font-bold p-3 hover:bg-slate-100"
            >
              Day Five
            </button>
          </div>
          <div className="md:hidden flex">
            <div className="carousel carousel-center max-w-[270px] p-2 space-x-2 rounded-box">
              <div className="carousel-item">
                <button
                  onClick={() => setActiveIndex(0)}
                  className="border-slate-400 border-2 text-xl font-bold p-3 hover:bg-slate-100"
                >
                  Day Zero
                </button>
              </div>
              <div className="carousel-item">
                <button
                  onClick={() => setActiveIndex(1)}
                  className="border-slate-400 border-2 text-xl font-bold p-3 hover:bg-slate-100"
                >
                  Day One
                </button>
              </div>
              <div className="carousel-item">
                <button
                  onClick={() => setActiveIndex(2)}
                  className="border-slate-400 border-2 text-xl font-bold p-3 hover:bg-slate-100"
                >
                  Day Two
                </button>
              </div>
              <div className="carousel-item">
                <button
                  onClick={() => setActiveIndex(3)}
                  className="border-slate-400 border-2 text-xl font-bold p-3 hover:bg-slate-100"
                >
                  Day Three
                </button>
              </div>
              <div className="carousel-item">
                <button
                  onClick={() => setActiveIndex(4)}
                  className="border-slate-400 border-2 text-xl font-bold p-3 hover:bg-slate-100"
                >
                  Day Four
                </button>
              </div>
              <div className="carousel-item">
                <button
                  onClick={() => setActiveIndex(5)}
                  className="border-slate-400 border-2 text-xl font-bold p-3 hover:bg-slate-100"
                >
                  Day Five
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <IndexReturner activeIndex={activeIndex}></IndexReturner>
          </div>
        </div>
      </div>
    </div>
  );
};

const IndexReturner = ({ activeIndex }) => {
  switch (activeIndex) {
    case 0:
      return (
        <table className="border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Time (2024-8-31 & 2024-9-1)</th>
              <th className="border border-gray-300 px-4 py-2">Event</th>
              <th className="border border-gray-300 px-4 py-2">Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2" rowSpan={2}>
                1000 - 2000 hrs
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Reception of Hostelite Freshmen at Gates and Hostels
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Gates 1, 2 and Respective Hostels
              </td>
            </tr>
          </tbody>
        </table>
      );
    case 1:
      return (
        <table className="border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Time (2024-9-2)</th>
              <th className="border border-gray-300 px-4 py-2">Event</th>
              <th className="border border-gray-300 px-4 py-2">Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2" rowSpan={2}>
                0900-1300 hrs
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Reception, Registeration and Principal address
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Respective Schools (Less SEECS)
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                SEECS Reception, Registeration and Principal address
              </td>
              <td className="border border-gray-300 px-4 py-2">
                NET Exam Hall
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">1000-1130 hrs</td>
              <td className="border border-gray-300 px-4 py-2">
                Briefing & Q/A session with Parents
              </td>
              <td className="border border-gray-300 px-4 py-2" rowSpan={2}>
                Jinnah Auditorium
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">1145-1300 hrs</td>
              <td className="border border-gray-300 px-4 py-2">
                Principal S3H address to students + Q/A session
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">1300-1400 hrs</td>
              <td className="border border-gray-300 px-4 py-2">
                Lunch / Prayers break
              </td>
              <td className="border border-gray-300 px-4 py-2">Open</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">1430-1530 hrs</td>
              <td className="border border-gray-300 px-4 py-2">
                Principal NBS address to students + Q/A session
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Jinnah Auditorium
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">1530-1630 hrs</td>
              <td className="border border-gray-300 px-4 py-2">
                OG Activities + Icebreaking Activities
              </td>
              <td className="border border-gray-300 px-4 py-2">NBS Ground</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">1700-2030 hrs</td>
              <td className="border border-gray-300 px-4 py-2">Batch Photo</td>
              <td className="border border-gray-300 px-4 py-2">Convocation Ground</td>
            </tr>
          </tbody>
        </table>
      );
    case 2:
      return (
        <table className="border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Time (2024-9-3)</th>
              <th className="border border-gray-300 px-4 py-2">Event</th>
              <th className="border border-gray-300 px-4 py-2">Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">0900 hrs</td>
              <td className="border border-gray-300 px-4 py-2">
                Arrival of Freshmen
              </td>
              <td className="border border-gray-300 px-4 py-2" rowSpan={2}>
                Respective Schools
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">0930-1300 hrs</td>
              <td className="border border-gray-300 px-4 py-2">
                Orientation School / Documentation / Ice Breaking Activities
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">1300-1400 hrs</td>
              <td className="border border-gray-300 px-4 py-2">
                Lunch / Prayers break
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Open
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">1430-1700 hrs</td>
              <td className="border border-gray-300 px-4 py-2">
                Life at NUST 
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Jinnah Auditorium / NET Exam Hall
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">1730-2230 hrs</td>
              <td className="border border-gray-300 px-4 py-2">
                Sports Opening Ceremony & Exhibition Matches
              </td>
              <td className="border border-gray-300 px-4 py-2">
                NBS Ground
              </td>
            </tr>
          </tbody>
        </table>
      );
    case 3:
      return (
        <table className="border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Time (2024-9-4)</th>
              <th className="border border-gray-300 px-4 py-2">Event</th>
              <th className="border border-gray-300 px-4 py-2">Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">0900 hrs</td>
              <td className="border border-gray-300 px-4 py-2">
                Arrival of Freshmen
              </td>
              <td className="border border-gray-300 px-4 py-2" rowSpan={2}>
                All Schools
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">0930-1300 hrs</td>
              <td className="border border-gray-300 px-4 py-2">
                Inter School / Dte / Facilities Visits
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">1300-1400 hrs</td>
              <td className="border border-gray-300 px-4 py-2">
                Lunch / Prayers break
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Open
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">1400-1600 hrs</td>
              <td className="border border-gray-300 px-4 py-2 prose prose-wrap">
                Activities by Clubs and Societies + CSR Activities (NCSC)
              </td>
              <td className="border border-gray-300 px-4 py-2">NBS Ground/HBL Ground/Old Gym</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">1600-1900 hrs</td>
              <td className="border border-gray-300 px-4 py-2 prose prose-wrap">
                Sports Activities (indoor and outdoor games)
              </td>
              <td className="border border-gray-300 px-4 py-2">
                NBS Ground/ Old Gym
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">2130-2145 hrs</td>
              <td className="border border-gray-300 px-4 py-2">Drama</td>
              <td className="border border-gray-300 px-4 py-2">
                Jinnah Auditorium
              </td>
            </tr>
          </tbody>
        </table>
      );
    case 4:
      return (
        <table className="border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Time (2024-9-5)</th>
              <th className="border border-gray-300 px-4 py-2">Event</th>
              <th className="border border-gray-300 px-4 py-2">Location</th>
            </tr>
          </thead>
          <tbody>
          <tr>
              <td className="border border-gray-300 px-4 py-2">0900 hrs</td>
              <td className="border border-gray-300 px-4 py-2">
                Arrival of Freshmen
              </td>
              <td className="border border-gray-300 px-4 py-2" rowSpan={2}>
                All Schools
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">0930-1300 hrs</td>
              <td className="border border-gray-300 px-4 py-2">
                Inter School / Dte / Facilities Visits
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">1300-1400 hrs</td>
              <td className="border border-gray-300 px-4 py-2">
                Lunch / Prayers break
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Open
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">1400-1700 hrs</td>
              <td className="border border-gray-300 px-4 py-2 prose prose-wrap">
                Activities by Clubs and Societies
              </td>
              <td className="border border-gray-300 px-4 py-2">NBS Ground/HBL Ground</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">1500-1630 hrs</td>
              <td className="border border-gray-300 px-4 py-2">Closing Ceremony of Nust Online Summer School</td>
              <td className="border border-gray-300 px-4 py-2">USPCAS-E / Registrar Office</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">1600-2130 hrs</td>
              <td className="border border-gray-300 px-4 py-2">Stalls by Clubs and Societies</td>
              <td className="border border-gray-300 px-4 py-2">SCME Ground</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">1800-2130 hrs</td>
              <td className="border border-gray-300 px-4 py-2">ON Fest (Musical Performance by NMS/NUSTians)</td>
              <td className="border border-gray-300 px-4 py-2">SCME Ground</td>
            </tr>
          </tbody>
        </table>
      );

    case 5:
      return (
        <table className="border-collapse border border-gray-300">
          <thead>
          <tr>
              <th className="border border-gray-300 px-4 py-2">Time (2024-9-5)</th>
              <th className="border border-gray-300 px-4 py-2">Event</th>
              <th className="border border-gray-300 px-4 py-2">Location</th>
            </tr>
          </thead>
          <tbody>
          <tr>
              <td className="border border-gray-300 px-4 py-2">0900 hrs</td>
              <td className="border border-gray-300 px-4 py-2">
                Arrival of Freshmen
              </td>
              <td className="border border-gray-300 px-4 py-2" rowSpan={2}>
                All Schools
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">0930-1230 hrs</td>
              <td className="border border-gray-300 px-4 py-2">
                Inter School / Dte / Facilities Visits
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">1230-1500 hrs</td>
              <td className="border border-gray-300 px-4 py-2">
                Lunch / Jumma Prayer Break
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Open
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">1500-1700 hrs</td>
              <td className="border border-gray-300 px-4 py-2">Closing Ceremony</td>
              <td className="border border-gray-300 px-4 py-2">
                Jinnah Auditorium
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">1830-2200 hrs</td>
              <td className="border border-gray-300 px-4 py-2">DJ Night</td>
              <td className="border border-gray-300 px-4 py-2">SCME Ground</td>
            </tr>
          </tbody>
        </table>
      );

      return (
        <table className="border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Time</th>
              <th className="border border-gray-300 px-4 py-2">Event</th>
              <th className="border border-gray-300 px-4 py-2">Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2" rowSpan={2}>
                0900-1300 hrs
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Reception at Schools
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Respective Schools (Less SEECS)
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                SEECS Reception and Orientation
              </td>
              <td className="border border-gray-300 px-4 py-2">NET Exam Hall</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">1000-1130 hrs</td>
              <td className="border border-gray-300 px-4 py-2">
                Briefing & Q/A session with Parents
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Jinnah Auditorium
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">1130-1300 hrs</td>
              <td className="border border-gray-300 px-4 py-2">
                Principal S3H address to students + Q/A session
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Jinnah Auditorium
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">1300-1400 hrs</td>
              <td className="border border-gray-300 px-4 py-2">
                Lunch / Prayers break
              </td>
              <td className="border border-gray-300 px-4 py-2">Open</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">1400-1500 hrs</td>
              <td className="border border-gray-300 px-4 py-2">
                Principal NBS address to students + Q/A session
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Jinnah Auditorium
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">1500-1600 hrs</td>
              <td className="border border-gray-300 px-4 py-2">
                OG Activities + Icebreaking Activities
              </td>
              <td className="border border-gray-300 px-4 py-2">NBS Ground</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">1600-1700 hrs</td>
              <td className="border border-gray-300 px-4 py-2">
                Gathering Freshmen for Batch Photo
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Convocation Ground
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">1700-2030 hrs</td>
              <td className="border border-gray-300 px-4 py-2">Batch Photo</td>
              <td className="border border-gray-300 px-4 py-2">
                Convocation Ground
              </td>
            </tr>
          </tbody>
        </table>
      );
    default:
      return null;
  }
};

export default EventPlan;
