import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

const DoodleContainer = ({className,src}) => {
  return (
    <div className={twMerge(className)}>
      <div className="w-full h-full relative">
        <Image src={src} alt="doodle" layout="fill" />
      </div>
    </div>
  );
};

export default DoodleContainer;
