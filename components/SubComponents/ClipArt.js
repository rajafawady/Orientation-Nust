import React from "react";
import { motion } from "framer-motion";


export default function ClipArt() {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <circle clipPath="url(#clipper)" r="20" cx="50" cy="50" fill="yellow" />
      <circle clipPath="url(#clipper)" r="10" cx="70" cy="90" fill="red" />
      <defs>
        <clipPath id="clipper">
          <motion.rect
            initial={{
              y: 100
            }}
            animate={{
              y: 0
            }}
            transition={{
              duration: 2
            }}
            height="100"
            width="100"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
