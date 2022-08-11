import React, { useContext } from "react";
import { AppContext } from ".";
import styles from "./game.module.css";

function Key({ keyVal, bigKey, disabled }) {
  const { gameOver, onSelectLetter, onDelete, onEnter } =
    useContext(AppContext);

  const selectLetter = () => {
    console.log(keyVal, ' is a big key? ', bigKey);
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
      className={`m-1 rounded-md grid place-items-center duration-100
       hover:bg-opacity-70 transition-colors shadow-prussian-blue 
       shadow-xl bg-[#4490ca] cursor-pointer font-montserrat
       sm:w-12 sm:h-14 w-8 h-10 sm:text-xl text-base
        ${styles.key} ${bigKey ? styles.big : disabled && "bg-[#204c74]"} `}
      onClick={selectLetter}
    >
      
      {keyVal}
    </div>
  );
}

export default Key;
