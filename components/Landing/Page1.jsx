import Image from 'next/image';
import Background from './Background';
import Logo from './Logo';
import { TimerContainer } from './TimerContainer';

const Page1 = () => {
	return (
		<div className='text-white h-[calc(100vh-4rem)] relative z-10'>
			<div className='flex flex-col px-20 h-full py-20 justify-evenly font-mont'>
				<div>
					<div className='text-2xl font-semibold flex items-center gap-1 '>
						<div className='w-8 aspect-1 relative text-white'>
							<Image src='/calendar.png' layout='fill' alt='' className='invert' />
						</div>
						<div>
							5<sup className='text-xs'>th</sup> - 9<sup className='text-xs'>th</sup> September 2023
						</div>
					</div>
					<div className='text-lg font-semibold my-2 flex items-center gap-1'>
						<div className='w-8 aspect-1 relative text-white'>
							<Image src='/location.png' layout='fill' alt='' className='invert' />
						</div>
						NUST H12, Islamabad
					</div>
				</div>
				<div className='z-20 font-bold max-w-3xl text-4xl md:text-6xl lg:text-8xl '>
					Welcome to Orientation &apos;23
				</div>
				<div className='max-w-3xl text-lg text-justify '>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit unde ducimus explicabo
					laudantium reiciendis ipsam tempore pariatur odit dolorum at totam exercitationem illo quidem minima
					vero numquam a, omnis corrupti.
				</div>
				<TimerContainer />
			</div>
			<div className='absolute w-screen h-screen -top-36 blur-2xl border-2 border-blue-500'>
				{/* <div className='w-full h-full relative'>
					<Image src='/llline.svg' alt='' layout='fill' />
				</div> */}
			</div>
			<Logo />
		</div>
	);
};

export default Page1;
