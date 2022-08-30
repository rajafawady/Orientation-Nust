import React from "react";

const Btn = ({ show, onClick, setHover, hover, text, Icon }) => {
  return (
    <div className="bg-black">
      {show && (
        <button
          className={`dark:bg-ultra-red hover:bg-opacity-80 bg-tyrian-purple dark:hover:bg-opacity-80
                  transition-colors duration-200 text-white font-mont font-bold
                  lg:p-4 lg:text-3xl
                  md:p-2 md:text-2xl
                  sm:p-4 sm:text-3xl
                  p-2 text-2xl                  
                  ${show ? "block" : "hidden"}`}
          onClick={onClick}
          // onClick={handleSpinClick}
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <Icon className={`inline mr-2 mb-1 ${hover && "animate-spin"}`} />
          {text}
        </button>
      )}
    </div>
  );
};

export default Btn;
