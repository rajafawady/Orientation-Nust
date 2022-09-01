import React, {forwardRef } from 'react'
import styles from './Flipbook.module.css'
import { useContext } from 'react'
import { useTheme } from 'next-themes'
import { ClickContext } from '../../context/GlobalProvider'

const Page = (props, ref) => {
    const { click } = useContext(ClickContext);
    const { theme, setTheme } = useTheme()
    return (
        <div className={`w-6/12 h-96 flex flex-col font-serif ${theme==="dark"?styles.shadowLeftDark:styles.shadowLeft} ${theme==="dark"? "text-white bg-black" : "text-black bg-white"}`} ref={ref} key={props.key}>
            <div className={`w-full h-full flex flex-col ${theme==="dark"?styles.shadowLeftDark:styles.shadowLeft}`}>
                <div className=' w-full h-1/6 flex flex-col justify-center items-center font-bold text-2xl md:text-4xl font-serif'>History</div>
                <div className=' w-full h-5/6 p-5 text-justify text-sm md:text-base lg:text-2xl px-10 flex flex-col justify-center items-center font-serif'>
                    {props.content}
                </div>
            </div>
        </div>
    )
}

export default forwardRef(Page)
