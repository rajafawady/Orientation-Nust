import { useTheme } from 'next-themes';
import Head from 'next/head';
import React from 'react';
import { useContext } from 'react';
import { ClickContext } from '../context/GlobalProvider';

import dynamic from 'next/dynamic';
import Navbar from './Navbar';

const DynamicHeader = dynamic(() => import('./Header/Header'), {
	ssr: false,
});
export default function Layout({ children, title, homePage }) {
	const { click } = useContext(ClickContext);
	const { theme, setTheme } = useTheme();
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<div className={`${homePage ? (theme === 'dark' ? 'dark-content' : 'main-content') : null}`}>
				{/* <div className={`${click & homePage ? (theme === 'dark' ? 'dark-content' : 'main-content') : null}`}> */}
				<div className='bg-black'>
					<Navbar global={true} />
					{/* <DynamicHeader homepage={homePage}/> */}
					<div className=''>{children}</div>
				</div>
			</div>
		</>
	);
}
