import React, { useEffect, useRef } from 'react';

const Logo = () => {
	const domeRef = useRef(null);
	let centerCords = { x: 0, y: 0 };
	const followCursor = () => {
		if (typeof window == 'undefined') return;
		const dome = domeRef.current;
		// const x = (centerCords.x - window.event.clientX * 7) / window.innerWidth + '%';
		// const y = (centerCords.y - window.event.clientY * 7) / window.innerHeight + '%';
		const x = ((centerCords.x - window.event.clientX) * 20) / window.innerWidth + 'px';
		const y = ((centerCords.y - window.event.clientY) * 20) / window.innerHeight + 'px';
		// const y = centerCords.y - window.event.clientY + '%';
		console.log({ x, y });
		dome.style.transform = `translate(-${x}, -${y})`;
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
		<div className='h-64 w-64 xl:h-72 xl:w-72 relative shrink-0 bg-white flex items-end justify-center'>
			<img src='Logo Assets/FaC.png' className='h-full w-full absolute ' alt='' />
			<img
				src='Logo Assets/DnS.png'
				className='transition-transform absolute h-9/12 w-9/12'
				alt=''
				ref={domeRef}
			/>
			{/* <img src='Logo Assets/Fire PNG.png' className='h-full w-full absolute' alt='' /> */}
		</div>
	);
};

export default Logo;
