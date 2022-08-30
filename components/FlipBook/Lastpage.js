import React, { forwardRef } from 'react'
import Image from 'next/image'
import styles from './Flipbook.module.css'

const Page = ({lastpage}, ref) => {
    return (
        <div className={`w-6/12 h-96 flex flex-col bg-tyrian-purple shadow-2xl font-serif ${styles.lastPage} text-white`} ref={ref}>
            <div className= {`w-full h-full flex flex-col ${styles.lastPage}`}>
                <div className="w-full h-5/6 m-auto flex flex-col justify-center items-center">
                    <div className={`w-2/4 h-2/4 border-2 relative ${styles.imageDiv} bg-white`}>
                        <Image layout='fill' src={lastpage.image} className="object-cover" alt='Here is Image'></Image>
                    </div>
                    <div className='w-full h-1/4 flex flex-col justify-center items-center font-serif font-bold text-5xl my-2'>
                        Legacy Continues
                    </div>
                </div>
            </div>
        </div>
    )
}

export default forwardRef(Page)
