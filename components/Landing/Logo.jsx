import React, { useEffect, useRef } from 'react';

const Logo = () => {
	const domeRef = useRef(null);
	let centerCords = { x: 0, y: 0 };
	const followCursor = () => {
		if (typeof window == 'undefined') return;
		const dome = domeRef.current;
		const x = (centerCords.x - window.event.clientX * 7) / window.innerWidth + '%';
		const y = (centerCords.y - window.event.clientY * 7) / window.innerHeight + '%';
		console.log({ x, y });
		dome.style.transform = `translate(${x}, ${y})`;
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
		<div className='h-72 w-72 relative bg-white flex items-center justify-center'>
			<img src='Logo Assets/Crescent PNG.png' className='h-full w-full absolute ' alt='' />
			<img
				src='Logo Assets/DOME PNG.png'
				className='transition-transform absolute w-56 h-56'
				alt=''
				ref={domeRef}
			/>
			<img src='Logo Assets/Fire PNG.png' className='h-full w-full absolute' alt='' />
		</div>
	);
};

export default Logo;
