import React from "react";
import SocialCol from "./SocialCol";
import ContactCol from "./ContactCol";

const Footer = () => {
  return (
    <div
      className={`flex text-white flex-col justify-center font-montserrat pt-10 mt-10
      bg-gradient-to-b from-tyrian-purple to-[#681442] `}
    >
      {" "}
     
      <div className="flex flex-col pl-6 sm:flex-row sm:justify-between sm:px-20 md:px-40">
        <ContactCol />

        <SocialCol />
      </div>
      <div className="text-center text-sm font-mont font-bold pt-4 pb-2">
        &copy; Copyright 2022 NUST Orientation
      </div>
    </div>
  );
};

export default Footer;
