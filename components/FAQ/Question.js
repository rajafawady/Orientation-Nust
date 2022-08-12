import styles from "./faq.module.css";
import {BsChevronLeft} from "react-icons/bs";
import {useTheme} from "next-themes";
import {motion} from "framer-motion";

const Question = ({question, onClick, isSelected}) => {

    const {theme} = useTheme();

    return (
        <motion.div
            transition={{layout: {type: "spring", duration: 1}}}
            layout
            className={`${styles.accordionItem} border border-gray`} style={{marginBottom: '-1px'}}
             onClick={onClick}>
            <motion.h2 layout="position" className="mb-0 flex py-4 px-5 cursor-pointer">
                <button
                    className={`font-semibold flex items-center w-full text-left rounded-none transition focus:outline-none dark:text-white ${theme === 'dark' ? 'text-white' : isSelected ? 'text-tyrian-purple' : 'text-black'}`}>
                    {question.question}
                </button>
                <div className={`transition duration-300 ease-out ${isSelected ? 'rotate-90' : '-rotate-90'}`}>
                    <BsChevronLeft size={26} color={theme === 'dark' ? '#ffffff' : isSelected ? '#720240' : '#121212'}/>
                </div>
            </motion.h2>
            {isSelected && (
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className='border-t border-gray h-auto'>
                    <div
                        className='py-4 px-5 block opacity-100 h-auto'>
                        {question.answer}
                    </div>
                </motion.div>
            )}
        </motion.div>
    )
}

export default Question;