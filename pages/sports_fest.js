import React, { useState } from "react";
import Layout from "../components/Layout";
import ParticipantTab from "../components/Sports/ParticipantTab";
import universityFixtures from "../util/fixtures_uni";
import ogsFixtures from "../util/fixtures_ogs";

const Sports_Fest = () => {
  // true if ogs are selected
  const [selectedParticipant, setSelectedParticipant] = useState(false);
  return (
    <Layout title={"Sports Fest"} >
      <div className="flex flex-col dark:bg-[#181818]">
        <div className="flex md:pl-16 pt-24 font-poppins pb-8 bg-[#380f26] dark:bg-prussian-blue text-white dark:text-white text-4xl md:text-4xl mb-6">
          Sports Fest 
        </div>

        <div className="flex flex-col">
          <div className="flex justify-center text-2xl md:text-4xl font-poppins">
            Matches
          </div>
          <div className="flex flex-row justify-evenly mt-6 font-bold text-lg md:text-2xl">
          <button
              className={`px-4 py-2 rounded-t-xl  
              ${selectedParticipant ? "" : "text-tyrian-purple border-b-tyrian-purple dark:text-lapis-lazuli dark:border-b-lapis-lazuli border-b-2 "}`}
              onClick={() => {
                setSelectedParticipant(false);
              }}
            >
              Inter-University
            </button>
            <button
              className={`px-4 py-2 rounded-t-xl  
              ${selectedParticipant ? "text-tyrian-purple dark:text-lapis-lazuli dark:border-b-lapis-lazuli border-b-tyrian-purple border-b-2 " : ""}`}
              onClick={() => {
                setSelectedParticipant(true);
              }}
            >
              OC &amp; Freshies
            </button>

           
          </div>
        </div>

        <div className="">
          {selectedParticipant ? (
            <ParticipantTab type={true} fixtures={ogsFixtures} />
          ) : (
            <ParticipantTab fixtures={universityFixtures} />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Sports_Fest;
