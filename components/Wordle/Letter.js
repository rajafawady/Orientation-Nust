import React, { useContext, useEffect } from "react";
import { AppContext } from ".";
import styles from "./game.module.css";

function Letter({ letterPos, attemptVal }) {
  const { board, setDisabledLetters, currAttempt, correctWord } =
    useContext(AppContext);
  const letter = board[attemptVal][letterPos];
  const correct = correctWord.toUpperCase()[letterPos] === letter;
  const almost =
    !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
  const letterState =
    currAttempt.attempt > attemptVal &&
    (correct ? "bg-tyrian-purple" : almost ? "bg-ultra-red" : "bg-[#3a393c]");

  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currAttempt.attempt]);
  return <div className={` shadow-lg shadow-tyrian-purple rounded-md border
    border-gray-700 h-14 w-14 sm:h-16 sm:w-16 m-1 grid place-items-center font-montserrat 
  text-2xl sm:text-3xl ${letterState}`}>{letter}</div>;
}

export default Letter;
