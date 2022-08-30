import React, { useEffect, useRef, useState } from 'react'
import HTMLFlipBook from 'react-pageflip'
import { motion, useAnimation } from 'framer-motion'
import Coverpage from './Coverpage'
import Contentpage_1 from './Contentpage_1'
import Contentpage_2 from './Contentpage_2'
import Lastpage from './Lastpage'

function Desktopflipbook({coverpage, history, lastpage}) {
  const book = useRef();
  const [coverPageVisible, setCoverPageVisible] = useState(true);
  // const current = useAnimation()
  const bookPosition = {
    
  }

  // useEffect(() => { current.start("visible"); })

  const onFilp = () => {
    let currentPage = book.current.pageFlip().getCurrentPageIndex();
    if (currentPage === 0) {
      setCoverPageVisible(true);
    }else{
      setCoverPageVisible(false);
    }
  }
  return (
    <motion.div className={`box-border grid place-items-center  p-2 mt-16`} variants={bookPosition}  initial="hidden">
      <HTMLFlipBook width={550}
          height={683}
          minWidth={315}
          maxWidth={1000}
          minHeight={620}
          maxHeight={1350} 
          className={'legacy-book'}
          size={'stretch'} showCover={true} ref={book} onFlip={onFilp}>
        <Coverpage coverpage={coverpage} visibility={coverPageVisible}></Coverpage>
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

