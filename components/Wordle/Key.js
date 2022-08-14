import React, { useContext } from "react";
import { AppContext } from ".";
import styles from "./game.module.css";
import { TbBackspace } from "react-icons/tb";

function Key({ keyVal, bigKey, disabled }) {
  const { gameOver, onSelectLetter, onDelete, onEnter } =
    useContext(AppContext);

  const selectLetter = () => {
    console.log(keyVal, " is a big key? ", bigKey);
    if (gameOver.gameOver) return;
    if (keyVal === "Enter") {
      console.log("entr pressed");
      onEnter();
    } else if (keyVal === "Delete") {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };
  return (
    <div
      className={`m-0.5 sm:m-1 rounded-md grid place-items-center duration-100
       hover:bg-opacity-100 transition-colors shadow-md shadow-tyrian-purple bg-ultra-red 
       bg-opacity-80 cursor-pointer font-montserrat 
       sm:w-12 sm:h-14 w-6 h-10 sm:text-lg text-base
        ${styles.key} ${bigKey ? styles.big : disabled && "bg-[#121212]"} `}
      onClick={selectLetter}
    >
      {keyVal === "Delete" ? <TbBackspace size={25} color="white" /> : keyVal}
    </div>
  );
}

export default Key;
