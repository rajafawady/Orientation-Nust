import React, { useState } from "react";

// ! Making 2 copies of the same component (in the 2 divs) one for mobile and one for desktop
const Activites = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <>
      <div className="w-full flex items-center justify-center gap-1 md:gap-3 px-3 mt-10">
        <div className="w-1/4 h-[3px] bg-[#3F2073]"></div>
        <h1 className="my-3 p-4 shrink-0 heading">O'week Highlights</h1>
        <div className="w-1/4 h-[3px] bg-[#3F2073]"></div>
      </div>
      <div className="hidden rounded-xl p-3 md:flex w-11/12 shadow-2xl gap-3 md:flex-row justify-center items-center bg-center bg-cover bg-no-repeat h-[40rem]">
        <Card img="fresh beginings.jpg" classes="w-2/6 h-full">
          <h2 className="text-3xl font-bold text-white absolute bottom-0 left-0 m-3">
            Celebrating Fresh <br /> Beginnings
          </h2>
          <h4 className="text-xl text-white opacity-0 group-hover:opacity-100 transition-opacity text-justify max-w-sm font-semibold">
            Join us as we acknowledge the memorable journey of our orientation
            groups as they navigate through their first steps at NUST. Awards
            are presented to the most outstanding groups, recognizing their
            dedication, teamwork, and spirit throughout the Orientation Week.
          </h4>
        </Card>
        <div className="rounded-xl w-4/6 gap-3 h-full flex flex-col justify-center items-center">
          <div className="rounded-xl w-full h-1/2 flex gap-3 justify-center">
            <Card img="campus visits.jpg" classes="w-3/5 h-full">
              <div className="absolute top-0 left-0 p-3 bg-white rounded-br-xl group-hover:bg-white/60 ">
                <h2 className="text-2xl font-bold text-black">
                  Explore The Campus
                </h2>
              </div>
              <h4 className="text-xl text-white opacity-0 group-hover:opacity-100 transition-opacity text-justify max-w-sm font-semibold">
                Let our Orientation Guides as they lead you through an exciting
                campus visit, where you'll explore the vibrant student life, set
                the stage for an unforgettable journey.
              </h4>
            </Card>
            <Card img="carnival.jpg" classes="w-2/5 h-full">
              <div className="absolute top-0 right-0 p-3 bg-white rounded-bl-xl group-hover:bg-white/60">
                <h2 className="text-2xl font-bold text-black">
                  The Ultimate Celebration
                </h2>
              </div>
              <h4 className="text-xl text-white opacity-0 group-hover:opacity-100 transition-opacity text-justify max-w-sm font-semibold">
                Get ready for an epic NUST experience. Enjoy music, food,
                thrilling rides, and unleash your artistic flair as you make
                unforgettable memories!
              </h4>
            </Card>
          </div>

          <div className="rounded-xl w-full h-1/2 flex gap-3 justify-center">
            <Card img="rectors address.jpg" classes="w-2/3 h-full">
              <div className="absolute top-0 right-0 p-3 bg-white rounded-bl-xl group-hover:bg-white/60">
                <h2 className="text-2xl font-bold text-black">
                  Rector’s Address
                </h2>
              </div>
              <h4 className="text-xl text-white opacity-0 group-hover:opacity-100 transition-opacity text-justify max-w-sm font-semibold">
                In the Jinnah Auditorium, the Rector will address incoming
                freshmen. You will be empowered with a vision of excellence,
                innovation, and limitless possibilities that await you.
              </h4>
            </Card>
            <Card img="batch photo.png" classes="w-1/3 h-full">
              <div className="absolute top-0 left-0 p-3 bg-white rounded-br-xl group-hover:bg-white/60">
                <h2 className="text-2xl font-bold text-black">
                  The Batch Photo
                </h2>
              </div>
              <h4 className="text-xl text-white opacity-0 group-hover:opacity-100 transition-opacity text-justify max-w-sm font-semibold">
                Join the legacy of NUST on the iconic Convocation Ground, a
                memorable snapshot that will forever stay with you.
              </h4>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

const Card = ({ children, img, classes }) => (
  <div
    className={`rounded-xl bg-center bg-cover bg-no-repeat hover:backdrop-blur-lg shadow-lg ${classes}`}
    style={{ backgroundImage: `url('activities/${img}')` }}
  >
    <div className="w-full h-full flex flex-col justify-center items-center rounded-xl hover:backdrop-blur-md transition-all duration-300 relative p-3 group">
      {children}
    </div>
  </div>
);

export default Activites;
