import Wheel from "../components/Wheel";
import Layout from "../components/Layout";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import data from "../util/activities2.js";

const Wheel2 = dynamic(() => import("../components/Wheel2"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Layout title={"Orientation 2022"}>
        <div
          className={``}
        >
          {/* <div><Wheel /></div> */}
          <div className="">
            {typeof window !== undefined && <Wheel2 /* data={data} */ />}
          </div>
        </div>
      </Layout>
    </>
  );
}
