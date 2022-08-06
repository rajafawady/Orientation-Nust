import React from "react";
import Music from "../Music/Music";
import SwitchTheme from "./SwitchTheme";
import styles from "./Header.module.css";
import { SidebarNav } from "../Sidebar/Sidebar";
export default function Header() {
  return (
    <>
      <SidebarNav />
      <div className="flex w-full items-center">
        <div className="w-2/3 md:w-3/4"></div>
        <div className="w-1/3 md:w-1/4 flex pt-2 mt-2 mr-4 md:mr-8 justify-end">
          <div className="pt-10 mr-14 md:pr-5">
            <Music />
          </div>
          <div>
            <SwitchTheme />
          </div>
        </div>
      </div>
    </>
  );
}
