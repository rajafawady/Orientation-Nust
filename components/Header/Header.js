import React from 'react';
import Music from '../Music/Music';
import SwitchTheme from './SwitchTheme';
import { SidebarNav } from '../Sidebar/Sidebar';

export default function Header({ homepage }) {
	return (
		<>
			<div className={`my-header z-10 header bg-transparent md:pl-4 md:pr-4 pt-3 w-full mb-8`}>
				{/* <SidebarNav /> */}

				<div className='flex w-full  items-center'>
					<div className='w-1/3 md:w-3/4'></div>

					<div className='w-2/3  md:w-1/4 flex justify-end items-center'>
						<div className=' mr-14 md:pr-5'>
							<Music />
						</div>
						<div>
							<SwitchTheme />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
