// import React, { useEffect } from 'react';
// import Page1 from './Page1';
// import { BsStars, BsStarFill } from 'react-icons/bs';
// import Star from './Star';

// const StarContainer = () => {
// 	const getRandomStars = () => {
// 		const sizes = ['0.02', '0.05', '0.08'];
// 		const colors = ['white', '#899DFC', '#C8D1FC', '#F6AC5E', '#FFF06D'];
// 		const animations = ['pulse', 'none', 'scaleSmall', 'scaleLarge'];

// 		const starArray = [];

// 		for (let i = 0; i < 200; i++) {
// 			const size = sizes[Math.floor(Math.random() * sizes.length)];
// 			const color = colors[Math.floor(Math.random() * colors.length)];
// 			const animation = animations[Math.floor(Math.random() * animations.length)];
// 			const top = Math.random() * 100;
// 			const left = Math.random() * 100;
// 			const rotate = Math.random() * 360;

// 			starArray.push({ size, color, animation, top, left, rotate });
// 		}

// 		return starArray;
// 	};

// 	// const scrollFunc = () => {
// 	// 	if (typeof window == 'undefined') return;
// 	// 	// Transition the gradient
// 	// 	const scroll = window.scrollY;
// 	// 	const height = document.body.offsetHeight;
// 	// 	const width = document.body.offsetWidth;
// 	// 	const gradient = document.querySelector('.bg-gradient-to-b');
// 	// 	const opacity = scroll / height;
// 	// 	gradient.style.opacity = opacity;
// 	// };

// 	const randomArray = getRandomStars();

// 	// useEffect(() => {
// 	// 	if (typeof window !== 'undefined') window.addEventListener('scroll', scrollFunc);
// 	// 	return () => {
// 	// 		if (typeof window !== 'undefined') window.removeEventListener('scroll', scrollFunc);
// 	// 	};
// 	// }, []);

// 	return (
// 		<div
// 			className='w-full h-screen bg-center bg-no-repeat bg-cover absolute top-0 left-0'
// 			style={{
// 				backgroundImage: 'url(background.svg)',
// 				filter: 'hue-rotate(40deg)'
// 			}}>
// 			<div className='w-full h-full relative overflow-hidden'>
// 				{randomArray.map((star, index) => (
// 					<div
// 						key={index}
// 						style={{
// 							bottom: `${star.top}%`,
// 							right: `${star.left}%`,
// 						}}
// 						className={`absolute w-10 h-10 animate-${star.animation} rotate-[40deg] z-0`}>
// 						<Star color={star.color} />
// 					</div>
// 				))}
// 			</div>
// 		</div>
// 	);
// };

// export default StarContainer;
