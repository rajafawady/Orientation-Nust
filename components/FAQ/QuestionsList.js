import Question from "./Question";
import {useState} from "react";

const QuestionsList = ({questions, name}) => {

    const [selected, setSelected] = useState(`${name}-0`);

    const handleClick = (index) => {
        setSelected(prev => {
            if (prev === `${name}-${index}`) {
                return null;
            } else {
                return `${name}-${index}`;
            }
        });
    }

    return (
        <div className='mx-0 xl:mx-12' style={{marginTop: `${(questions.length + 2) * 2}px`}}>
            {questions.map((question, index) => (
                <Question key={index} question={question} isSelected={selected === `${name}-${index}`}
                          onClick={() => handleClick(index)}/>
            ))}
        </div>
    )
}

export default QuestionsList;