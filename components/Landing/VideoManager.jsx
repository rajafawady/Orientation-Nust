const VideoManager = ({ setShouldPlay }) => {
	return (
		<video
			autoPlay
			muted
			onEnded={() => setShouldPlay(false)}
			className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-scren w-screen bg-white'>
			<source src='THINGY.mp4' />
		</video>
	);
};

export default VideoManager;
