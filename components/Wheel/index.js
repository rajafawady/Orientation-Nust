import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import { TbFidgetSpinner } from "react-icons/tb";
import { IoReload } from "react-icons/io5";
import PrizeDiv from "./PrizeDiv";
import Btn from "./Btn";
let spinCount = 0;
const data = [
  { option: "do some task " },
  { option: "do some task " },
  { option: "do some task " },
  { option: "do some task " },
  { option: "do some task " },
  { option: "do some task " },
  { option: "do some task " },
  { option: "do some task " },
  { option: "do some task " },
  { option: "do some task " },
  { option: "do some task " },
  { option: "do some task " },
  { option: "do some task " },
  { option: "do some task " },
  { option: "do some task " },
  { option: "do some task " },
  { option: "do some task " },
  { option: "do some task " },
  { option: "do some task " },
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
    if(spinCount === 5) {
      alert("You are out of spins!!!");
      return;
    }
    const prizeIndex = Math.floor(Math.random() * selected.length);
    setPrizeNumber(selected[prizeIndex].option);
    console.log("winning number is", selected[prizeIndex].option);
    setMustSpin(true);
    spinCount++;
    console.log('SPIN COUNT IS ', spinCount);
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
      <div className="flex flex-col mb-10">
        <div className="flex font-bold text-prussian-blue dark:text-tyrian-purple justify-center text-7xl  font-brittany pb-6 md:pb-20">
          Spinner
        </div>
        <div className="flex flex-col md:flex-row justify-evenly ">
          <div className="flex flex-col items-center justify-center sm:px-0 px-2">
            <PrizeDiv
              spinDone={spinDone}
              prizeNumber={prizeNumber}
              hideOnMobile={false}
            />
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
          <div className="flex flex-col items-center w-full md:w-1/3">
            <PrizeDiv
              spinDone={spinDone}
              prizeNumber={prizeNumber}
              hideOnMobile={true}
            />
            <div className="basis-1/2 pt-10">
              <Btn
                show={!spinDone}
                onClick={handleSpinClick}
                hover={hover}
                setHover={setHover}
                Icon={TbFidgetSpinner}
                text="Spin!"
              />

              <Btn
                show={spinDone}
                onClick={onFinishedSpinning}
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
