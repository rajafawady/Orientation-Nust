import React from "react";

const Card = ({ image, name, role, quote }) => {
  return (
    <>
      <div className="mx-2 md:mx-0 w-80 md:w-56 lg:w-72 bg-tyrian-purple shadow-ultra-red text-pale-pink  my-4 md:my-0 shadow-sm md:shadow-lg rounded-xl lg:rounded-3xl flex flex-col items-center py-4 px-8  md:[&:nth-child(2)]:order-1 md:[&:nth-child(1)]:order-2 [&:nth-child(3)]:order-3 [&:nth-child(4)]:order-4  [&:nth-child(5)]:order-5 [&:nth-child(6)]:order-6 ">
        <div className="w-40 md:w-28 lg:w-36 my-0.5">
          <img src={image} className="rounded-full aspect-square " />
        </div>
        <div className={`text-2xl   font-semibold my-0.5 `}>{name}</div>
        <div className={`text-lg font-semibold italic my-0.5`}>{role}</div>
        <div className={`w-full text-sm text-justify my-0.5 block md:hidden lg:block`}>{quote}</div>
        <div className={`w-full text-sm text-justify my-0.5 hidden md:block lg:hidden`}>{quote.substring(0,60)}...</div>
      </div>
    </>
  );
};

Card.defaultProps = {
  image:
    "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  name: "John Doe",
  role: "VP Operations",
  quote:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus, consectetur adipiscing elit. Morbi maximus, ligula eget semper ornare, eros diam laoreet mi, vitae lacinia massa lacus nec elit. In aliquam lacus id rhoncus dictum.  "
};

export default Card;
