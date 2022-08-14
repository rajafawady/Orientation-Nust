import React from "react";
import SwitchTheme from "./SwitchTheme";
import { SidebarNav } from "../Sidebar/Sidebar";
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const DynamicMusic = dynamic(() => import("../Music/Music"), {
  suspense: true,
})

export default function Header() {
  return (
    <>
    <div className="header bg-transparent w-full mb-8">
      <SidebarNav />
    
      <div className='flex w-full md:pl-4 md:pr-4 pt-3 items-center'>
        <div className='w-2/3 md:w-3/4'>

        </div>
       
        <div className='w-1/3 md:w-1/4 flex justify-end items-center'>
          <div className=' mr-14 md:pr-5'>

          <Suspense fallback={`Loading...`}>
      <DynamicMusic />
    </Suspense>
          </div>
          <div>
            <SwitchTheme />
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
