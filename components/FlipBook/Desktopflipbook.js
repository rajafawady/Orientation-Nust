import React, { useEffect, useRef, useState } from 'react'
import HTMLFlipBook from 'react-pageflip'
import { motion, useAnimation } from 'framer-motion'
import Coverpage from './Coverpage'
import Contentpage_1 from './Contentpage_1'
import Contentpage_2 from './Contentpage_2'
import Lastpage from './Lastpage'

function Desktopflipbook({coverpage, history, lastpage }) {
  const book = useRef()
  const current = useAnimation()
  const bookPosition = {
    hidden: {
      x: "-100vw"
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.5
      }
    }
  }

  useEffect(() => { current.start("visible"); })

  const onFilp = () => {
    let currentPage = book.current.pageFlip().getCurrentPageIndex();
    if (currentPage === 11) {
      current.start({
        x: "50%"
      })
    }
    if (currentPage === 0) {
      current.start({
        x: "0%"
      })
    }
    if (currentPage !== 0 && currentPage !== 11) {
      current.start({
        x: "25%"
      })
    }
  }

  return (
    <motion.div className={`box-border grid place-items-center w-4/6 h-screen p-2`} variants={bookPosition} animate={current} initial="hidden">
      <HTMLFlipBook width={600} height={700} size={'stretch'} showCover={true} ref={book} onFlip={onFilp}>
        <Coverpage coverpage={coverpage}></Coverpage>
        {history.map((value, i) => {
          return (
            [<Contentpage_1 id={value.id} images={value.images} key={value.id}></Contentpage_1>,  
           <Contentpage_2 content={value.content} key={i}></Contentpage_2>]
          )
        }).map((value) => {
          return value
        })}
        <Lastpage lastpage={lastpage}></Lastpage>
      </HTMLFlipBook>
    </motion.div>
  )
}

export default Desktopflipbook

