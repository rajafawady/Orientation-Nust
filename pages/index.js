import Layout from "../components/Layout";

import SplashComponent from "../components/SplashComponent/SplashComponent";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [click, setClick] = useState(false);

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Layout isIndex={true}>
         
            <SplashComponent />
          
        </Layout>
      </AnimatePresence>
    </>
  );
}
