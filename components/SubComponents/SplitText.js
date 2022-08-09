import React from 'react'
import { motion } from 'framer-motion'

export function SplitText({ children, ...rest }) {
  let words = children.split(' ')
  return words.map((word, i) => {
    return (
      <div
      className="font-sans text-white"
        key={children + i}
        style={{ display: 'inline-block', overflow: 'hidden', fontSize: 24 }}
      >
        <motion.div
          {...rest}
          style={{ display: 'inline-block', willChange: 'transform' }}
          custom={i}
        >
          {word + (i !== words.length - 1 ? '\u00A0' : '')}
        </motion.div>
      </div>
    )
  })
}
