import { useTheme } from 'next-themes';
import Head from 'next/head';
import React from 'react';
import { useContext } from 'react';
import { ClickContext } from '../context/GlobalProvider';

import dynamic from 'next/dynamic';
import Navbar from './Navbar';

// const DynamicHeader = dynamic(() => import('./Header/Header'), {
// 	ssr: false,
// });

export default function Layout({ children, title, homePage }) {
	const { click } = useContext(ClickContext);
	const { theme, setTheme } = useTheme();
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			{/* <div className={`${click & homePage ? (theme === 'dark' ? 'dark-content' : 'main-content') : null}`}> */}
			<div
				className='min-h-full'
				// className='min-h-full bg-gradient-to-b to-[#040404] from-[#D5D9E4]'
				// style={{
				// 	background:
				// 		'linear-gradient (rgb(4, 4, 4) 0%, 64.7264%, rgb(105, 117, 143) 76.3679%, 88.1839%, rgb(213, 217, 228) 100%)',
				// }}
			>
				<Navbar />
				<div className='w-full flex justify-center'>
					<div className='max-w-xs sm:container'>{children}</div>
				</div>
			</div>
		</>
	);
}
