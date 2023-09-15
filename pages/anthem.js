'use client';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import Layout from '../components/Layout';
import Lyrics from '../components/Lyrics/Lyrics';
// import NavCopy from '../components/Navbar';
import logo from '/public/logo12345.png';
import onLogo from '/public/logo.png';
import Image from 'next/image';

const MusicVideo = dynamic(() => import('../components/Lyrics/MusicVideo'), {
	loading: () => <p>Loading...</p>,
	ssr: false,
});
export default function Music() {
	const [playing, setPlaying] = useState(false);
	const credits = {
		vocals: [
			'Fraz Waseem',
			'Mirza Sheece Temuri',
			'Eman Azam',
			'Fahad Azeem',
			'Noah Shami',
			'Syed Qasim',
			'Muhammad Ammar Amer',
			'Lubib Asim',
			'Sami Ur Rehman',
		],
		'electric guitars': ['Muhammad Ali Shahbaz'],
		'Bass and Drums': ['Raja Asr Abbas'],
		'Mixing and Mastering': ['Zaid Bhatti'],
		Lyrics: ['Eman Azam', 'Syed Qasim', 'Muhammad Ammar Amer'],
		Composition: ['Mirza Sheece Temuri', 'Muhammad Ali Shahbaz', 'Eman Azam', 'Muhammad Ammar Amer'],
		'Special Thanks': ['Ibrahim Abbas', 'Shahmir Zahid', 'Salman Nasir'],
		Actors: ['Saman Malik', 'Aleena Zara Malik', 'Aaizah Ali'],
		Logistics: ['Aleena Zara Malik', 'Saman Malik'],

		Outro: ['Zaid Bhatti'],
	};

	// const lyricsHandler = async () => {
	//   for (let i = 0; i < lyrics.length; i++) {
	//     if (lyricsContainerRef.current) {
	//       lyricsContainerRef.current.scrollTop =
	//         lyricsContainerRef.current.scrollHeight;
	//     }
	//     await new Promise((resolve) =>
	//       setTimeout(
	//         resolve,
	//         i === 0 ? lyrics[i].time : lyrics[i].time - lyrics[i - 1].time
	//       )
	//     );
	//     setCurrentLyrics((prev) => [...prev, lyrics[i].lyric]);
	//   }
	// };

	// useEffect(() => {
	//   if (lyricsContainerRef.current) {
	//     lyricsContainerRef.current.scrollTop =
	//       lyricsContainerRef.current.scrollHeight;
	//   }
	// }, [currentLyrics]);

	return (
		<Layout title={'Orientation Song'}>
			{/* <NavCopy identifier={true} /> */}
			<div className='flex flex-col w-screen snap-y snap-mandatory'>
				<div className='text-center my-4'>
					<h1 className='font-black font-aspectRange text-5xl leading-loose'>Ao Chalo</h1>
					{/* <h3 className='font-semibold font-sans text-xl text-center'>~ A NUST Music Society Production</h3> */}
				</div>
				<div className='w-full flex flex-col md:flex-row justify-around shadow-xl rounded-md relative'>
					{/* <div className='w-full flex flex-col justify-around border-4 border-red-600 shadow rounded-md relative'> */}
					{/* <div className='h-[calc(100vh-7rem)] w-full flex flex-col justify-around shadow rounded-md relative'> */}
					<div className='w-full md:w-2/3 h-full' onClick={() => setPlaying(!playing)}>
						<MusicVideo playing={playing} setPlaying={setPlaying} />
					</div>
					{<Lyrics playing={playing} setPlaying={setPlaying} />}
				</div>
				{/* <NavCopy identifier={false} /> */}
				<div className='flex flex-col w-full h-full lg:flex-row bg-white z-20'>
					<div className='w-full p-10 '>
						<div className='flex-col flex justify-center items-center w-full'>
							<h2 className='font-black font-aspectRange text-2xl py-4 leading-loose underline'>
								Concept
							</h2>
							<h4 className='w-full text-justify'>
								The "ON'23 Anthem" is a song that inspires people to embrace the challenges of the year
								2023 with optimism, unity, and resilience, reminding them that the journey itself is
								worth celebrating, while also capturing the essence of hope, determination, and the
								journey ahead. It has divided their journey into 4 parts: The verse is a description of
								the night before the travel that is anxiety ridden. The bridge is a reminiscent of the
								past and how the trajectory is changing. The chorus is a promise of determination and
								leads into Verse 2 which explains the excitement of the journey from their homes to NUST
								gates itself. In the second bridge they come closer to their destination. And the final
								and second chorus is the ON team welcoming them, celebrating their arrival, and
								comforting them to trust us with their journey ahead.
							</h4>
							<h2 className='font-black font-aspectRange text-2xl py-4 leading-loose underline'>
								Credits
							</h2>
							<div className='lg:grid-cols-2 grid-cols-1 grid gap-10 flex-row mt-8'>
								<div className='shadow-2xl px-10 md:px-4 pb-4'>
									<div className='flex md:flex-row flex-col justify-around'>
										{/* <div className='flex flex-col justify-evenly mb-6 gap-4'>
											<div className='text-center font-semibold font-sans text-2xl'>
												<span className='capitalize'>Hammad Qasim</span>
												<p className='flex flex-col justify-center items-center'>
													<span className='font-light'>Concept & Director</span>
												</p>
											</div>
										</div> */}
										<div className='flex h-28 w-48'>
											<Image src={logo} alt={'NMS'} />
										</div>
									</div>
									<div className='border border-2' />
									<div className='grid grid-cols-1 md:grid-cols-2 gap-16 '>
										<div className='flex flex-col justify-evenly'>
											{Object.keys(credits)
												.slice(0, 3)
												.map((section) => (
													<div
														key={section}
														className='text-center font-semibold font-sans text-xl'>
														<span className='capitalize my-2 block'>{section}</span>
														<p className='flex flex-col justify-center items-center'>
															{credits[section].map((name, index) => (
																<span className='font-light' key={index}>
																	{name}
																</span>
															))}
														</p>
													</div>
												))}
										</div>
										<div className='flex flex-col justify-evenly'>
											{Object.keys(credits)
												.slice(3, 7)
												.map((section) => (
													<div
														key={section}
														className='text-center font-semibold font-sans text-xl'>
														<span className='capitalize my-2 block'>{section}</span>
														<p className='flex flex-col justify-center items-center'>
															{credits[section].map((name, index) => (
																<span className='font-light' key={index}>
																	{name}
																</span>
															))}
														</p>
													</div>
												))}
										</div>
									</div>
								</div>
								<div className='shadow-2xl px-10 md:px-4 pb-4 flex flex-col'>
									<div className='flex md:flex-row flex-col items-center justify-around'>
										{/* <div className='text-center font-semibold font-sans text-2xl'>
											<span className='capitalize'>Hammad Qasim</span>
											<p className='flex flex-col justify-center items-center'>
												<span className='font-light'>Concept & Director</span>
											</p> */}
										{/* <span className='capitalize'>Baasil Siddiqi</span>
											<p className='flex flex-col justify-center items-center'>
												<span className='font-light'>Videography</span>
											</p> */}
										{/* </div> */}
										<div className='flex h-28 w-48 py-2'>
											<Image src={onLogo} alt={'ON'} fill className='object-contain' />
										</div>
									</div>
									<div className='border border-2' />
									<div className='grid grid-cols-1 md:grid-cols-2 gap-16 h-full'>
										<div className='flex flex-col justify-evenly'>
											<div className='text-center font-semibold font-sans text-xl flex flex-col'>
												<span className='capitalize'>Concept & Director</span>
												<p className='flex flex-col justify-center items-center'>
													<span className='font-light'>Hammad Qasim</span>
												</p>
												<span className='capitalize'>Videography</span>
												<p className='flex flex-col justify-center items-center'>
													<span className='font-light'>Baasil Siddiqi</span>
												</p>
											</div>
											{Object.keys(credits)
												.slice(7, 8)
												.map((section) => (
													<div
														key={section}
														className='text-center font-semibold font-sans text-xl flex flex-col'>
														<span className='capitalize my-2 block'>{section}</span>
														<p className='flex flex-col justify-center items-center'>
															{credits[section].map((name, index) => (
																<span className='font-light' key={index}>
																	{name}
																</span>
															))}
														</p>
													</div>
												))}
										</div>
										<div className='flex flex-col justify-evenly'>
											{Object.keys(credits)
												.slice(7, 11)
												.map((section) => (
													<div
														key={section}
														className='text-center font-semibold font-sans text-xl flex flex-col'>
														<span className='capitalize my-2 block'>{section}</span>
														<p className='flex flex-col justify-center items-center'>
															{credits[section].map((name, index) => (
																<span className='font-light' key={index}>
																	{name}
																</span>
															))}
														</p>
													</div>
												))}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
