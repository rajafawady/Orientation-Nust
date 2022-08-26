import React, {forwardRef } from 'react'
import styles from './Flipbook.module.css'

const Page = (props, ref) => {
    return (
        <div className={`w-6/12 h-96 flex flex-col bg-gray-500 font-serif ${styles.shadowLeft}`} ref={ref} key={props.key}>
            <div className={`w-full h-full flex flex-col ${styles.shadowLeft}`}>
                <div className=' w-full h-1/6 flex flex-col justify-center items-center font-bold text-2xl font-serif'>History</div>
                <div className=' w-full h-5/6 p-5 text-justify text-sm flex flex-col justify-center items-center font-serif'>
                    {props.content}
                </div>
            </div>
        </div>
    )
}

export default forwardRef(Page)

