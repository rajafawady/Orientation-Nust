import React, {useRef} from 'react'
import HTMLFlipBook from 'react-pageflip'
import { motion, useAnimation } from 'framer-motion'
import Coverpage from './Coverpage'
import Contentpage_1 from './Contentpage_1'
import Contentpage_2 from './Contentpage_2'
import Lastpage from './Lastpage'

function Desktopflipbook({coverpage, history, lastpage}) {
  const book = useRef();
  const bookPosition = {
    
  }

  let currentPage = 0;
  let prevPage = 0;

  const onFilp = () => {
    currentPage = book.current.pageFlip().getCurrentPageIndex();
    console.log(currentPage)
  }

  const onChange = (e)=>{
    if(e.data === "flipping"){
      prevPage = currentPage
      if(prevPage===11){
        setTimeout(()=>{
          book.current.pageFlip().flipPrev()
        }, 100)
        setTimeout(()=>{
          book.current.pageFlip().flipPrev()
        }, 210)
        setTimeout(()=>{
          book.current.pageFlip().flipPrev()
        }, 320)
        setTimeout(()=>{
          book.current.pageFlip().flipPrev()
        }, 430)
        setTimeout(()=>{
          book.current.pageFlip().flipPrev()
        }, 540)
        if(prevPage!==1){
          setTimeout(()=>{
            book.current.pageFlip().flipPrev()
          }, 650)
          setTimeout(()=>{
            book.current.pageFlip().flipPrev()
          }, 760)
          setTimeout(()=>{
            book.current.pageFlip().flipPrev()
          }, 870)
          setTimeout(()=>{
            book.current.pageFlip().flipPrev()
          }, 980)
          setTimeout(()=>{
            book.current.pageFlip().flipPrev()
          }, 1090)
        }
      }
    }
  }

  return (
    <motion.div className={`box-border grid place-items-center mt-16`} variants={bookPosition}  initial="hidden">
      <HTMLFlipBook width={550}
          height={683}
          minWidth={315}
          maxWidth={1000}
          minHeight={620}
          maxHeight={1350}
          maxShadowOpacity={0.5} 
          className={'legacy-book'}
          size={'stretch'} showCover={true} ref={book} onFlip={onFilp} onChangeState={onChange}>
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
