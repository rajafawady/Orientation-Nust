import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import lyrics from '../../util/lyrics';

const Lyrics = ({ playing, setPlaying }) => {
	const [current, setCurrent] = useState(0);
	useEffect(() => {
		let interval;
		if (playing && current < lyrics.length - 1) {
			interval = setInterval(
				() => {
					const currentTime = Date.now();
					if (lyrics[current + 1]?.time * 1000 <= currentTime) {
						setCurrent(current + 1);
					}
				},
				current === 0 ? lyrics[current].time * 1000 : (lyrics[current + 1].time - lyrics[current].time) * 1000
			);
		}
		return () => clearInterval(interval);
	}, [current, playing]);

	if (!lyrics) return null;
	return (
		<AnimatePresence initial={false} exitBeforeEnter={true}>
			<div
				onClick={() => setPlaying(!playing)}
				className='z-10 flex flex-col items-center justify-center w-1/3 gap-10 p-10 mx-auto cursor-default'
				// className='absolute z-10 flex flex-col items-center justify-center w-full h-full gap-10 p-10 mx-auto cursor-default'
				// className='relative z-10 flex flex-col items-center justify-center w-full h-full gap-10 p-10 mx-auto overflow-hidden'
				style={{ scrollBehavior: 'smooth' }}>
				{lyrics.map((lyric, index) => (
					<motion.p
						key={index}
						className={`z-0 md:z-50 font-sans text-xl lg:text-2xl xl:text-4xl font-bold text-center absolute text-black [text-shadow:_2px_2px_0_rgb(255_255_255_/_40%)]`}
						initial={{ opacity: 50, scale: 0.5, y: 100 }}
						animate={getLyricsAnimation(current, index)}
						exit={{ opacity: 50, scale: 0.5, y: -100 }}>
						{lyric?.lyric}
					</motion.p>
				))}
			</div>
		</AnimatePresence>
	);
};

export default Lyrics;

const getLyricsAnimation = (current, index) => {
	if (current === index)
		return {
			opacity: 1,
			scale: 1,
			y: 0,
			transition: {
				duration: 0.3,
			},
		};
	else if (current - index === 1)
		return {
			opacity: 0.5,
			scale: 0.85,
			y: -100,
			transition: {
				duration: 0.3,
			},
		};
	else if (index - current === 1) {
		return {
			opacity: 0.5,
			scale: 0.85,
			y: 100,
			transition: {
				duration: 0.3,
			},
		};
	} else
		return {
			opacity: 0,
			scale: 0,
			y: 0,
			z: 0,
			transition: {
				duration: 0.3,
			},
		};
};
