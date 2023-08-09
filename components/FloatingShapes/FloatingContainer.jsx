import seedrandom from "seedrandom";
import React, { useEffect, useState } from "react";

import { BiSolidCircle } from "react-icons/bi";
import { IoTriangleSharp, IoStar } from "react-icons/io5";
import { CgShapeCircle } from "react-icons/cg";

const Container = () => {
  const [scrollY, setScrollY] = useState(0);
  const [pageHeight, setPageHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setPageHeight(document.documentElement.scrollHeight);
    };

    // Set initial page height
    setPageHeight(document.documentElement.scrollHeight);

    // Attach event listener to update page height on resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getDoodle = () => {
    const fill = [
      "text-dark-purple ",
      "text-lapis-lazuli ",
      "text-tyrian-purple ",
      "text-prussian-blue ",
      "text-ultra-red",
    ];

    const doodleList = [];
    for (let i = 0; i < Math.ceil(pageHeight / 20); i++) {
      const seed = `index-${i}`;
      const rng = seedrandom(seed);

      const size = Math.floor(rng() * (100 - 20 + 1)) + 20;
      const opacity = Math.floor(rng() * (100 - 40 + 1)) + 40;
      const fillColor = fill[Math.floor(rng() * fill.length)];
      const top = rng();
      const left = rng() * 100;
      const iconNumber = rng() * 5;
      const rotate = rng() * 360;

      doodleList.push({
        size,
        fillColor,
        top,
        left,
        opacity,
        rotate,
        iconNumber,
      });
    }

    return doodleList;
  };

  return (
    <div
      className=" absolute w-screen"
      style={{
        height: `${pageHeight - 300}px`,
      }}
    >
      <div className="w-full h-full relative overflow-hidden">
        {getDoodle().map((doodle, index) => (
          <div
            key={index}
            style={{
              bottom: `${doodle.top * scrollY * 0.5 - 20}%`,
              right: `${doodle.left}%`,
              width: `${doodle.size}px`,
              opacity: doodle.opacity / 100,
              rotate: `${doodle.rotate}deg`,
            }}
            className={`absolute aspect-1 w-10 z-0 ${doodle.fillColor}`}
          >
            <Doodle index={Math.ceil(doodle.iconNumber)} />
            {/* <Star /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Container;

const Doodle = ({ index }) => {
  switch (index) {
    case 1:
      return <IoTriangleSharp className="w-full h-full" />;
    case 2:
      return <IoStar className="w-full h-full" />;
    case 3:
      return <BiSolidCircle className="w-full h-full" />;
    case 4:
      return <CgShapeCircle className="w-full h-full" />;

    default:
      break;
  }
};
