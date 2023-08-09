import React, { useEffect, useRef } from 'react';

const Logo = () => {
	const domeRef = useRef(null);
	let centerCords = { x: 0, y: 0 };
	const followCursor = () => {
		if (typeof window == 'undefined') return;
		const dome = domeRef.current;
		const xDist = (centerCords.x - window.event.clientX) / 200;
		const yDist = (centerCords.y - window.event.clientY) / 200;
		const x = 50 - xDist + '%';
		const y = 50 - yDist + '%';
		dome.style.left = x;
		dome.style.top = y;
	};
	useEffect(() => {
		if (typeof window !== 'undefined') {
			centerCords = {
				x: window.innerWidth / 2,
				y: window.innerHeight / 2,
			};
			window.addEventListener('mousemove', followCursor);
		}
		return () => {
			if (typeof window !== 'undefined') {
				window.removeEventListener('mousemove', followCursor);
			}
		};
	}, []);

	return (
		<div className='h-64 w-64 xl:h-72 xl:w-72 relative shrink-0 flex items-end justify-center'>
			<img src='Logo Assets/CnF Outline.png' className='h-full w-full absolute ' alt='' />
			<img
				src='Logo Assets/DnS Outline.png'
				className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 h-9/12 w-9/12'
				alt=''
				ref={domeRef}
			/>
			{/* <img src='Logo Assets/Fire PNG.png' className='h-full w-full absolute' alt='' /> */}
		</div>
	);
};

export default Logo;
