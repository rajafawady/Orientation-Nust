import React, { useState } from 'react';
import Layout from '../components/Layout';
import BatchImage from '../components/BatchImage';

const Downloads = () => {
	return (
		<Layout title={'Downloads'}>
			<div className='flex flex-col items-center w-full'>
				<div className='w-full flex items-center justify-center gap-1 md:gap-3 px-3 mt-10 mb-8'>
					<div className='w-1/4 h-[3px] bg-[#3F2073]'></div>
					<h1 className='my-3 p-4 shrink-0 heading text-4xl'>Downloads</h1>
					<div className='w-1/4 h-[3px] bg-[#3F2073]'></div>
				</div>
				<div className='flex w-full  flex-wrap justify-evenly'>
					<BatchImage imgName='day-full.jpg' dlName='day-photo-1' btnText='Day Drone' />
					<BatchImage imgName='night-full.png' dlName='night-photo-2' btnText='Night Drone' />
					<BatchImage imgName='day-pano.jpg' dlName='day-photo-2' btnText='Day' />
					<BatchImage imgName='night-pano.png' dlName='night-photo-3' btnText='Night Drone' />
				</div>
			</div>
		</Layout>
	);
};

export default Downloads;
