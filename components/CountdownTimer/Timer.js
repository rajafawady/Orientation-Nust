import { useEffect, useState } from 'react';
import { TimerContainer } from './TimerContainer';

const Timer = () => {
	const [time, setTime] = useState(10);
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);
	const [message, setMessage] = useState('');

	let countDownDate = new Date('2022-09-05T09:00:00');

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
				setMessage('The Launch Has Started');
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
		<div className='flex flex-col items-center  pt-16'>
			<div className='opening-text text-center font-brittany font-extrabold text-white text-4xl md:text-6xl lg:text-8xl'>
				Welcome to the Orientation 22
			</div>
			<div className='date-text mt-12 text-center font-sans font-bold text-white text-md md:text-xl lg:text-2xl'>
				5th - 9th September 2022 in NUST H12, Islamabad
			</div>

			<TimerContainer days={days} hours={hours} minutes={minutes} seconds={seconds} />
		</div>
	);
};

export default Timer;
