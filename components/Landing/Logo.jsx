import React from 'react';

const Logo = () => {
	return (
		<div className='group absolute h-72 w-72 bottom-48 right-48'>
			{/* <img src='Crescent.svg' alt='' className='h-full w-full absolute object-contain' /> */}
			{/* <img src='Fire.svg' alt='' className='h-full w-full rotate-45 absolute object-contain' /> */}
			{/* <img src='Dome and Sun fixed.svg' alt='' className='h-full  w-full object-contain absolute' /> */}
			<img
				src='logo.png'
				className='h-full w-full absolute duration-700 transition-transform object-contain hover:translate-x-6 hover:translate-y-6'
				alt=''
			/>

			{/* <svg
				id='Layer_2'
				data-name='Layer 2'
				xmlns='http://www.w3.org/2000/svg'
				xmlnsXlink='http://www.w3.org/1999/xlink'
				viewBox='0 0 700 700'>
				<defs>
					<linearGradient
						id='linear-gradient'
						x1='342.1'
						y1='719.06'
						x2='339.48'
						y2='-35.85'
						gradientUnits='userSpaceOnUse'>
						<stop offset='0' stop-color='#6390d5' />
						<stop offset='0' stop-color='#628fd4' />
						<stop offset='.16' stop-color='#427db7' />
						<stop offset='.25' stop-color='#3676ac' />
						<stop offset='.35' stop-color='#3a4f92' />
						<stop offset='.45' stop-color='#3d2c7b' />
						<stop offset='.51' stop-color='#3f2073' />
						<stop offset='.57' stop-color='#43206c' />
						<stop offset='.66' stop-color='#502059' />
						<stop offset='.74' stop-color='#612141' />
						<stop offset='.78' stop-color='#763252' />
						<stop offset='.88' stop-color='#a35476' />
						<stop offset='.96' stop-color='#be6a8c' />
						<stop offset='1' stop-color='#c97295' />
					</linearGradient>
					<linearGradient
						id='linear-gradient-2'
						x1='331.06'
						y1='719.1'
						x2='328.44'
						y2='-35.81'
						xlinkHref='#linear-gradient'
					/>
				</defs>
				<g id='Layer_1-2' data-name='Layer 1'>
					<g>
						<path
							fill='#fff'
							stroke='#fff'
							class='cls-2'
							d='m653.03,197.01c-23.64-34.67-88.25-114.4-202.21-139.11-110.76-24.02-223.19,13.69-297.4,87.9-106.66,106.66-115.84,270.2-58.32,388.25,47.52,97.54,130.84,144.01,164.88,160.48-121.94-49.07-211.76-157.11-228.75-280.87C10.35,261.69,102.02,154.58,120.62,134.66,198.32,51.38,338.78-10.04,477.45,40.48c97.74,35.6,152.33,113.92,175.58,156.52Z'
						/>
						<path
							stroke='#fff'
							class='cls-1'
							d='m659.07,203.52c-20.73-40.45-76.23-127.09-180.83-165.2-62.1-22.62-130.25-24.27-197.11-4.78-61.39,17.9-118.99,53.25-162.18,99.55-18.72,20.05-111.02,127.88-90,280.87,16.65,121.27,102.73,227.54,220.47,278.63-2.87-.73-5.97-1.59-9.24-2.58C126.86,655.92,6.21,530.19.23,367.58-4.68,233.92,69.06,107.05,186.16,43.67c114.77-62.12,265.92-60.54,371.8,21.36,58.76,45.45,87.47,103.2,101.11,138.49Z'
						/>
					</g>
				</g>
			</svg> */}
		</div>
	);
};

export default Logo;
