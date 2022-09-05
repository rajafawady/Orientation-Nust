import React, { useEffect, useRef,useState } from 'react'
import styles from './Music.module.css'
import music from '../../assets/audio/NMX ON.mp3'
import { useContext } from 'react';
import { ClickContext } from '../../context/GlobalProvider'
import { useRouter } from 'next/router';

export default function Music() {
  const router = useRouter();
  const {click} = useContext(ClickContext)
  const [isPlaying, setIsPlaying] = useState(false);
  const musicRef = useRef(null);
  
  const handleMusic = () => {
    setIsPlaying(!isPlaying);

    if(!isPlaying){
      musicRef.current.play();
  }else{
      musicRef.current.pause();
  }
  }
  
  return (
    <>
    <div className='flex justify-evenly'>
    <div className={`w-12 rotate-90 ${!click? "text-tyrian-purple": "text-white"} dark:text-pale-pink ${styles.credits}`}>
      Composed By NMS
    </div>
    <div className={styles.music} onClick={handleMusic} >
      <span className={`bg-tyrian-purple dark:bg-ultra-red`} style={{ animationPlayState: isPlaying ? "running" : "paused" }}></span>
      <span className={`${click & (router.asPath === "/" || router.asPath==='/sports_fest') ?  "bg-white" :"bg-ultra-red"} dark:bg-pale-pink`} style={{ animationPlayState: isPlaying ? "running" : "paused" }}></span>
      <span className={`bg-tyrian-purple dark:bg-ultra-red`}  style={{ animationPlayState: isPlaying ? "running" : "paused" }}></span>
      <span className={`${click & router.asPath === "/" ?  "bg-white" :"bg-ultra-red"} dark:bg-pale-pink`} style={{ animationPlayState: isPlaying ? "running" : "paused" }}></span>
      <span className={`bg-tyrian-purple dark:bg-ultra-red ${styles.hideOnSmallScreen}`}  style={{ animationPlayState: isPlaying ? "running" : "paused" }}></span>
      <audio src={music} ref={musicRef}  loop />
    </div>
    </div>
    </>
  )
}
