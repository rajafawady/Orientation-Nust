import Layout from "../components/Layout";

import SplashComponent from "../components/SplashComponent/SplashComponent";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Home() {

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Layout title={"Orientation 2022"} homePage={true}>
         
            <SplashComponent />
          
        </Layout>
      </AnimatePresence>
    </>
  );
}
