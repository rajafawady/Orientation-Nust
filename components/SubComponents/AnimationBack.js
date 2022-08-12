import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled(motion.div)`
  background: linear-gradient(180deg, #F26E83 0%, #F9D8D7 100%);
  border-radius: 30px;
  width: 130px;
  height: 130px;
  margin: 20px;
`;


const AnimationPropExample = () => {
  return (
  <div className="flex justify-center">
      <Container
        animate={{ y: [0, 150, 150, 0], rotate: 90 }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <Container
        animate={{ y: [0, -150, -150, 0], rotate: 90 }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </div>
  );
};

export default AnimationPropExample;