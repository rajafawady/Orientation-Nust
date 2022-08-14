import React, { useState, useCallback, useEffect, useContext } from "react";
import Key from "./Key";
import { AppContext } from ".";
import { MdOutlineKeyboard } from "react-icons/md";
import styles from "./game.module.css";
import { Transition } from "@headlessui/react";

function Keyboard() {
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];
  const [showKeyboard, setShowKeyboard] = useState(false);

  const {
    board,
    disabledLetters,
    currAttempt,
    gameOver,
    onSelectLetter,
    onEnter,
    onDelete,
  } = useContext(AppContext);

  const handleKeyboard = useCallback(
    (event) => {
      if (gameOver.gameOver) return;
      if (event.key === "Enter") {
        console.log("entr pressed in keyboard");
        onEnter();
      } else if (event.key === "Backspace") {
        onDelete();
      } else {
        keys1.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
        keys2.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
        keys3.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
      }
    },
    [currAttempt]
  );
  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  console.log(disabledLetters);

  //  Comment in the below lines to display keyboard

  return (
    <div className="flex flex-col">
      <div
        className={`bg-tyrian-purple mx-auto p-1.5 rounded-md cursor-pointer md:hidden hover:bg-ultra-red transition-colors
        sm:translate-x-60 sm:-translate-y-96 ${styles.btn}
        `}
        onClick={() => {
          setShowKeyboard(!showKeyboard);
        }}
      >
        <MdOutlineKeyboard size={25} color="white" />
      </div>
      {
        <Transition
          show={showKeyboard}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="md:hidden" onKeyDown={handleKeyboard}>
            <div className={`flex justify-center m-1 `}>
              {keys1.map((key) => {
                return (
                  <Key keyVal={key} disabled={disabledLetters.includes(key)} />
                );
              })}
            </div>
            <div className={`flex justify-center m-1 `}>
              {keys2.map((key) => {
                return (
                  <Key keyVal={key} disabled={disabledLetters.includes(key)} />
                );
              })}
            </div>
            <div className={`flex justify-center m-1 `}>
              <Key keyVal={"Enter"} bigKey />
              {keys3.map((key) => {
                return (
                  <Key keyVal={key} disabled={disabledLetters.includes(key)} />
                );
              })}
              <Key keyVal={"Delete"} />
            </div>
          </div>
        </Transition>
      }
    </div>
  );
}

export default Keyboard;
