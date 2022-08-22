import Layout from "../components/Layout";
import { AnimatePresence } from "framer-motion";
import SplashComponent from "../components/SplashComponent/SplashComponent";

export default function Home() {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Layout title={"Orientation 2022"} homePage={true}>
          <SplashComponent />
          <div className="">
          </div>
        </Layout>
      </AnimatePresence>
    </>
  );
}
