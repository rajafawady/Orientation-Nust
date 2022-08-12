import React from 'react'


export const NumberBox = ({ num, unit, flip }) => {
    return (
        <div className="flex flex-col items-center mt-2 px-2">
            <div className=" relative bg-transparent flex flex-col items-center justify-center rounded-lg w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32  text-2xl md:text-4xl mt-4 ">
                <div className="rounded-t-lg rounded-b-lg bg-white dark:bg-tyrian-purple w-full h-full"></div>

                <div className="text-4xl absolute text-tyrian-purple dark:text-white z-10 font-bold font-redhat md:text-7xl font-mono ">
                    {num}
                </div>

                <div className=" rounded-b-lg rounded-t-lg bg-white dark:bg-tyrian-purple w-full h-full"></div>               
            </div>
            <p className="text-lg mt-3 font-semibold text-rose-200  md:text-2xl ">
                {unit}
            </p>
        </div>
    )
}