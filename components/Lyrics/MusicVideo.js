import React, { useEffect, useRef } from 'react';

const MusicVideo = ({ playing, setPlaying }) => {
	const videoRef = useRef(null);
	useEffect(() => {
		if (playing) {
			videoRef.current.play();
		} else {
			videoRef.current.pause();
		}
	}, [playing]);
	return (
		<div className='relative h-full w-full flex flex-col gap-6 z-20'>
			<video
				ref={videoRef}
				src='https://res.cloudinary.com/dm7rm8goc/video/upload/v1694731843/Media/anthem.mp4'
				autoPlay={false}
				className={`transition-all rounded-md m-2 ${playing ? '' : 'blur-sm grayscale-[30%]'}`}
				controls={false}
			/>
		</div>
	);
};

export default MusicVideo;
