import React, { useState, forwardRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import styles from './Flipbook.module.css'

const Page = React.forwardRef(({lastpage}, ref) => {
    return (
        <div className={`w-6/12 h-96 flex flex-col bg-tyrian-purple shadow-2xl font-serif ${styles.lastPage}`} ref={ref}>
            <div className= {`w-full h-full flex flex-col ${styles.lastPage}`}>
                <div className="w-full h-5/6 m-auto flex flex-col justify-center items-center">
                    <div className={`w-2/4 h-2/4 border-2 relative ${styles.imageDiv}`}>
                        <Image layout='fill' src={lastpage.image} className="object-cover"></Image>
                    </div>
                    <div className='w-full h-1/4 flex flex-col justify-center items-center font-serif font-bold text-2xl my-2'>
                        Legacy Continues
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Page
