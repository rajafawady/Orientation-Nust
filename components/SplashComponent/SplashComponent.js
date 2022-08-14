import React, { useState } from "react";
import { LogoSVG } from "../svgs";
import styles from "./Splash.module.css";
import ParticlesComponent from "../Particles/Particles";
import Socials from "../Socials/Socials";
import Main from "./Main";
import { useContext } from "react";
import { ClickContext } from "../../context/GlobalProvider";
export default function SplashComponent() {
  const { click, setClick } = useContext(ClickContext);

  return (
    <>
      <div className="content-div absolute z-3  w-full">
        <div className={` flex justify-center items-center w-full`}>
          <div
            className={`flex justify-center cursor-pointer items-center shadow-2xl shadow-ultra-red rounded-full p-5 ${
              click ? styles.logoSmall : styles.logodiv
            }`}
            onClick={setClick}
          >
            <LogoSVG
              className={`animate-expand ${styles.logoSVG}`}
              width={click ? "160" : "260"}
            />
          </div>
        </div>
      </div>
      {!click ? <Socials /> : null}
      {!click ? (
        <div className="hidden md:block">
          <ParticlesComponent />
        </div>
      ) : null}

      {click ? (
        <div>
          <Main />
        </div>
      ) : null}
    </>
  );
}
