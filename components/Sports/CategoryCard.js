import React, { useState } from "react";
import FixtureCard from "./FixtureCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Disclosure, Transition } from "@headlessui/react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const CategoryCard = ({ category }) => {
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(true);
  return (
    <Disclosure>
    
      <div
        className={` text-white 
        bg-tyrian-purple 
        dark:bg-prussian-blue
        px-2 md:px-4 pt-4 pb-2 rounded md:rounded-lg my-4`}
      >
        <Disclosure.Button
          className="w-full flex justify-between"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={() => setOpen(!open)}
        >
          <div className="w-10 "></div>
          <div className="flex justify-center text-xl md:text-3xl font-montserrat ">
            <div className={`${hover&&'dark:text-white'}`}>
              {category.category}
              <FontAwesomeIcon icon={category.icon} className="ml-2 my-auto" />
            </div>
          </div>
          <div className="w-10">
            {" "}
            {!open ? (
              <>
                <BiChevronDown
                  className={`my-auto inline ${
                    hover && "text-ultra-red dark:text-white"
                  }`}
                  size={30}
                />
              </>
            ) : (
              <>
                <BiChevronUp
                  className={`my-auto inline ${
                    hover && "text-ultra-red dark:text-white"
                  }`}
                  size={30}
                />
              </>
            )}
          </div>
        </Disclosure.Button>
        <Transition
        show={open}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Disclosure.Panel>
            {category.gNote && (
              <div className="font-mont ml-1">
                <span className="font-bold">Note:</span>&nbsp;
                {category.gNote}
              </div>
            )}
            {category.fixtures.map((fixture, index) => {
              return (
                <FixtureCard
                  key={index}
                  showType={category.showType}
                  fixture={fixture}
                  oneTeam={category.oneTeam}
                  note={category.note}
                />
              );
            })}
          </Disclosure.Panel>
        </Transition>
        {/* note goes here */}
      </div>
    </Disclosure>
  );
};

export default CategoryCard;

/*  bigger 2 arrays of participants
    inside each array are category objects

    each category object has a category and an array of fixtures

    array of fixtures has objects with team 
    names and logos and fixture details

*/
