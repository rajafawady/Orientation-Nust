import React from "react";
import Layout from "../components/Layout";
import CardList from "../components/EC/CardList";
import CarouselCntr from "../components/OC/CarouselCntr";

const team = () => {
  return (
    <>
      <div className="bg-gradient-to-bl dark:bg-gradient-to-tr from-lapis-lazuli to-pale-pink dark:from-prussian-blue">
        <Layout>
          {/* <img src="/svg/blue-svg/1.svg" width={200} className='fixed left-32 top-96' /> */}
          <CardList />
          <CarouselCntr />
        </Layout>
      </div>
    </>
  );
};

export default team;
