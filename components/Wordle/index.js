import Board from "./Board";
import Keyboard from "./Keyboard";
import { boardDefault, generateWordSet } from "./Words";
import React, { useState, createContext, useEffect } from "react";
import GameOver from "./GameOver";
import { MdOutlineKeyboard } from "react-icons/md";

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
    if (currAttempt.letter !== 5) return;

    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[currAttempt.attempt][i];
    }
    setCurrAttempt({ attempt: currAttempt.attempt + 1, letter: 0 });

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
      <div className=" mx-auto text-center w-full  flex flex-col">
        <div className="h-24 w-full m-0 border-b-gray-600 grid place-items-center ">
          <h1 className="m-0  text-tyrian-purple text-4xl md:text-6xl font-brittany font-bold dark:text-white">
            WORDLE
          </h1>
        </div>
        <div className="flex flex-col md:flex-row px-4 justify-center lg:px-20 pt-12">
          <div className="text-center md:text-left p-6 lg:p-8 bg-tyrian-purple shadow-2xl rounded-lg">
            <div className="text-4xl font-bold text-white opening-text">
              How to play?
            </div>
            <div className="text-base lg:text-xl text-white pt-4 ">
              <ol className="">
                <div className="my-4" >You have six attempts to guess the correct word.</div>
                <div className="my-4" >The word is a common term used in NUST.</div>
                <div className="my-4" >
                  A <span className=" font-bold"> &nbsp;gray&nbsp;</span> box
                  shows wrong guess.
                </div>
                <div className="my-4" >
                  A <span className=" font-bold"> &nbsp;pink&nbsp;</span> box
                  shows the placement is not correct.
                </div>
                <div className="my-4" >
                  A <span className=" font-bold">&nbsp;purple&nbsp;</span> box
                  shows correct guess.
                </div>
                <div className="block md:hidden">
                  Press{" "}
                  <MdOutlineKeyboard
                    size={20}
                    color="white"
                    className="inline"
                  />{" "}
                  to open keyboard.
                </div>
              </ol>
            </div>
          </div>
          <div className="flex flex-col items-center mt-8 md:mt-0 justify-evenly w-full md:w-1/2">
            <Board />
            <div className="mt-2 sm:mt-6">
              {gameOver.gameOver ? (
                <GameOver />
              ) : (
                <Keyboard />
              )}
            </div>
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default Wordle;
