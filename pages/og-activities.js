import Layout from "../components/Layout";
import dynamic from "next/dynamic";

const Wheel = dynamic(() => import("../components/Wheel"), {
  ssr: false,
});
export default function spinner() {
  return (
    <>
      <Layout title={"Spinner Wheel"}>
        <div className={`xl:px-40 lg:px-20 md:px-12 sm:px-8 px-2 my-20`}>
          <div
            className={`p-1 bg-gradient-to-tr from-tyrian-purple to-prussian-blue
            dark:from-pale-pink dark:to-tyrian-purple`}
          >
            <div
              className={`pt-10 box-decoration-slice bg-white dark:bg-[#121212]`}
            >
              {typeof window !== undefined && <Wheel />}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
