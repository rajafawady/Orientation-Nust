import Layout from '../components/Layout';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Page1 from '../components/Landing/Page1';
import VideoManager from '../components/Landing/VideoManager';
import StarContainer from '../components/Landing/StarContainer';
import Activites from '../components/Activities';

export default function Home() {
	const [shouldPlay, setShouldPlay] = useState(true);
	// if (shouldPlay) return <VideoManager setShouldPlay={setShouldPlay} />;
	return (
		<Layout title={'Orientation 2023'} homePage={true}>
			{shouldPlay && <VideoManager setShouldPlay={setShouldPlay} />}
			<div className='min-h-full'>
				<Page1 />
				<StarContainer />
				<div className='h-screen flex flex-col items-center justify-center -mt-10 w-full z-10 relative'>
					<Activites />
				</div>
			</div>
		</Layout>
	);
}
