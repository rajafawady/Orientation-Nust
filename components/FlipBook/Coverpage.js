import React, { forwardRef } from 'react'
import styles from "./Flipbook.module.css"
import { LogoSVG } from '../svgs'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'

const Page = (props, ref) => {
    const isDesktopOrLaptop = useMediaQuery({ minWidth: 1024 })
    return (


        <div className={`w-full`} ref={ref}>
            <div className={`w-full h-full shadow-2xl ${styles.coverPage} text-white`}>
                <div className='w-1/6 h-full relative -left-7'>
                    <Image layout='fill' src={'/svg/Binder.svg'} alt={"Binder"}></Image>
                </div>
                <div className={`h-full flex flex-col justify-end items-end ${styles.bookShape}`} >
                    <div className={`w-full h-12 md:h-16 ${styles.bookPages} mb-2`}>
                        <div className={`${styles.line2} w-full`}></div>
                        <div className={`${styles.line} w-full`}></div>
                        <div className={`${isDesktopOrLaptop?styles.line:styles.line2} w-full`}></div>
                        {isDesktopOrLaptop?<div className={`${styles.line2} w-full`}></div>:null}
                    </div>

                </div>

                <div className={`h-full flex flex-col justify-between w-5/6 ${styles.secondDiv}`}>
                    <div className='top'>

                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='bg-white'>
                            <LogoSVG width={160} />
                        </div>
                        <div className='text-2xl md:text-4xl text-center my-auto lg:text-6xl mt-12 font-vogue '>
                            Legacy of Orientation of NUST
                        </div>

                    </div>


                    <div className={`${styles.remainingPages} w-full h-12 md:h-16 mb-2 flex flex-col`}>
                        <div className={`${styles.line} w-full`}></div>
                        <div className={`${styles.line} w-full`}></div>
                        <div className={`${styles.line} w-full`}></div>
                        {isDesktopOrLaptop?<div className={`${styles.line} w-full`}></div>:null}
                    </div>
                </div>
            </div>
        </div>


    )
}

export default forwardRef(Page)