import React, { useState, forwardRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import styles from "./Flipbook.module.css"
import { LogoSVG } from '../svgs'

const Page = ({ coverpage, visibility }, ref) => {
    return (

        <div className={`w-full shadow-2xl   ${visibility ? styles.coverPage : null} text-white`} ref={ref}>
            <div className={`w-1/6 h-full flex flex-col justify-end items-end  ${styles.bookShape}`} >
                <div className={`w-5/6 h-12 md:h-16 ${styles.bookPages} mb-2`}>
                    <div className={`${styles.line2} w-full`}></div>
                    <div className={`${styles.line} w-full`}></div>
                    <div className={`${styles.line} w-full`}></div>
                    <div className={`${styles.line2} w-full`}></div>
                </div>

            </div>

            <div className={`h-full flex flex-col justify-between w-5/6 `}>
                <div className='top'>

                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='bg-white'>
                        <LogoSVG width={160} />
                    </div>
                    <div className='text-2xl md:text-4xl lg:text-6xl mt-6 font-vogue'>
                        Legacy of
                    </div>
                    <div className='text-2xl md:text-4xl lg:text-6xl mt-6 font-vogue'>
                        Orientation of NUST
                    </div>
                </div>


                <div className={`${styles.remainingPages} w-full h-12 md:h-16 mb-2 flex flex-col`}>
                    <div className={`${styles.line} w-full`}></div>
                    <div className={`${styles.line} w-full`}></div>
                    <div className={`${styles.line} w-full`}></div>
                    <div className={`${styles.line} w-full`}></div>
                </div>
            </div>
        </div>


    )
}

export default forwardRef(Page)
