import { useEffect, useState } from 'react';

export const TimerContainer = () => {
	const countDownDate = new Date('2023-09-05T09:00:00');

	const [days, setDays] = useState(0);
	const [time, setTime] = useState(10);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);
	useEffect(() => {
		var updateTime = setInterval(() => {
			var now = new Date().getTime();

			var difference = countDownDate - now;

			var newDays = Math.floor(difference / (1000 * 60 * 60 * 24));
			var newHours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var newMinutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
			var newSeconds = Math.floor((difference % (1000 * 60)) / 1000);

			setDays(newDays);
			setHours(newHours);
			setMinutes(newMinutes);
			setSeconds(newSeconds);

			if (difference <= 0) {
				clearInterval(updateTime);
				// setMessage('The Launch Has Started');
				setDays(0);
				setHours(0);
				setMinutes(0);
				setSeconds(0);
			}
		});

		return () => {
			clearInterval(updateTime);
		};
	}, [time]);
	return (
		// <div className='grid grid-flow-col gap-1 text-center auto-cols-max absolute bottom-20 lg:left-0 left:1/2 m-4'>
		<div className='hidden md:grid grid-flow-col gap-1 text-center auto-cols-max'>
			<div className='flex flex-col p-2 bg-[#3F2073] rounded-sm text-neutral-content'>
				<span className='countdown font-mono text-4xl'>
					<span style={{ '--value': days }}></span>
				</span>
				days
			</div>
			<div className='flex flex-col p-2 bg-[#3F2073] rounded-sm text-neutral-content'>
				<span className='countdown font-mono text-4xl'>
					<span style={{ '--value': hours }}></span>
				</span>
				hours
			</div>
			<div className='flex flex-col p-2 bg-[#3F2073] rounded-sm  text-neutral-content'>
				<span className='countdown font-mono text-4xl'>
					<span style={{ '--value': minutes }}></span>
				</span>
				min
			</div>
			<div className='flex flex-col p-2 bg-[#3F2073] rounded-sm  text-neutral-content'>
				<span className='countdown font-mono text-4xl'>
					<span style={{ '--value': seconds }}></span>
				</span>
				sec
			</div>
		</div>
	);
};
