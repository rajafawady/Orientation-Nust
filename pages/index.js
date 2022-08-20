import Layout from "../components/Layout";
import { AnimatePresence } from "framer-motion";
import SplashComponent from "../components/SplashComponent/SplashComponent";
import Wheel from "../components/Wheel";

export default function Home() {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Layout title={"Orientation 2022"} homePage={true}>
          <SplashComponent />
          <div className="">
            {/* <Wheel /> */}
          </div>
        </Layout>
      </AnimatePresence>
    </>
  );
}
