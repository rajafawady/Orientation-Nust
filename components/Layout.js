import { useTheme } from 'next-themes'
import Head from 'next/head'
import React from 'react'
import { useContext } from 'react'
import { ClickContext } from '../context/GlobalProvider'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const DynamicHeader = dynamic(() => import('./Header/Header'), {
  suspense: true,
})
export default function Layout({ children, title, homePage }) {
  const {click} = useContext(ClickContext);
  const {theme, setTheme} = useTheme()
  return (
    <div className={`${click & homePage ? (theme === 'dark' ? 'dark-content':'main-content') :null }`  }>
      <Head>
        <title>{title}</title>

    </Head>
    <Suspense fallback={`Loading...`}>
      <DynamicHeader />
    </Suspense>
    
    
    {children}
   

    </div>
  );
}
