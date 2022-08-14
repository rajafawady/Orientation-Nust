import Categories from "../components/FAQ/Categories";
import faqs from "../util/faqs.json";
import {useState} from "react";
import QuestionsList from "../components/FAQ/QuestionsList";
import Layout from "../components/Layout";

const FAQ = ({faqs}) => {

    const [selected, setSelected] = useState(faqs[0]);

    const handleClick = (name) => {
        setSelected(faqs.find(faq => faq.name === name));
    }

    return (
        <Layout title={"FAQs"}>
            <div className='mt-24 px-8'>
                <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center'>
                    A <span className='text-tyrian-purple'>Few Things</span> Students<br/>Ask About <span
                    className='text-tyrian-purple'>Orientation</span>
                </h1>
                <p className='text-xl font-normal text-center mt-4 opacity-70'>If you need any other help or have a
                    question, please reach out to us.</p>
            </div>

            <div className='mt-24 grid mx:0 lg:mx-48 faq-grid px-8'>
                <Categories categories={faqs.map(faq => faq.name)} handleClick={handleClick} selected={selected.name}/>
                <QuestionsList name={selected.name} questions={selected.questions}/>
            </div>
        </Layout>
    )
}

export const getStaticProps = async () => {
    return {
        props: {
            faqs
        }
    }
}

export default FAQ;