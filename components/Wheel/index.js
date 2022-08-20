import React, { useState, useEffect } from "react";
import activities from "../../util/activities.json";
import useWindowDimensions from "./useWindowDimensions";

import WheelComponent from "./srcCode";

const Wheel = () => {
  const { width } = useWindowDimensions();
  const [show, setShow] = useState(true);
  const [frameSize, setFrameSize] = useState(400);
  const [spinnerSize, setSpinnerSize] = useState(300);

  useEffect(() => {
    if (width < 768) {
      setFrameSize(200);
      setSpinnerSize(150);
    }
  }, [width]);

  const makeActivityBank = () => {
    let array = [];
    for (let i = 0; i < activities.length; i++) {
      array.push(activities[i].id);
    }
    // console.log("All activities ", array);
    return array;
  };

  let activityBank = makeActivityBank();
  const makeRandom = () => {
    let array = [];
    for (let i = 0; i < 6; i++) {
      // get random number
      let random = activityBank.splice(
        Math.floor(Math.random() * activityBank.length),
        1
      );
      // push it in state
      array.push(random[0]);
    }
    console.log("Initially selected ", array);
    return array;
  };
  let sBank = makeRandom();

  let wonBank = [];
  // const [selected, setSelected] = useState(() => {
  //   let array = [];
  //   for (let i = 0; i < 6; i++) {
  //     // get random number
  //     let random = activityBank.splice(
  //       Math.floor(Math.random() * activityBank.length),
  //       1
  //     );
  //     // push it in state
  //     array.push(random[0]);
  //   }
  //   console.log("Initially selected ", array);
  //   return array;
  // });
  // const onFinished = (winner) => {
  //   console.log("winning item ", selected[selected.indexOf(winner)]);
  //   // replace winner with another activity
  //   const randomIndex = selected.indexOf(winner);
  //   const newNumber = activityBank.splice(
  //     Math.floor(Math.random() * activityBank.length),
  //     1
  //   )[0];

  //   console.log("inserting ", newNumber, " at ", randomIndex);
  //   const firstHalf = selected.slice(0, randomIndex);
  //   const secondHalf = selected.slice(randomIndex + 1);

  //   setSelected([...firstHalf, newNumber, ...secondHalf]);

  //   // push winner to wonBank
  //   wonBank.push(winner);
  //   console.log("wonBank ", wonBank);
  // };
  // console.log("selected after Onfinished", selected);

  const onFinished = (winner) => {
    console.log("winning item ", sBank[sBank.indexOf(winner)]);
    // replace winner with another activity

    const randomIndex = sBank.indexOf(winner);
    const newNumber = activityBank.splice(
      Math.floor(Math.random() * activityBank.length),
      1
    )[0];

    sBank[randomIndex] = newNumber;

    console.log("new sBank", sBank);
    // push winner to wonBank
    wonBank.push(winner);
  };

  if (width < 640) {
    setFrameSize(200);
    setSpinnerSize(150);
  }

  const segment = sBank;
  const segColors = [
    "#12629E",
    "#F26E83",
    "#12629E",
    "#F26E83",
    "#12629E",
    "#F26E83",
    "#12629E",
    "#F26E83",
  ];

  return (
    <>
      <div className="text-center bg-slate-500">
        {/* <div className="flex justify-center">
          <button
            onClick={() => setShow(true)}
            className="block bg-blue-800 cursor-pointer hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
          >
            Spin
          </button>
        </div> */}

        {show && (
          <div className="flex justify-center">
            <WheelComponent
              segments={segment}
              segColors={segColors}
              onFinished={(winner) => onFinished(winner)}
              primaryColor="#720240"
              contrastColor="#F9D8D7"
              buttonText="Spin"
              isOnlyOnce={false}
              upDuration={100}
              size={spinnerSize}
              frameSize={frameSize}
              downDuration={500}
              fontFamily="Arial"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Wheel;
