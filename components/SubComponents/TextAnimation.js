import React, { useEffect } from 'react'
import { SplitText } from './SplitText'
import { useAnimation,AnimatePresence, motion } from 'framer-motion'
import { useInView } from "react-intersection-observer";
import { useState } from 'react';

export const TypeWriter = ({Text}) => {
  const [visible, setVisible] = useState(false)
  const controls = useAnimation();
  const [ref, inView] = useInView();
  
  useEffect(() => {
    if (inView && !visible) {
      controls.start("visible");
      setVisible(true);
    }
  }, [inView]);

  
  return (
    <div className="App">
     
      <h1>
        <AnimatePresence>
          
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={ref}
            >
              <SplitText
                initial={{ y: '100%' }}
                animate={controls}
                
                variants={{
                  visible: i => ({
                    y: 0,
                    transition: {
                      delay: i * 0.1
                    }
                  })
                }}
              >
              {Text}
               
              </SplitText>
            </motion.div>
          
        </AnimatePresence>
      </h1>
    </div>
  )
}
