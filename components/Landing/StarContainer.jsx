import React from 'react';
import Page1 from './Page1';
import { BsStars, BsStarFill } from 'react-icons/bs';
import Star from './Star';

const StarContainer = () => {
	const getRandomStars = () => {
		const sizes = ['0.02', '0.05', '0.08'];
		const colors = ['white', '#899DFC', '#C8D1FC', '#F6AC5E', '#FFF06D'];
		const animations = ['pulse', 'none', 'scaleSmall', 'scaleLarge'];

		const starArray = [];

		for (let i = 0; i < 200; i++) {
			const size = sizes[Math.floor(Math.random() * sizes.length)];
			const color = colors[Math.floor(Math.random() * colors.length)];
			const animation = animations[Math.floor(Math.random() * animations.length)];
			const top = Math.random() * 100;
			const left = Math.random() * 100;
			const rotate = Math.random() * 360;

			starArray.push({ size, color, animation, top, left, rotate });
		}

		return starArray;
	};

	const randomArray = getRandomStars();

	return (
		<div
			className='w-screen h-screen bg-gradient-to-b from-[#42008C]  via-[#240046] to-[#fff] absolute top-0 left-0'
			// className='w-screen h-screen absolute top-0 left-0'
		>
			<div className='w-full h-full relative overflow-hidden'>
				{randomArray.map((star, index) => (
					<div
						key={index}
						style={{
							bottom: `${star.top}%`,
							right: `${star.left}%`,
						}}
						className={`absolute w-10 h-10 animate-${star.animation} rotate-[40deg] z-0`}>
						<Star color={star.color} />
					</div>
				))}
			</div>
		</div>
	);
};

export default StarContainer;
