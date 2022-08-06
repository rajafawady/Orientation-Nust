import Head from "next/head";
import React from "react";
import Header from "./Header/Header";
import MyParticles from "./Particles/Particles";
import SplashComponent from "./SplashComponent/SplashComponent";

export default function Layout({ children, isIndex }) {
  return (
    <>
      <Head>
        <title>Orientation 2022</title>
      </Head>

      <Header />
      {children}

      {isIndex && <MyParticles />}
    </>
  );
}
