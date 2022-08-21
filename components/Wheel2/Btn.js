import React from "react";

const Btn = ({ show, onClick, setHover, hover, text, Icon }) => {
  return (
    <div>
      {show && (
        <button
          className={`bg-prussian-blue dark:bg-tyrian-purple hover:bg-[#1e4b7c] 
                  transition-colors duration-200 text-white font-mont font-bold
                  lg:p-4 lg:text-3xl lg:rounded-xl
                  md:p-2 md:text-2xl  md:rounded-lg
                  sm:p-4 sm:text-3xl sm:rounded-xl
                  p-2 text-2xl rounded-lg
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
