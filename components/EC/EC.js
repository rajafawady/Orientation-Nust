import React from 'react';
import Image from 'next/image';
import MeetOurTeam from './MeetOurTeam';
import ECCards from './ECCards';
import Wing from './Wing';
import { opswing, mediawing, reswing, coorwing, outwing, presiwing } from './data';

export default function EC() {
	return (
		<div className='w-full flex flex-col justify-center items-center'>
			<div className='w-full flex items-center justify-center gap-1 md:gap-3 px-3 mt-10 mb-8'>
				<div className='w-1/4 h-[3px] bg-coral'></div>
				<h1 className='my-3 p-4 shrink-0 heading text-4xl'>Meet Our Team</h1>
				<div className='w-1/4 h-[3px] bg-coral'></div>
			</div>
			<ECCards />
			<div className='w-full flex items-center justify-center gap-1 md:gap-3 px-3 mt-10 mb-8'>
				<div className='w-1/4 h-[3px] bg-coral'></div>
				<h1 className='my-3 p-4 shrink-0 heading text-4xl'>Directorate</h1>
				<div className='w-1/4 h-[3px] bg-coral'></div>
			</div>
			<div className='prose w-full max-w-4xl text-justify mb-8'>
				Every great event needs an even better team full of passionate individuals lazer-focused on success.
				With this in mind each individual member of the directorate was selected after a meticulous evaluation
				procedure, ensuring that the ON '23 dream team is comprised of the absolute best that NUST has to offer.
				Fast forward to the present: true to expectations, our beyond capable directorate has been working day
				and night to pull off an event that you'll remember well into the later years of your time at NUST. All
				of the memories you'll be making during the orientation are all thanks to these hardworking individuals
				and their teams.
			</div>
			<div className='w-full overflow-hidden flex flex-col gap-4 md:gap-0 md:flex-row items-center md:items-start justify-evenly flex-wrap'>
				<div className='w-full'></div>
				<div className='w-1/3 h-[700px] flex flex-col items-center ustify-start gap-20 relative'>
					<h2 className='text-4xl text-center bg-gradient-to-b font-latoBold bg-clip-text text-transparent from-purple to-coral font-bold'>
						Coordination Wing
					</h2>
					<Wing cards={coorwing} />
				</div>
				<div className='w-1/3 h-[700px] flex flex-col items-center justify-start gap-20 relative'>
					<h2 className='text-4xl text-center bg-gradient-to-b font-latoBold bg-clip-text text-transparent from-purple to-coral font-bold'>
						Operations Wing
					</h2>
					<Wing cards={opswing} />
				</div>
				<div className='w-1/3 h-[700px] flex flex-col items-center ustify-start gap-20 relative'>
					<h2 className='text-4xl text-center bg-gradient-to-b font-latoBold bg-clip-text text-transparent from-purple to-coral font-bold'>
						Media Wing
					</h2>
					<Wing cards={mediawing} />
				</div>
				
				<div className='w-1/3 h-[700px] flex flex-col items-center ustify-start gap-20 relative'>
					<h2 className='text-4xl text-center bg-gradient-to-b font-latoBold bg-clip-text text-transparent from-purple to-coral font-bold'>
						Outreach Wing
					</h2>
					<Wing cards={outwing} />
				</div>
				<div className='w-1/3 h-[700px] flex flex-col items-center ustify-start gap-20 relative'>
					<h2 className='text-4xl text-center bg-gradient-to-b font-latoBold bg-clip-text text-transparent from-purple to-coral font-bold'>
						Resource Wing
					</h2>
					<Wing cards={reswing} />
				</div>
				<div className='w-1/3 h-[700px] flex flex-col items-center ustify-start gap-20 relative'>
					<h2 className='text-4xl text-center bg-gradient-to-b font-latoBold bg-clip-text text-transparent from-purple to-coral font-bold'>
						President Wing
					</h2>
					<Wing cards={presiwing} />
				</div>
			</div>
		</div>
	);
}
