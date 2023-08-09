const VideoManager = ({ setShouldPlay }) => {
	return (
		<div className='flex justify-center items-center w-screen h-screen fixed top-0 left-0 z-50 bg-white/50 video-animation'>
			<video autoPlay muted onEnded={() => setShouldPlay(false)} className='w-full h-full '>
				<source src='thingyreal.webm' />
			</video>
		</div>
	);
};

export default VideoManager;
