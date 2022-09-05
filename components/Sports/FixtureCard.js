import React, { useState } from "react";
import {  BiChevronDown, BiChevronUp } from "react-icons/bi";
import { Disclosure, Transition } from "@headlessui/react";

const FixtureCard = ({ fixture, oneTeam, note, showType }) => {
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <Disclosure>
      <div className="flex flex-col p-2  text-[#121212] bg-gradient-to-b from-[#fff] to-[#e4e8f0] dark:bg-[#121212] rounded-lg my-4 border-2 dark:border-[#121212] border-white hover:border-ultra-red hover:cursor-pointer hover:border-2">
        <Disclosure.Button
          onClick={() => {
            setOpen(!open);
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {!oneTeam ? (
            <div className="flex flex-col md:hidden px-2 font-montserrat text-lg">
              <div className="flex justify-between py-1">
                <div>
                  {fixture.home.logo && (
                    <img
                      src={fixture.home.logo}
                      className="inline mr-2 w-12 h-12"
                    />
                  )}
                  {fixture.home.name}
                </div>
                <div className="text-base my-auto">
                  {" "}
                  {showType && fixture.type}
                  {!open && !showType && fixture.date}
                </div>
              </div>
              <div className="flex justify-between py-1">
                <div>
                  {fixture.away.logo && (
                    <img
                      src={fixture.away.logo}
                      className="inline mr-2 w-12 h-12"
                    />
                  )}
                  {fixture.away.name}
                </div>
                <div className="text-base my-auto">{fixture.time}</div>
              </div>
              <hr className="h-0.5 bg-gray-300  mt-2 mb-2" />
              <div className="flex justify-end">
                {!open ? (
                  <>
                    <span className="text-sm">Details</span>
                    <BiChevronDown
                      className={`my-auto inline ${hover && "text-ultra-red"}`}
                      size={20}
                    />
                  </>
                ) : (
                  <>
                    <BiChevronUp
                      className={`my-auto inline ${hover && "text-ultra-red"}`}
                      size={20}
                    />
                  </>
                )}
              </div>
            </div>
          ) : (
            <div className="flex justify-between md:hidden">
              <div className="w-4" />
              <div className="flex md:hidden lg:text-2xl md:text-xl font-mont font-bold justify-center">
                {fixture.name}
              </div>
              <div className="flex justify-end w-6">
                {!open ? (
                  <>
                    <BiChevronDown
                      className={`my-auto inline ${hover && "text-ultra-red"}`}
                      size={20}
                    />
                  </>
                ) : (
                  <>
                    <BiChevronUp
                      className={`my-auto inline ${hover && "text-ultra-red"}`}
                      size={20}
                    />
                  </>
                )}
              </div>
            </div>
          )}
          <div className="hidden justify-between font-montserrat text-lg md:flex">
            <div className="my-auto ml-2 md:text-sm lg:text-base md:w-28 lg:w-44  text-left">
              {showType && fixture.type}
              {!open && !showType && fixture.date}
            </div>

            {!oneTeam ? (
              <>
                <div className="lg:w-64 md:w-52 mr-3 ml-auto my-auto lg:text-2xl md:text-xl font-mont font-bold text-right">
                  {fixture.home.name}
                  {fixture.home.logo && (
                    <img
                      src={fixture.home.logo}
                      className="inline ml-2 w-8 h-8"
                    />
                  )}
                </div>

                <div className="mx-2 my-auto md:text-sm lg:text-base ">
                  {fixture.time}
                </div>
                <div className="lg:w-64 md:w-52 ml-3 mr-auto my-auto lg:text-2xl md:text-xl text-left font-mont font-bold">
                  {fixture.away.logo && (
                    <img
                      src={fixture.away.logo}
                      className="inline mr-2 w-8 h-8"
                    />
                  )}
                  {fixture.away.name}
                </div>
              </>
            ) : (
              <>
                <div className="flex w-96 lg:text-2xl md:text-xl font-mont font-bold justify-center">
                  {fixture.name}
                </div>
              </>
            )}

            <div className="my-auto md:text-sm lg:text-base md:w-28 lg:w-44 text-right">
              {!open ? (
                <>
                  <span className="md:hidden lg:inline">Details</span>
                  <BiChevronDown
                    className={`my-auto inline ${hover && "text-ultra-red"}`}
                    size={25}
                  />
                </>
              ) : (
                <>
                  <BiChevronUp
                    className={`my-auto inline ${hover && "text-ultra-red"}`}
                    size={25}
                  />
                </>
              )}
            </div>
          </div>
        </Disclosure.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Disclosure.Panel>
            <div className="text-[#121212] dark:font-normal p-2 mt-2 rounded flex flex-col font-mont text-sm md:text-base lg:text-lg">
              {fixture.type && !showType && (
                <div className="flex font-sans">
                  <span className="font-sans">Type:</span> &nbsp;
                  {fixture.type}
                </div>
              )}
              <div className="flex font-sans">
                <span className="font-sans">Date:</span> &nbsp;
                {fixture.date}
              </div>
              <div className="flex font-sans">
                <span className="font-sans">Time:</span> &nbsp;
                {fixture.detailedTime}
              </div>
              <div className="flex font-sans">
                <span className="font-sans">Venue:</span>&nbsp;
                {fixture.venue}
              </div>
              {note && (
                <div className="flex font-sans">
                  <span className="">Note:</span> &nbsp;
                  {note}
                </div>
              )}
            </div>
          </Disclosure.Panel>
        </Transition>
      </div>
    </Disclosure>
  );
};

export default FixtureCard;
