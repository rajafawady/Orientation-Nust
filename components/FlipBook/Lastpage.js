import React, { forwardRef } from 'react'
import Image from 'next/image'
import styles from './Flipbook.module.css'

const Page = ({lastpage}, ref) => {
    return (
        <div className={`w-full h-full relative bg-tyrian-purple shadow-2xl font-serif ${styles.lastPage} text-white`} ref={ref}>
            <div className= {`${styles.lastPageDiv2} h-full flex flex-col`}>
                <div className="w-full h-5/6 m-auto flex flex-col justify-center items-center">
                    <div className={`w-2/4 h-2/4 border-2 relative ${styles.imageDiv} bg-white`}>
                        <Image layout='fill' src={lastpage.image} className="object-cover" alt='Here is Image'></Image>
                    </div>
                    <div className='w-full h-1/4 text-2xl md:text-4xl text-center my-auto lg:text-6xl mt-10 font-vogue'>
                        Legacy Continues
                    </div>
                </div>
            </div>
            <div className={`w-1/6 h-full absolute top-0 -right-10`}>
                <Image layout='fill' src={'/svg/Binder.svg'} alt={"Binder"} className={"rotate-180"}></Image>
            </div>
        </div>
    )
}

export default forwardRef(Page)