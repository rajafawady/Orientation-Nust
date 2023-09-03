import Layout from "../components/Layout";
import React from "react";
import Desktopflipbook from "../components/FlipBook/Desktopflipbook";
import ON from "../util/history.json";

const History = ({ coverpage, history, lastpage }) => {
  return (
    <>
      <Layout title={"Legacy"}>
        <div className="overflow-hidden mt-16 md:mt-0 celebration-div">
          <Desktopflipbook
            coverpage={coverpage}
            history={history}
            lastpage={lastpage}
          ></Desktopflipbook>
        </div>
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: ON,
  };
};

export default History;
