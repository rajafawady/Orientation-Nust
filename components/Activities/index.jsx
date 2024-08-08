import React, { useState, useEffect } from 'react';

const Activities = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 2);
    }, 10000); // Change slides every 10 seconds

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const images = [
    'fresh beginings.jpg',
    'campus visits.jpg',
    'carnival.jpg',
    'rectors address.jpg',
    'batch photo.png',
	'amazing team.png',
  ];

  const visibleImages = images.slice(currentIndex * 3, currentIndex * 3 + 3);

  return (
    <>
      <div className='w-full flex items-center justify-center gap-1 md:gap-3 px-3 mt-10'>
        <div className='w-1/4 h-[3px] bg-coral'></div>
        <h1 className='my-3 p-4 shrink-0 heading'>O'week Highlights</h1>
        <div className='w-1/4 h-[3px] bg-coral'></div>
      </div>
      <div className='w-full overflow-hidden relative h-[40rem] flex items-center justify-center'>
        <div className='flex gap-4 p-4'>
          {visibleImages.map((img, idx) => (
            <Card
              key={idx}
              img={img}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Content
                text={getText(img)}
              />
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};



const getText = (img) => {
  switch (img) {
    case 'fresh beginings.jpg':
      return "Join us as we acknowledge the memorable journey of our orientation groups as they navigate through their first steps at NUST. Awards are presented to the most outstanding groups, recognizing their dedication, teamwork, and spirit throughout the Orientation Week.";
    case 'campus visits.jpg':
      return "Let our passionate Orientation Guides lead you through an exciting campus visit, where you'll explore the eleven dynamic schools, and vibrant student life, setting the stage for an unforgettable journey as a NUST freshman.";
    case 'carnival.jpg':
      return "Get ready for an epic NUST experience, where we blend the excitement of a carnival, the electrifying vibes of a concert, and the spontaneity of a jam session. Enjoy music, food, thrilling rides, and unleash your artistic flair as you make unforgettable memories!";
    case 'rectors address.jpg':
      return "In the prestigious Jinnah Auditorium, the Rector will address incoming freshmen. It will embody the essence of NUST's commitment to academic brilliance, and values and vision that position NUST as a leading institution of higher education in Pakistan. You will be empowered with a vision of excellence, innovation, and limitless possibilities that await you in your academic journey at NUST.";
    case 'batch photo.png':
      return "The Batch Photo is a highly anticipated tradition at NUST for every new student. Join the legacy of NUST as you become part of the Batch Photo on the iconic Convocation Ground, leaving you with a memorable snapshot that will forever remind you of the beginning of your incredible journey at NUST.";
    case 'amazing team.png':
      return "Our amazing team is the heart of NUST Orientation. Their enthusiasm and dedication create a warm, welcoming environment for freshmen. Through engaging activities and heartfelt guidance, they ensure every new student feels at home, making Orientation Week a memorable journey of camaraderie and discovery.";
    default:
      return "";
  }
};

const Card = ({ children, img, onMouseEnter, onMouseLeave }) => (
  <div
    className={`rounded-xl bg-center bg-cover bg-no-repeat hover:backdrop-blur-lg shadow-lg w-[20rem] h-[30rem] border-4 border-coral`}
    style={{ backgroundImage: `url('activities/${img}')` }}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <div className='w-full h-full flex flex-col justify-center items-center rounded-xl hover:backdrop-blur-md transition-all duration-300 relative p-3 group'>
      {children}
    </div>
  </div>
);

const Content = ({ text }) => (
  <>
    <h4 className='text-light-gray opacity-0 group-hover:opacity-100 transition-opacity text-justify max-w-xs items-end font-semibold'>
      {text}
    </h4>
  </>
);

export default Activities;
