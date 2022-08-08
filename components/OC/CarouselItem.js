import React from "react";

const CarouselItem = ({ name, portfolio, image }) => {
  return (
    <div className="flex flex-col mb-2">
      <img width="80%" src={image} className="mx-auto rounded-t-lg" />
      <div className="text-center  py-2 w-4/5 text-pale-pink dark:text-pale-pink  bg-tyrian-purple dark:bg-lapis-lazuli relative rounded-b-lg bg-opacity-75 dark:bg-opacity-40  left-1/2 -translate-x-1/2">
        <div className="font-montserrat text-3xl sm:text-lg lg:text-2xl">
          {name}
        </div>
        <div className="font-brittany font-bold p-2 text-xl sm:text-base lg:text-xl ">
          Director {portfolio}
        </div>
      </div>
    </div>
  );
};

CarouselItem.defaultProps = {
  name: "John Doe",
  portfolio: "Web & IT",
  image: "https://picsum.photos/800/600?random=1",
};

export default CarouselItem;
