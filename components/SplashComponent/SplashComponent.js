import React from 'react'
import { LogoSVG } from '../svgs'
import styles from './Splash.module.css'

export default function SplashComponent() {

    function handleClick(){
        alert()
    }
    return (
        <div className=' flex justify-center items-center w-full '>
            <div className={`flex justify-center items-center shadow-2xl shadow-ultra-red rounded-full p-5 ${styles.logodiv}`} onClick={handleClick}>
                <LogoSVG className="hover:animate-spin"/>
            </div>
        </div>
    )
}
