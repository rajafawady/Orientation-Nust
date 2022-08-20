import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import { Transition } from "@headlessui/react";
// import { useTheme } from "next-themes";
// const { theme } = useTheme();
import { TbFidgetSpinner } from "react-icons/tb";
import { IoReload } from "react-icons/io5";
const data = [
  { option: "do some shit " },
  { option: "do some shit " },
  { option: "do some shit " },
  { option: "do some shit " },
  { option: "do some shit " },
  { option: "do some shit " },
  { option: "do some shit " },
  { option: "do some shit " },
  { option: "do some shit " },
  { option: "do some shit " },
  { option: "do some shit " },
  { option: "do some shit " },
  { option: "1" },
  { option: "2" },
  { option: "3" },
  { option: "4" },
  { option: "5" },
  { option: "6" },
  { option: "7" },
  { option: "8" },
  { option: "9" },
  { option: "10" },
  { option: "11" },
  { option: "12" },
  { option: "13" },
  { option: "14" },
  { option: "15" },
  { option: "16" },
  { option: "17" },
];

const colors = [];
colors["tyrianPurple"] = "rgb(114, 2, 64)";
colors["ultraRed"] = "rgb(242, 110, 131)";
colors["palePink"] = "rgb(249, 216, 215)";
colors["lapisLazuli"] = "rgb(18, 98, 158)";
colors["prussianBlue"] = "rgb(17, 46, 73)";

export default (/* { data } */) => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [spinDone, setSpinDone] = useState(false);
  const [hover, setHover] = useState(false);
  const [selected, setSelected] = useState(() => {
    let array = [];
    for (let i = 0; i < 10; i++) {
      let random = data.splice(Math.floor(Math.random() * data.length), 1);
      array.push(random[0]);
    }
    return array;
  });

  const handleSpinClick = () => {
    const prizeIndex = Math.floor(Math.random() * selected.length);
    setPrizeNumber(selected[prizeIndex].option);
    console.log("winning number is", selected[prizeIndex].option);
    setMustSpin(true);
  };

  const onFinishedSpinning = () => {
    console.log("running onFinishedSpinning");
    const randomIndex = selected.findIndex((x) => x.option === prizeNumber);
    const newNumber = data.splice(
      Math.floor(Math.random() * data.length),
      1
    )[0];
    setSelected((prevState) => {
      return [
        ...prevState.slice(0, randomIndex),
        newNumber,
        ...prevState.slice(randomIndex + 1),
      ];
    });
    setSpinDone(false);
  };
  console.log("selected ", selected);
  return (
    <>
      <div className="flex flex-col ">
        <div className="flex font-bold text-prussian-blue dark:text-tyrian-purple justify-center text-7xl font-brittany pb-20">
          Spinner
        </div>
        <div className="flex flex-col md:flex-row justify-evenly ">
          <div className="flex items-center justify-center ">
            <Wheel
              mustStartSpinning={mustSpin}
              prizeNumber={selected.findIndex((x) => x.option === prizeNumber)}
              data={selected}
              onStopSpinning={() => {
                setMustSpin(false);
                setSpinDone(true);
              }}
              backgroundColors={[colors.ultraRed, colors.prussianBlue]}
              textColors={[colors.lapisLazuli, colors.palePink]}
              outerBorderColor={colors.tyrianPurple}
              outerBorderWidth={5}
              innerRadius={10}
              innerBorderColor="rgb(114, 2, 64)"
              innerBorderWidth={2}
              radiusLineColor={colors.tyrianPurple}
              radiusLineWidth={2}
              fontSize={15}
              textDistance={50}
              spinDuration={1}
            />
          </div>
          <div className="flex justify-center w-1/3">
            <div className="flex flex-col items-center w-full">
              <div
                className={`basis-1/2 flex flex-col justify-center w-full 
                bg-center bg-no-repeat  rounded-2xl
                ${
                  spinDone ? 'bg-[url("/focus.jpg")] bg-cover' : 'bg-[url("/s2w.png")] bg-contain'
                } `}
              >
                <div className="font-montserrat text-white text-3xl text-center ">
                  {spinDone ? (
                    <div>
                      You won <span className="text-5xl">{prizeNumber}</span>!
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className="basis-1/2 pt-10">
                <button
                  className={`bg-prussian-blue dark:bg-tyrian-purple hover:bg-[#1e4b7c] 
                  transition-colors duration-200
                  text-white p-4 font-mont text-3xl font-bold rounded-xl
                  ${!spinDone ? "block" : "hidden"}`}
                  onClick={handleSpinClick}
                  onMouseOver={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                >
                  <TbFidgetSpinner
                    className={`inline mr-2 mb-1 ${hover && "animate-spin"}`}
                  />
                  Spin!
                </button>

                <button
                  className={`bg-prussian-blue dark:bg-tyrian-purple 
                  text-white p-4 font-mont text-3xl font-bold rounded-xl
                ${spinDone ? "block" : "hidden"}`}
                  onClick={onFinishedSpinning}
                  onMouseOver={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                >
                  <IoReload
                    className={`inline mr-2 mb-1 ${hover && "animate-spin"}`}
                  />
                  Spin Again!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
