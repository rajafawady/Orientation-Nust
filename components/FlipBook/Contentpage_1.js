import React, { forwardRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import styles from './Flipbook.module.css'
import { useContext } from 'react'
import { useTheme } from 'next-themes'
import { ClickContext } from '../../context/GlobalProvider'

const Page = (props, ref) => {
    const { click } = useContext(ClickContext);
    const { theme, setTheme } = useTheme()
    return (
        <div className={`w-6/12 h-96 flex flex-col font-serif ${theme==="dark"?styles.shadowRightDark:styles.shadowRight} ${theme==="dark"? "text-white bg-black" : "text-black bg-white"}`} ref={ref} key={props.key}>
            <div className={`w-full h-full flex flex-col ${theme==="dark"?styles.shadowRightDark:styles.shadowRight}`}>
                <div className='w-full h-1/6 flex flex-col justify-center items-center font-bold text-2xl md:text-4xl font-serif'>{props.id}</div>
                <div className={`w-full h-5/6 relative ${theme==="dark"?styles.imageDivDark:styles.imageDiv}`}>
                    <motion.div className='border-2 w-3/6 h-3/6 absolute top-2 left-2' whileHover={{ scale: 1.1 }}>
                        <Image layout='fill' className=' object-cover' src={props.images[0]} alt="Image"></Image>
                    </motion.div>
                    <motion.div className='border-2 w-2/6 h-2/6 absolute bottom-2 right-2' whileHover={{ scale: 1.1 }}>
                        <Image layout='fill' className=' object-cover' src={props.images[1]} alt="Image"></Image>
                    </motion.div>
                    <motion.div className='border-2 w-1/6 h-1/6  absolute right-2 top-2' whileHover={{ scale: 1.1 }}>
                        <Image layout='fill' className=' object-cover' src={props.images[2]} alt="Image"></Image>
                    </motion.div>
                    <motion.div className='border-2 w-1/6 h-1/6  absolute right-1/4 top-10' whileHover={{ scale: 1.1 }}>
                        <Image layout='fill' className=' object-cover' src={props.images[3]} alt="Image"></Image>
                    </motion.div>
                    <motion.div className='border-2 w-2/6 h-1/6  absolute right-5 top-1/3' whileHover={{ scale: 1.1 }}>
                        <Image layout='fill' className=' object-cover' src={props.images[4]} alt="Image"></Image>
                    </motion.div>
                    <motion.div className='border-2 w-3/6 h-2/6 absolute bottom-2 left-2' whileHover={{ scale: 1.1 }}>
                        <Image layout='fill' className=' object-cover' src={props.images[5]} alt="Image"></Image>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default forwardRef(Page)

