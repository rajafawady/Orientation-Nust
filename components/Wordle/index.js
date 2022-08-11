import styles from "./game.module.css";
import Board from "./Board";
import Keyboard from "./Keyboard";
import { boardDefault, generateWordSet } from "./Words";
import React, { useState, createContext, useEffect } from "react";
import GameOver from "./GameOver";

export const AppContext = createContext();

function Wordle() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letter: 0 });
  const [wordSet, setWordSet] = useState(new Set());
  const [correctWord, setCorrectWord] = useState("");
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });
  const onEnter = () => {
    console.log("inside onentr");
    if (currAttempt.letter !== 5) return;

    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[currAttempt.attempt][i];
    }
    setCurrAttempt({ attempt: currAttempt.attempt + 1, letter: 0 });

    // if (wordSet.has(currWord.toLowerCase())) {
    //   setCurrAttempt({ attempt: currAttempt.attempt + 1, letter: 0 });
    // } else {
    //   alert("Word not found");
    // }

    if (currWord.toLocaleLowerCase() === correctWord) {
      setGameOver({ gameOver: true, guessedWord: true });
      return;
    }
    console.log(currAttempt);
    if (currAttempt.attempt === 5) {
      setGameOver({ gameOver: true, guessedWord: false });
      return;
    }
  };

  const onDelete = () => {
    if (currAttempt.letter === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letter - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letter: currAttempt.letter - 1 });
  };

  const onSelectLetter = (key) => {
    if (currAttempt.letter > 4) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letter] = key;
    setBoard(newBoard);
    setCurrAttempt({
      attempt: currAttempt.attempt,
      letter: currAttempt.letter + 1,
    });
  };

  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord);
      // console.log('In app js', words.wordSet);
    });
  }, []);

  return (
    <AppContext.Provider
      value={{
        board,
        setBoard,
        currAttempt,
        setCurrAttempt,
        correctWord,
        onSelectLetter,
        onDelete,
        onEnter,
        setDisabledLetters,
        disabledLetters,
        gameOver,
      }}
    >
      <div className={` mx-auto text-center w-full  flex flex-col`}>
        <div
          className={`h-14 w-full m-0 border-b-gray-600 grid place-items-center ${styles.nav}`}
        >
          <h1
            className={`m-0 text-black text-5xl font-montserrat dark:text-white`}
          >
            NUST Wordle
          </h1>
        </div>
        <div
          className={`flex flex-col items-center pt-4 justify-evenly w-full`}
        >
          <Board />
          <div className="mt-6">
            {gameOver.gameOver ? <GameOver /> : <Keyboard />}
            {/* {gameOver.gameOver && <GameOver /> } */}
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default Wordle;
