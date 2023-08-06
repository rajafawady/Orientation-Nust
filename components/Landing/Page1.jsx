import Background from './Background';
import Logo from './Logo';
import { TimerContainer } from './TimerContainer';

const Page1 = () => {
	return (
		<div className='text-[#000] h-screen relative'>
			{/* <div className='text-[#fff] h-screen relative bg-[#6390d5]'> */}
			{/* <div className='-mb-20 text-black h-screen relative'> */}
			<div className='flex flex-col px-20 h-full py-20 justify-evenly '>
				<div>
					<div className='text-2xl font-semibold flex items-center gap-1'>
						<img src='calendar.png' className='h-8 w-auto invert' alt='' />
						<div>
							5<sup className='text-xs'>th</sup> - 9<sup className='text-xs'>th</sup> September 2023
						</div>
					</div>
					<div className='text-lg font-semibold my-2 flex items-center gap-1'>
						<img src='location.png' className='h-8 w-auto invert' alt='' />
						NUST H12, Islamabad
					</div>
				</div>
				<div className='z-20 font-bold max-w-3xl text-4xl md:text-6xl lg:text-8xl '>
					Welcome to Orientation '23
				</div>
				<div className='max-w-3xl text-lg text-justify '>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit unde ducimus explicabo
					laudantium reiciendis ipsam tempore pariatur odit dolorum at totam exercitationem illo quidem minima
					vero numquam a, omnis corrupti.
				</div>
				<TimerContainer />
			</div>
			<div className='w-screen absolute -top-36 blur-2xl border-2 border-blue-500'>
				<img src='llline.svg' alt='' className='' />
			</div>
			<Logo />
			{/* <Background /> */}
		</div>
	);
};

export default Page1;
