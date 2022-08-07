import React from 'react'
import styles from './Socials.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faInstagramSquare, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { useTheme } from 'next-themes'


export default function Socials() {
  const {theme, setTheme} = useTheme();

  return (
    <div className='flex justify-end w-full'>
      <div className={`flex justify-between w-48 p-5 ${styles.social}`}>
      <FontAwesomeIcon icon={faFacebook} size="2x" color={theme === 'dark'? 'white': 'darkBlue'} />
      <FontAwesomeIcon icon={faTwitter} size="2x" color='#00ACEE'/>
      <FontAwesomeIcon icon={faInstagramSquare} size="2x" color={theme === 'dark'? '#E1306C': '#C13584'}/>
      </div>
    </div>
  )
}
