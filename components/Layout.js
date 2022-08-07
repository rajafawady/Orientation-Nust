import Head from 'next/head'
import React from 'react'
import Header from './Header/Header'
import MyParticles from './Particles/Particles'
import Socials from './Socials/Socials'
import SplashComponent from './SplashComponent/SplashComponent'


export default function Layout({children}) {
  
  return (
    <>
    
    <Head>
        <title>Orientation 2022</title>
    </Head>
    <Header />
    <div>
    <SplashComponent />
    </div>

    <Socials />

<MyParticles />

    

    </>
  )
}
