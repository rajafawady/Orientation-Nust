import React, { useState } from "react";

// ! Making 2 copies of the same component (in the 2 divs) one for mobile and one for desktop
const Activites = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <>
      <h1 className="header-1 my-3 text-3xl p-4">O&apos;week Highlights</h1>
      <div className="hidden rounded-xl p-3 md:flex w-11/12 shadow-2xl gap-3 md:flex-row justify-center items-center bg-center bg-cover bg-no-repeat bg-gray-100 h-[40rem]">
        <Card img="fresh beginings.jpg" classes="w-2/6 h-full">
          <h2 className="text-3xl font-bold text-white absolute bottom-0 left-0 m-3">
            Celebrating Fresh <br /> Beginnings
          </h2>
          <h4 className="text-xl text-white opacity-0 group-hover:opacity-100 transition-opacity text-justify max-w-sm">
            Join us as we acknowledge the memorable journey of our orientation
            groups as they navigate through their first steps at NUST. Awards
            are presented to the most outstanding groups, recognizing their
            dedication, teamwork, and spirit throughout the Orientation Week.
          </h4>
        </Card>
        <div className="rounded-xl w-4/6 gap-3 h-full flex flex-col justify-center items-center">
          <div className="rounded-xl w-full h-1/2 flex gap-3 justify-center">
            <Card img="campus visits.jpg" classes="w-3/5 h-full">
              <div className="absolute top-0 left-0 p-3 bg-white/80 rounded-br-xl group-hover:bg-slate-200/60">
                <h2 className="text-2xl font-bold text-black">
                  Explore The Campus
                </h2>
              </div>
              <h4 className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-justify max-w-sm">
                Let our passionate Orientation Guides lead you through an
                exciting campus visit, where you&apos;ll explore the eleven
                dynamic schools, and vibrant student life, setting the stage for
                an unforgettable journey as a NUST freshman.
              </h4>
            </Card>
            <Card img="carnival.jpg" classes="w-2/5 h-full">
              <div className="absolute top-0 left-0 p-3 bg-white rounded-br-xl group-hover:bg-white/60">
                <h2 className="text-2xl font-bold text-black">
                  The Ultimate Celebration
                </h2>
              </div>
              <h4 className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-justify max-w-xs items-end">
                Get ready for an epic NUST experience, where we blend the
                excitement of a carnival, the electrifying vibes of a concert,
                and the spontaneity of a jam session. Enjoy music, food,
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
              <h4 className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-justify max-w-sm items-end">
                In the prestigious Jinnah Auditorium, the Rector will address
                incoming freshmen. It will embody the essence of NUST&apos;s
                commitment to academic brilliance, and values and vision that
                position NUST as a leading institution of higher education in
                Pakistan. You will be empowered with a vision of excellence,
                innovation, and limitless possibilities that await you in your
                academic journey at NUST.
              </h4>
            </Card>
            <Card img="fresh beginings.jpg" classes="w-1/3 h-full">
              <div className="absolute top-0 left-0 p-3 bg-white rounded-br-xl group-hover:bg-white/60">
                <h2 className="text-2xl font-bold text-black">
                  The Ultimate Celebration
                </h2>
              </div>
              <h4 className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-justify max-w-xs items-end">
                Get ready for an epic NUST experience, where we blend the
                excitement of a carnival, the electrifying vibes of a concert,
                and the spontaneity of a jam session. Enjoy music, food,
                thrilling rides, and unleash your artistic flair as you make
                unforgettable memories!
              </h4>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex w-11/12 rounded-xl p-3 md:hidden border-4 border-blue-500 flex-col gap-3 justify-center items-center bg-center bg-cover bg-no-repeat bg-gray-100 h-[50rem]">
        <SmolCard
          img="fresh beginings.jpg"
          index={0}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          heading={"Celebrating Fresh Beginnings"}
        />
        <SmolCard
          img="campus visits.jpg"
          index={1}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          heading={"Explore The Campus"}
        />
        <SmolCard
          img="carnival.jpg"
          heading={"The Ultimate Celebration"}
          index={2}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        <SmolCard
          img="rectors address.jpg"
          index={3}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          heading={"Rector’s Address"}
        />
        <SmolCard
          img="rectors address.jpg"
          index={4}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          heading={"The Ultimate Celebration"}
        />
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

const SmolCard = ({
  children,
  img,
  index,
  activeIndex,
  setActiveIndex,
  heading,
}) => {
  const handleClick = () => {
    if (activeIndex === index) setActiveIndex(null);
    else setActiveIndex(index);
  };
  return (
    <div
      className={`rounded-xl bg-center bg-cover bg-no-repeat w-full ${
        activeIndex === index ? "h-4/5" : "h-1/5"
      } transition-all duration-300`}
      style={{ backgroundImage: `url('activities/${img}')` }}
      onClick={handleClick}
    >
      <div
        className={`w-full h-full flex flex-col justify-center items-center rounded-xl ${
          activeIndex === index ? "backdrop-blur-sm" : "backdrop-blur-none"
        } transition-all duration-300`}
      >
        <h2
          className={`text-xl text-black bg-white px-4 py-1 rounded-md font-medium ${
            activeIndex === index
              ? "opacity-0 scale-75"
              : "opacity-100 scale-100"
          } transition-all duration-300`}
        >
          {heading}
        </h2>

        {children}
      </div>
    </div>
  );
};

export default Activites;
