import React from 'react'
import styles from './Splash.module.css'

export default function SplashComponent() {
    return (
        <div className=' flex justify-center items-center w-full '>
            <div className={`flex justify-center items-center shadow-2xl w-48 h-48 md:w-72 md:h-72 shadow-ultra-red rounded-full p-5 ${styles.logodiv}`}>
                Hello
            </div>
        </div>
    )
}
