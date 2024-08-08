import seedrandom from 'seedrandom';
import React, { useEffect, useState, useRef } from 'react';

import { BiSolidCircle } from 'react-icons/bi';
import { IoTriangleSharp, IoStar } from 'react-icons/io5';
import { CgShapeCircle } from 'react-icons/cg';
import { useRouter } from 'next/router';

const Container = () => {
	const router = useRouter();
	const isHome = router.pathname === '/';
	// let scrollY = 0;
	// const [scrollY, setScrollY] = useState(0);
	const [pageHeight, setPageHeight] = useState(0);

	useEffect(() => {
		const handleResize = () => {
			setPageHeight(document.documentElement.scrollHeight);
		};

		// Set initial page height
		setPageHeight(document.documentElement.scrollHeight);

		// Attach event listener to update page height on resize
		window.addEventListener('resize', handleResize);

		// Clean up event listener on component unmount
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		setScrollY(window.scrollY);
	// 	};

	// 	window.addEventListener('scroll', handleScroll);

	// 	return () => {
	// 		window.removeEventListener('scroll', handleScroll);
	// 	};
	// }, []);
	const getDoodle = () => {
		const fill = [
			'text-purple ',
			'text-lapis-lazuli ',
			'text-tyrian-purple ',
			'text-prussian-blue ',
			'text-ultra-red',
		];

		const doodleList = [];
		// for (let i = 0; i < Math.ceil(pageHeight / 20); i++) {
		for (let i = 0; i < 50; i++) {
			const seed = `index-${i}`;
			const rng = seedrandom(seed);

			const size = Math.floor(rng() * (100 - 20 + 1)) + 20;
			const opacity = Math.floor(rng() * (100 - 40 + 1)) + 40;
			const fillColor = fill[Math.floor(rng() * fill.length)];
			// generate random number between 0 and 100
			const top = rng() * 100;
			// const top = rng();
			const left = rng() * 100;
			const iconNumber = rng() * 5;
			const rotate = rng() * 360;

			doodleList.push({
				size,
				fillColor,
				top,
				left,
				opacity,
				rotate,
				iconNumber,
			});
		}

		return doodleList;
	};
	if (isHome) return null;
	else
		return (
			<div
				className='fixed w-screen h-screen'
				style={
					{
						// height: `${pageHeight - 300}px`,
					}
				}>
				<div className='w-full h-full relative overflow-hidden'>
					{getDoodle().map((doodle, index) => {
						// const degree = index + (1 % 2) === 0 ? 'sm' : index + (1 % 3) === 0 ? 'md' : 'lg';
						return (
							<div
								key={index}
								// ref={(el) => (ref.current[index] = el)}
								style={{
									bottom: `${doodle.top - 20}%`,
									right: `${doodle.left}%`,
									width: `${doodle.size}px`,
									// opacity: doodle.opacity / 100,
									rotate: `${doodle.rotate}deg`,
									// animationDuration: degree === 'sm' ? '2s' : degree === 'md' ? '3.5s' : '5s',
								}}
								className={`absolute aspect-1 bottom-20 w-10 z-0 opacity-20 animate-float ${doodle.fillColor}`}>
								<Doodle key={index} index={Math.ceil(doodle.iconNumber)} />
							</div>
						);
					})}
				</div>
			</div>
		);
};

export default Container;

const Doodle = ({ index }) => {
	switch (index) {
		case 1:
			return <IoTriangleSharp className='w-full h-full' />;
		case 2:
			return <IoStar className='w-full h-full' />;
		case 3:
			return <BiSolidCircle className='w-full h-full' />;
		case 4:
			return <CgShapeCircle className='w-full h-full' />;
		default:
			<CgShapeCircle className='w-full h-full' />;
			break;
	}
};
