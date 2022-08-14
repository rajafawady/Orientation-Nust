import React, { useContext, useEffect } from "react";
import { AppContext } from ".";

function Letter({ letterPos, attemptVal }) {
  const { board, setDisabledLetters, currAttempt, correctWord } =
    useContext(AppContext);
  const letter = board[attemptVal][letterPos];
  const correct = correctWord.toUpperCase()[letterPos] === letter;
  const almost =
    !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
  const letterState =
    currAttempt.attempt > attemptVal &&
    (correct ? "bg-tyrian-purple border-0" : almost ? "bg-ultra-red border-0" : "bg-[#3a393c] border-0");

  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currAttempt.attempt]);
  return (
    <div
      className={` shadow-lg rounded-md shadow-tyrian-purple dark:shadow-none
    dark:border-gray-700  h-10 w-10 sm:h-14 sm:w-14 lg:h-16 lg:w-16 m-1 grid place-items-center font-montserrat 
   text-lg sm:text-2xl lg:text-3xl  ${letterState} ${letterState? letterState : "border-2"}`}
    >
      {letter}
    </div>
  );
}

export default Letter;
