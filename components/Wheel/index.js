import React, { useState, useEffect } from "react";
import { Wheel } from "react-custom-roulette";
import { TbFidgetSpinner } from "react-icons/tb";
import { IoReload } from "react-icons/io5";
import PrizeDiv from "./PrizeDiv";
import Btn from "./Btn";
import activities from "../../util/activities.js";
import { useTheme } from "next-themes";


const colors = [];
colors["tyrianPurple"] = "rgb(114, 2, 64)";
colors["ultraRed"] = "rgb(242, 110, 131)";
colors["palePink"] = "rgb(249, 216, 215)";
colors["lapisLazuli"] = "rgb(18, 98, 158)";
colors["prussianBlue"] = "rgb(17, 46, 73)";

const Spinner = () => {

  


  const { theme } = useTheme();
  const [data, setData] = useState([...activities])
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [longPrize, setLongPrize] = useState(0);
  const [spinDone, setSpinDone] = useState(false);
  const [hover, setHover] = useState(false);
  const [selected, setSelected] = useState(() => {
    let array = [];
    for (let i = 0; i < 6; i++) {
      let random = data.splice(Math.floor(Math.random() * data.length), 1);
      array.push(random[0]);
    }
    return array;
  });

  useEffect(() => {
    console.log(data.length)
    if (data.length < 2) {
      setData([...activities])
    }
  }, [])

  const handleSpinClick = () => {
    const prizeIndex = Math.floor(Math.random() * selected.length);
    setPrizeNumber(selected[prizeIndex].option);
    setLongPrize(selected[prizeIndex].longOption)
    console.log("winning object is", selected[prizeIndex]);
    setMustSpin(true);
  };

  const onFinishedSpinning = () => {
    console.log('global data is', selected)
    // console.log("running onFinishedSpinning");
    const randomIndex = selected.findIndex((x) => x.option === prizeNumber);
    const newNumber = data.splice(
      Math.floor(Math.random() * data.length),
      // 0,
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

  return (
    <>
      <div className="flex flex-col pb-10">
        <div className="flex dark:text-white text-tyrian-purple justify-center text-center text-4xl sm:text-6xl font-vogue font-bold pb-2 md:pb-10">
          Orientation Guides Activities
        </div>
        <div className="flex flex-col md:flex-row justify-evenly ">
          <div className="flex flex-col items-center justify-center sm:p-0 p-2">
            <PrizeDiv prize={prizeNumber} hideOnMobile={false} />
            <Wheel
              mustStartSpinning={mustSpin}
              prizeNumber={selected.findIndex((x) => x.option === prizeNumber)}
              data={selected}
              onStopSpinning={() => {
                setMustSpin(false);
                setSpinDone(true);
              }}
              backgroundColors={
                theme === "dark"
                  ? [colors.tyrianPurple, colors.palePink]
                  : [colors.palePink, colors.ultraRed]
              }
              textColors={
                theme === "dark"
                  ? ["white", colors.tyrianPurple]
                  : [colors.tyrianPurple, "white"]
              }
              outerBorderColor={
                theme === "dark" ? colors.ultraRed : colors.tyrianPurple
              }
              outerBorderWidth={3}
              radiusLineColor={
                theme === "dark" ? colors.ultraRed : colors.tyrianPurple
              }
              radiusLineWidth={1}
              fontSize={25}
              textDistance={50}
              spinDuration={0.1}
            />
            <div
              className={`flex flex-col items-center text-center justify-center 
            text-white font-montserrat my-8
            lg:p-4 lg:text-2xl
            md:p-2 md:px-4
            p-4 text-xl
            md:my-4
            dark:bg-tyrian-purple bg-ultra-red rounded-lg`}
            >
              {spinDone ? (
                <div className="">
                  Your Activity:{" "}
                  <span className="italic text-2xl lg:text-3xl">
                    {longPrize}
                  </span>
                </div>
              ) : (
                <div className="">Spin to get an exciting activity!
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center w-full md:w-1/3 ">
            <div className="my-auto">
              <PrizeDiv prize={prizeNumber} hideOnMobile={true} />
            </div>
            <div className="mt-auto mb-4">
              <Btn
                show={!spinDone}
                clickFunc={handleSpinClick}
                hover={hover}
                setHover={setHover}
                Icon={TbFidgetSpinner}
                text="Spin!"
              />

              <Btn
                show={spinDone}
                clickFunc={onFinishedSpinning}
                hover={hover}
                setHover={setHover}
                Icon={IoReload}
                text="Spin Again!"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Spinner;
