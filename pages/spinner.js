import Layout from "../components/Layout";
import dynamic from "next/dynamic";
import data from "../util/activities2.js";

const Wheel = dynamic(() => import("../components/Wheel"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Layout title={"Spinner Wheel"}>
        <div
          className={``}
        >
          <div className="">
            {typeof window !== undefined && <Wheel /* data={data} */ />}
          </div>
        </div>
      </Layout>
    </>
  );
}
