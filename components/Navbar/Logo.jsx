import React from 'react';

const Logo = ({ height, width, specialClasses }) => {
	return (
		<div className={`${height} ${width} ${specialClasses} relative`}>
			<img src='Logo Assets/crescent.png' className='absolute left-0 top-0 h-full w-auto object-contain' alt='' />
			<img src='Logo Assets/DnS.png' className='absolute left-0 top-0 h-full w-auto object-contain' alt='' />
			<img src='Logo Assets/fire.png' className='absolute left-0 top-0 h-full w-auto object-contain' alt='' />
		</div>
	);
};

export default Logo;
