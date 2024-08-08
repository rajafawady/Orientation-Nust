import { useTheme } from 'next-themes';
import Head from 'next/head';
import React from 'react';
import { useRouter } from 'next/router';

import dynamic from 'next/dynamic';
import Navbar from './Navbar';
import Footer from './Footer';
const FloatingContainer = dynamic(() => import('./FloatingShapes/FloatingContainer'), {
  ssr: false,
});

export default function Layout({ children, title, homePage }) {
  const router = useRouter();
  const isAnthem = router.pathname === '/anthem';

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow w-full flex justify-center">
          <div className={`${!isAnthem && 'max-w-sm sm:container hero-content'} container hero-content z-10`}>
            {children}
          </div>
          {/* <FloatingContainer /> */}
        </main>
        <Footer />
      </div>
    </>
  );
}
