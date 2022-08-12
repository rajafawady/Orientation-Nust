import { useEffect, useState } from "react";

const Events = ({ events }) => {
  const [selectedEvent, setSelectedEvent] = useState(events[0]);
  const [selectedActivity, setSelectedActivity] = useState(
    selectedEvent.activities[0]
  );

  useEffect(() => {
    setSelectedActivity(selectedEvent.activities[0]);
  }, [selectedEvent]);

  return (
    <div className="my-12">
      <div className="mt-24">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center text-tyrian-purple">
          Upcoming Events
        </h1>
        <p className="text-xl font-normal text-center mt-4 opacity-70">
          View our event calendar to see upcoming events. Purchase tickets,{" "}
          <br />
          VIP Bar Cards, or reserve VIP tables with bottle service.
        </p>
      </div>

      <div className="flex justify-center items-center mt-8 flex-wrap">
        {events.map((event, i) => (
          <p
            key={i}
            onClick={() => setSelectedEvent(event)}
            className={`text-xl font-semibold mx-12 cursor-pointer pb-2 transition duration-300 ease-out hover:text-tyrian-purple  relative after:content-[''] after:absolute after:h-0.5 after:bg-tyrian-purple after:left-0 after:bottom-0 after:transition after:duration-300 ${
              selectedEvent.day === event.day
                ? `text-tyrian-purple after:w-full`
                : ""
            }`}
          >
            {event.day}
          </p>
        ))}
      </div>

      <div className="flex md:flex-row flex-col bg-black mt-12 mx:0 xl:mx-48">
        <div className="flex flex-row md:flex-col ">
          {selectedEvent.activities.map((activity, i) => (
            <div
              onClick={() => setSelectedActivity(activity)}
              key={i}
              className={`w-48 h-48 lg:w-64 flex-grow lg:h-64 cursor-pointer border-ultra-red dark:border-white ${
                selectedActivity.name === activity.name
                  ? "border-4 border-b-0 md:border-b-4 md:border-r-0"
                  : "md:border-r-4 border-b-4 md:border-b-0"
              }`}
            >
              <div className=" h-full w-full bg-tyrian-purple">
                <img src={activity.image} className="object-cover h-full opacity-70" />
              </div>
            </div>
          ))}
        </div>
        <div
          className="w-full bg-tyrian-purple border-4 md:border-l-0 border-t-0 md:border-t-4 bg-cover border-ultra-red dark:border-white bg-no-repeat responsive"
          style={{
            backgroundImage: `url(${selectedActivity.image})`,
            backgroundPosition: "center",
          }}
        >
          <div className="w-full h-full bg-black bg-opacity-20 p-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white">
              {selectedActivity.name}
            </h1>
            <p className="text-xl font-bold italic mt-4 text-white opacity-70 ">
              {selectedActivity.date}
            </p>
            <p className="sm:text-xl text-base text-white w-full lg:w-2/3 mt-6 sm:mt-12">
              {selectedActivity.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
