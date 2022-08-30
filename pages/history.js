import Layout from "../components/Layout";
import React from "react";
import Desktopflipbook from "../components/FlipBook/Desktopflipbook";
import Mobileflipbook from "../components/FlipBook/Mobileflipbook";
import ON from '../util/history.json'
import { useMediaQuery } from "react-responsive";

const History = ({ coverpage, history, lastpage }) => {
        const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1024px)'})
      //  const content = isDesktopOrLaptop ?  : 
        return (
                <>
                        <Layout>
                        <div className="overflow-hidden mt-16 md:mt-0 celebration-div">
                                <Desktopflipbook coverpage={coverpage} history={history} lastpage={lastpage}></Desktopflipbook>
                        </div>
                        
                        </Layout>
                        
                </>
        )
}

export const getStaticProps = async () => {
        return {
                props: ON
        }
}

export default History