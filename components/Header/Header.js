import React from "react";
import Music from "../Music/Music";
import SwitchTheme from "./SwitchTheme";
import styles from "./Header.module.css";
import { SidebarNav } from "../Sidebar/Sidebar";
export default function Header() {
  return (
    <>
      <SidebarNav />

      <div className='flex w-full md:pl-4 md:pr-4 pt-1 mt-2 items-center'>
        <div className='w-2/3 md:w-3/4'>

        </div>
       
        <div className='w-1/3 md:w-1/4 flex justify-end'>
          <div className='pt-5 mr-14 md:pr-5'>

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
