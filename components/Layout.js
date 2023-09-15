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
			{/* <div className={`${click & homePage ? (theme === 'dark' ? 'dark-content' : 'main-content') : null}`}> */}
			<div className='min-h-full w-full'>
				<Navbar />
				<div className='w-full flex justify-center '>
					<div className={`${!isAnthem && 'max-w-xs sm:container hero-content'} container hero-content z-10`}>
						{children}
					</div>
					{/* <FloatingContainer /> */}
				</div>
			</div>
			<Footer />
		</>
	);
}
