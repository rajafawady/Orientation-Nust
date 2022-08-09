import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "../SubComponents/AnimatedText";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function MeetOurTeam({placeholderText}) {
  const [replay, setReplay] = useState(true);
  const {theme, setTheme} = useTheme()
  // Placeholder text data, as if from API
  

  useEffect(()=>{
    handleReplay();
  }, [theme])

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025
      }
    }
  };

  // Quick and dirt for the example
  const handleReplay = () => {
    setReplay(!replay);
    setTimeout(() => {
      setReplay(true);
    }, 600);
  };

  return (
    <motion.div
      className="App"
      initial="hidden"
      // animate="visible"
      animate={replay ? "visible" : "hidden"}
      variants={container}
    >
      <div className="container">
        {placeholderText.map((item, index) => {
          return <AnimatedText {...item} key={index} />;
        })}
      </div>
    
    </motion.div>
  );
}
