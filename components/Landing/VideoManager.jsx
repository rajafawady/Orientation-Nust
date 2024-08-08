import { useEffect } from "react";

const VideoManager = ({ setShouldPlay }) => {

	useEffect(() => {
		setTimeout(() => {
			setShouldPlay(false)
		}, 8000);
	})

	return (
		<div className='flex justify-center items-center w-screen h-screen fixed top-0 left-0 z-[100] bg-white/50 video-animation'>
			{/* <source src='thingyreal.webm' /> */}
			<video autoPlay muted onEnded={() => setShouldPlay(false)} className='hidden sm:block  w-full h-full object-cover '>
				<source src='animation_logo_desktop.mp4' />
			</video>
			<video autoPlay muted onEnded={() => setShouldPlay(false)} className='sm:hidden block w-full h-full object-cover'>
				<source src='animation_logo_mobile.mp4' />
			</video>
		</div>
	);
};

export default VideoManager;
