import Card from './Card';
import { useEffect, useState, useRef } from 'react';

const List = ({ list = [], type, gap, container }) => {
	const length = list.length;
	const partLength = Math.ceil(length / 3);
	const result = [];

	const ref = useRef(null);
	const ref2 = useRef(null);

	let scrollY = 0;
	let startingPosition = 0;

	useEffect(() => {
		const handleScroll = () => {
			if (typeof window !== 'undefined' && window.innerWidth >= 1025) {
				if (window.scrollY < startingPosition) {
					console.log('im afraid', type);
					return;
				}
				if (window.scrollY - startingPosition < 10) {
					console.log('i quit', type);
					ref.current.style.transform = `translateY(0rem)`;
					ref2.current.style.transform = `translateY(0rem)`;
					return;
				}
				const diff = window.scrollY - scrollY;
				const multiplier = diff > 0 ? 1 : -1;
				ref.current.style.transform = `translateY(${multiplier * 2 + multiplier}rem)`;
				ref2.current.style.transform = `translateY(${multiplier * 2 + multiplier}rem)`;
				scrollY = window.scrollY;
			}
		};

		if (typeof window !== 'undefined') {
			startingPosition =
				(container?.current?.getBoundingClientRect()?.top +
					container?.current?.getBoundingClientRect().bottom) /
				2;

			console.log({ startingPosition });
			window.addEventListener('scroll', handleScroll);
			return () => {
				window.removeEventListener('scroll', handleScroll);
			};
		}
	}, []);

	for (let i = 0; i < 3; i++) {
		result.push(list.slice(i * partLength, (i + 1) * partLength));
	}

	return (
		<>
			<div className='flex lg:flex-row flex-col gap-4 lg:gap-10'>
				<div className={`flex flex-col transition-transform duration-1000`} ref={ref}>
					{result[0].map((data) => (
						<Card type={type} content={data.content} id={data.id} key={data.id} image={data.image}>
							{data.name}
						</Card>
					))}
				</div>
				<div className={typeof window !== 'undefined' && window.innerWidth < 1280 ? 'col1' : ''}>
					<div className='flex flex-col transition-transform duration-1000'>
						{result[1].map((data) => (
							<Card type={type} content={data.content} id={data.id} key={data.id} image={data.image}>
								{data.name}
							</Card>
						))}
					</div>
				</div>
				<div className={typeof window !== 'undefined' && window.innerWidth < 1280 ? 'col2' : ''}>
					<div className={`flex flex-col transition-transform duration-1000`} ref={ref2}>
						{result[2].map((data) => (
							<Card type={type} content={data.content} id={data.id} key={data.id} image={data.image}>
								{data.name}
							</Card>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

// const Modal = ({ title, image, id, content }) => {
// 	return (
// 		<dialog id={id} className='modal'>
// 			<form method='dialog' className='modal-box'>
// 				<h3 className='font-bold text-lg'>{title}</h3>
// 				<p className='py-4 prose'>{content}</p>
// 			</form>
// 			<form method='dialog' className='modal-backdrop'>
// 				<button>close</button>
// 			</form>
// 		</dialog>
// 	);
// };

export default List;
