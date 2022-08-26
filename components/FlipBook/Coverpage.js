import React, { useState, forwardRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import styles from "./Flipbook.module.css"

const Page = React.forwardRef(({coverpage}, ref) => {
    return (
        <div className= {`w-6/12 h-96 flex flex-col bg-tyrian-purple font-serif ${styles.coverPage}`} ref={ref}>
            <div className={`border-sky-500 w-full h-full flex flex-col p-2 ${styles.coverPage}`}>
                <motion.div className=" w-full h-5/6 m-auto flex flex-col justify-center items-center font-bold text-2xl" animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 2 }}>
                    
                    <div className={`w-full h-2/5 relative ${styles.imageDiv}`} >
                        <motion.div className='border-2 w-3/6 h-5/6 absolute top-4 left-1' whileHover={{ scale: 1.1 }}>
                            <Image layout='fill' className=' object-cover' src={coverpage.images[0]}></Image>
                        </motion.div>
                        <motion.div className='border-2 w-2/6 h-4/6 absolute right-5 top-4' whileHover={{ scale: 1.1 }}>
                            <Image layout='fill' className=' object-cover' src={coverpage.images[1]}></Image>
                        </motion.div>
                    </div>

                    <div className=' w-full h-1/5 flex flex-col justify-center items-center'>Orientation History</div>
                    
                    <div className={`w-full h-2/5 relative ${styles.imageDiv}`}>
                        <motion.div className='border-2 w-2/6 h-3/6 absolute left-5 top-1/4' whileHover={{ scale: 1.1 }}>
                            <Image layout='fill' className=' object-cover' src={coverpage.images[2]}></Image>
                        </motion.div>
                        <motion.div className='border-2 w-1/6 h-2/6 absolute top-4 left-2/4' whileHover={{ scale: 1.1 }}>
                            <Image layout='fill' className=' object-cover' src={coverpage.images[3]}></Image>
                        </motion.div>
                        <motion.div className='border-2 w-1/6 h-2/6 absolute top-4 left-3/4' whileHover={{ scale: 1.1 }}>
                            <Image layout='fill' className=' object-cover' src={coverpage.images[4]}></Image>
                        </motion.div>
                        <motion.div className='border-2 w-1/6 h-2/6 absolute bottom-3 right-1/4' whileHover={{ scale: 1.1 }}>
                            <Image layout='fill' className=' object-cover' src={coverpage.images[5]}></Image>
                        </motion.div>
                    </div>
                    
                </motion.div>
            </div>
        </div>
    )
})

export default Page
