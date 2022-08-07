import React from "react";

const CarouselItem = ({ name, portfolio, image }) => {
  return (
    <div className="flex flex-col ">
      <img
        width="80%"
        src={image}
        className="mx-auto rounded-lg"
        
      />
      <div className="text-center  py-2 w-4/5 text-pale-pink dark:text-prussian-blue  bg-lapis-lazuli dark:bg-ultra-red relative rounded-b-lg bg-opacity-75 dark:bg-opacity-50   left-1/2 -translate-x-1/2">
        <div className="font-montserrat text-3xl sm:text-lg lg:text-2xl">{name}</div>
        <div className="font-brittany font-bold p-2 text-xl sm:text-base lg:text-xl ">Director {portfolio}</div>
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
