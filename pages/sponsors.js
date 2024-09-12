import React from 'react';
import Layout from '../components/Layout';

export default function Donations() {
	return (
		<Layout title={'Sponsors'}>
			<div className='w-full flex flex-col'>
				<div className='w-full flex items-center justify-center gap-1 px-3 flex-col lg:flex-row mt-5'>
					<div className='w-1/4 h-[6px] bg-coral'></div>
					<h1 className='m-5 lg:mx-14 p-1 lg:p-4 shrink-0 sp-heading text-6xl text-center'>Our Sponsors</h1>
					<div className='w-1/4 h-[6px] bg-coral'></div>
				</div>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
					
					<div
						style={{
							backgroundImage: `url("/sponsor-logos/California.png")`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
						}}
						className='rounded h-72 w-72 mx-auto school_link'></div>
					<div
						style={{
							backgroundImage: `url("/sponsor-logos/cheezious.png")`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
						}}
						className='rounded h-72 w-72 mx-auto school_link'></div>
					<div
						style={{
							backgroundImage: `url("/sponsor-logos/crusteez.png")`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
						}}
						className='rounded h-72 w-72 mx-auto school_link'></div>
					<div
						style={{
							backgroundImage: `url("/sponsor-logos/nearpear.jpg")`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
						}}
						className='rounded h-72 w-72 mx-auto school_link'></div>
					<div
						style={{
							backgroundImage: `url("/sponsor-logos/orange lake .png")`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
						}}
						className='rounded h-72 w-72 mx-auto school_link'></div>
					<div
						style={{
							backgroundImage: `url("/sponsor-logos/Pizzrela.jpg")`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
						}}
						className='rounded h-72 w-72 mx-auto school_link'></div>
					<div
						style={{
							backgroundImage: `url("/sponsor-logos/Ranchers .png")`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
						}}
						className='rounded h-72 w-72 mx-auto school_link'></div>
					<div
						style={{
							backgroundImage: `url("/sponsor-logos/ROX.jpg")`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
						}}
						className='rounded h-72 w-72 mx-auto school_link'></div>
					<div
						style={{
							backgroundImage: `url("/sponsor-logos/USA.jpg")`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
						}}
						className='rounded h-72 w-72 mx-auto school_link'></div>
						<div
						style={{
							backgroundImage: `url("/sponsor-logos/AEO.jpg")`,
							backgroundSize: 'cover',
							backgroundPosition: 'center'
						}}
						className='rounded h-72 w-72 mx-auto school_link'></div>
						
						<div
						style={{
							backgroundImage: `url("/sponsor-logos/ASCOM.jpg")`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
						}}
						className='rounded h-72 w-72 mx-auto school_link'></div>
					
				</div>
			</div>
		</Layout>
	);
}
