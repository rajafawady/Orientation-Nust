import Layout from '../components/Layout';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Page1 from '../components/Landing/Page1';
import VideoManager from '../components/Landing/VideoManager';
import StarContainer from '../components/Landing/StarContainer';

export default function Home() {
	const [shouldPlay, setShouldPlay] = useState(true);
	// if (shouldPlay) return <VideoManager setShouldPlay={setShouldPlay} />;
	return (
		<Layout title={'Orientation 2023'} homePage={true}>
			<div className='min-h-full'>
				<Page1 />
				<StarContainer />
				<div className='h-screen -mt-10 bg-yellow-300 z-10 relative'>{/* remaining content goes here */}</div>
			</div>
		</Layout>
	);
}
