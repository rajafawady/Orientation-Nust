import React from 'react'
import HTMLFlipBook from 'react-pageflip'
import { motion } from 'framer-motion'
import Coverpage from './Coverpage'
import Contentpage_1 from './Contentpage_1'
import Contentpage_2 from './Contentpage_2'
import Lastpage from './Lastpage'

function Mobileflipbook({ coverpage, history, lastpage }) {
    const bookPosition = {
        hidden: {
            x: "-100vw"
        },
        visible: {
            x: 0,
            
        }
    }

    return (
        <motion.div className={`box-border grid h-screen place-items-center border-2`} variants={bookPosition} animate="visible" initial="hidden">
            <div>
                <HTMLFlipBook width={350} height={450} size={'fixed'} showCover={true}>
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
            </div>
        </motion.div>
    )
}

export default Mobileflipbook