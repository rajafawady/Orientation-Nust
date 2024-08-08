import React from 'react';

const StarContainer = () => {
	return (
		<div
			className='w-full h-screen bg-center bg-no-repeat bg-cover absolute top-0 left-0'
			style={{
				backgroundImage: 'url(bg24.jpeg)'
			}}>
			<div className='absolute top-0 left-0 w-full h-full bg-black opacity-30' />
		</div>
	);
};

export default StarContainer;
