import React, {forwardRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import styles from './Flipbook.module.css'

const Page = forwardRef((props, ref) => {
    return (
        <div className={`w-6/12 h-96 flex flex-col bg-gray-500 font-serif ${styles.shadowRight}`} ref={ref} key={props.key}>
            <div className={`w-full h-full flex flex-col ${styles.shadowRight}`}>
                <div className='w-full h-1/6 flex flex-col justify-center items-center font-bold text-2xl font-serif'>{props.id}</div>
                <div className={`w-full h-5/6 relative ${styles.imageDiv}`}>
                    <motion.div className='border-2 w-3/6 h-3/6 absolute top-2 left-2' whileHover={{scale:1.1}}>
                        <Image layout='fill' className=' object-cover' src={props.images[0]}></Image>
                    </motion.div>
                    <motion.div className='border-2 w-2/6 h-2/6 absolute bottom-2 right-2' whileHover={{scale:1.1}}>
                        <Image layout='fill' className=' object-cover' src={props.images[1]}></Image>
                    </motion.div>
                    <motion.div className='border-2 w-1/6 h-1/6  absolute right-2 top-2' whileHover={{scale:1.1}}>
                        <Image layout='fill' className=' object-cover' src={props.images[2]}></Image>
                    </motion.div>
                    <motion.div className='border-2 w-1/6 h-1/6  absolute right-1/4 top-10' whileHover={{scale:1.1}}>
                        <Image layout='fill' className=' object-cover' src={props.images[3]}></Image>
                    </motion.div>
                    <motion.div className='border-2 w-2/6 h-1/6  absolute right-5 top-1/3' whileHover={{scale:1.1}}>
                        <Image layout='fill' className=' object-cover' src={props.images[4]}></Image>
                    </motion.div>
                    <motion.div className='border-2 w-3/6 h-2/6 absolute bottom-2 left-2' whileHover={{scale:1.1}}>
                        <Image layout='fill' className=' object-cover' src={props.images[5]}></Image>
                    </motion.div>
                </div>
            </div>
        </div>
    )
})

export default Page

