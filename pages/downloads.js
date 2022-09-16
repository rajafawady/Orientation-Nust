import React, { useState } from "react";
import Layout from "../components/Layout";
import BatchImage from "../components/BatchImage";

const Downloads = () => {
  return (
    <Layout title={"Downloads"}>
      <div className="flex flex-col items-center mt-20">
        <div className="font-vogue text-5xl sm:text-7xl font-bold dark:text-white text-tyrian-purple mb-10">
          Downloads
        </div>
        <div className="flex w-full  flex-wrap justify-evenly">
          <BatchImage imgName='day-d' dlName='day-photo-1' btnText='Day'/>
          <BatchImage imgName='day-b' dlName='day-photo-2' btnText='Day Drone'/>
          <BatchImage imgName='night-b' dlName='night-photo-1' btnText='Night'/>
          <BatchImage imgName='night-d1' dlName='night-photo-2' btnText='Night Drone'/>
          <BatchImage imgName='night-d2' dlName='night-photo-3' btnText='Night Drone'/>
        </div>
      </div>
    </Layout>
  );
};

export default Downloads;
