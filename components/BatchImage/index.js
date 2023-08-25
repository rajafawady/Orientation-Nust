import React, { useState } from "react";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
var FileSaver = require("file-saver");

const BatchImage = ({ imgName, dlName, btnText }) => {
  const [hover, setHover] = useState(false);
  console.log("img name for ", btnText, " is ", imgName);
  return (
    <div className="flex flex-col  md:w-1/2 w-full ">
      <div className="w-full flex flex-col items-center sm:flex-row  ">
        <div
          className={`border-4 border-lapis-lazuli w-full sm:w-full aspect-[16/9] bg-no-repeat bg-center bg-cover 
    lg:mx-10 md:mx-6  my-4  sm:my-0
    `}
          style={{
            backgroundImage: `url("/batch-pics/compressed/${imgName}.jpg")`,
          }}
        ></div>
      </div>
      <div className="flex w-full justify-around mb-10 md:mb-16 sm:mt-2 md:mt-4 lg:mt-6">
        <div className="">
          <button
            className={`max-w-xs flex-1 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white bg-gradient-to-r from-dark-purple to-prussian-blue hover:bg-gradient-to-r hover:from-prussian-blue hover:to-dark-purple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full 
                        `}
            onClick={() => {
              FileSaver.saveAs(
                `/batch-pics/original/${imgName}.jpg`,
                `${dlName}.jpg`
              );
            }}
            onMouseEnter={() => {
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
          >
            <FontAwesomeIcon
              icon={faDownload}
              className={`mr-2 sm:text-2xl text-xl hover:animate-bounce ${
                hover && "animate-bounce"
              }`}
            />
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BatchImage;
