import { useRef } from 'react';
import MeetOurTeam from '../EC/MeetOurTeam';
import Title from '../Title';
import List from './List';

const CardList = ({ schools, lifeAtNUST }) => {
	const schoolRef = useRef(null);
	const lifeAtNUSTRef = useRef(null);
	return (
		<div id='cardList'>
			<div className='w-full flex items-center justify-center gap-1 md:gap-3 px-3 my-5'>
				<div className='w-1/4 h-[3px] bg-[#3F2073]'></div>
				<h1 className='my-3 p-4 shrink-0 heading text-4xl'>Schools</h1>
				<div className='w-1/4 h-[3px] bg-[#3F2073]'></div>
			</div>
			<div className='list'>
				<div className='school__container  lg:px-8 px-3 py-2'>
					<List list={schools} container={schoolRef} type='School' />
				</div>
			</div>

			<div className='w-full flex items-center justify-center gap-1 md:gap-3 px-3 my-16'>
				<div className='w-1/4 h-[3px] bg-[#3F2073]'></div>
				<h1 className='my-3 p-4 shrink-0 heading text-4xl'>Life at NUST</h1>
				<div className='w-1/4 h-[3px] bg-[#3F2073]'></div>
			</div>
			<div className='list'>
				<div className='school__container lg:px-8 px-3 py-2'>
					<List list={lifeAtNUST} container={lifeAtNUSTRef} type='Life at NUST' />
				</div>
			</div>
			<div className='py-6'></div>
		</div>
	);
};

export default CardList;
