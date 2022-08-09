import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
  open: {
    y: 0,
    display: "block",
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    display: "none",
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ i }) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
    <div className="flex items-center">
      
      <div className="icon-placeholder" style={style} />
 
      <div className="text-placeholder" style={style} />
      </div>
    </motion.li>
  );
};
