import React, { useState } from 'react'
import { LogoSVG } from '../svgs'
import styles from './Splash.module.css'
import ParticlesComponent from "../Particles/Particles";
import Socials from "../Socials/Socials";

export default function SplashComponent() {
    const [click, setClick] = useState(false);

    const handleClick =()=>{
        setClick(!click);
    }
   
    return (
        <>
        <div className="mt-60 md:mt-48 relative z-30">
        <div className=' flex justify-center items-center w-full '>
            <div className={`flex justify-center items-center shadow-2xl shadow-ultra-red rounded-full p-5 ${click?styles.logoSmall :styles.logodiv}`} onClick={handleClick}>
                <LogoSVG className="hover:animate-spin" width={click?"160": "260"}/>
            </div>
        </div>
        </div>
        {!click ? 
        <Socials/>
        :null
        }
        {!click ? 
            <ParticlesComponent />
        :null
        }
        
        </>
    )
}
