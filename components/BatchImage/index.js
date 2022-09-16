import React, { useState } from "react";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
var FileSaver = require("file-saver");

const BatchImage = ({ imgName, dlName, btnText }) => {
  const [hover, setHover] = useState(false);
  console.log("img name for ", btnText, " is ", imgName);
  return (
    <div className="flex flex-col w-full sm:w-1/2">
      <div className="w-full flex flex-col items-center sm:flex-row  ">
        <div
          className={`border-4 border-tyrian-purple w-10/12 sm:w-full aspect-[16/9] bg-no-repeat bg-center bg-cover 
    lg:mx-10 md:mx-6 mx-4 my-4 sm:my-0
    `}
          style={{
            backgroundImage: `url("/batch-pics/compressed/${imgName}.jpg")`,
          }}
        ></div>
      </div>
      <div className="flex w-full justify-around mb-6 md:mb-12 sm:mt-2 md:mt-4 lg:mt-6">
        <div className="">
          <button
            className={`bg-tyrian-purple dark:bg-prussian-blue font-montserrat
                        dark:hover:bg-lapis-lazuli hover:ring-2 dark:hover:ring-prussian-blue transition-colors
                          lg:text-3xl lg:px-4 py-2 px-2 sm:text-2xl text-white text-xl
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
