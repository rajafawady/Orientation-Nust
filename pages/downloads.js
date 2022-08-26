import React, { useState } from "react";
import Layout from "../components/Layout";
import { MdWbSunny, MdNightlightRound } from "react-icons/md";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
var FileSaver = require("file-saver");

const Downloads = () => {
  const [dayHover, setDayHover] = useState(false);
  const [nightHover, setNightHover] = useState(false);
  return (
    <Layout title={"Downloads"}>
      <div className="flex flex-col items-center mt-20">
        <div className="font-vogue text-5xl sm:text-7xl font-bold dark:text-white text-tyrian-purple ">
          Downloads
        </div>
        <div className="w-full flex flex-col items-center sm:flex-row mt-10">
          <div
            className={`border-4 border-tyrian-purple w-3/4 sm:w-full aspect-[16/9] bg-no-repeat bg-center bg-cover bg-[url("/events/Day1/batch-day.jpeg")]
          lg:mx-10 md:mx-6 mx-4 my-4 sm:my-0
          `}
          ></div>
          <div
            className={`border-4 border-tyrian-purple w-3/4 sm:w-full aspect-[16/9] bg-no-repeat bg-center bg-cover bg-[url("/events/Day5/batch-night.jpg")]
          lg:mx-10 md:mx-6 mx-4 my-4 sm:my-0
          `}
          ></div>
        </div>
        <div className="flex w-full justify-around my-6 sm:mt-6 md:mt-8 lg:mt-12">
          <div className="">
            <button
              className={`bg-tyrian-purple dark:bg-prussian-blue  font-montserrat
              dark:hover:bg-lapis-lazuli hover:ring-2 dark:hover:ring-prussian-blue transition-colors
              lg:w-40  lg:text-3xl
              sm:w-32 sm:text-2xl
              p-2 w-24 text-white
              `}
              onClick={() => {
                FileSaver.saveAs(
                  "/events/Day1/batch-day.jpeg",
                  "day-batch-photo.png"
                );
              }}
              onMouseEnter={() => {
                setDayHover(true);
              }}
              onMouseLeave={() => {
                setDayHover(false);
              }}
            >
              <FontAwesomeIcon
                icon={faDownload}
                className={`mr-2 sm:text-2xl hover:animate-bounce ${
                  dayHover && "animate-bounce"
                }`}
              />
              Day
            </button>
          </div>

          <div className="">
            <button
              className={`bg-tyrian-purple dark:bg-prussian-blue font-montserrat
              dark:hover:bg-lapis-lazuli hover:ring-2 dark:hover:ring-prussian-blue transition-colors
              lg:w-40  lg:text-3xl
              sm:w-32 sm:text-2xl
              p-2 w-24 text-white
              `}
              onClick={() => {
                FileSaver.saveAs(
                  "/events/Day5/batch-night.jpg",
                  "night-batch-photo.png"
                );
              }}
              onMouseEnter={() => {
                setNightHover(true);
              }}
              onMouseLeave={() => {
                setNightHover(false);
              }}
            >
              <FontAwesomeIcon
                icon={faDownload}
                className={`mr-2 sm:text-2xl hover:animate-bounce ${
                  nightHover && "animate-bounce"
                }`}
              />
              Night
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Downloads;
