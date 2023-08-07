import React, { useEffect, useRef, useState } from 'react';
// import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';

// import Logo from "./Logo";
import { setTimeout } from 'timers';
import Link from 'next/link';
import Logo from './Logo';

const Navbar = () => {
	// const router = usePathname();
	const router = useRouter();
	const navbarRef = useRef(null);
	const [isOpen, setIsOpen] = useState(false);

	function NavbarOpen() {
		setIsOpen(!isOpen);
	}

	useEffect(() => {
		console.log({ router });
		function scrollFunction() {
			const scrollAmounnt = document.body.scrollTop || document.documentElement.scrollTop;
			let margin = 1 / (scrollAmounnt * 5);
			if (margin > 2.5) margin = 2.5;
			else if (margin < 0) margin = 0;
			navbarRef.current.style.margin = `0 ${margin}rem`;
			// navbarRef.current.style.marginLeft = margin + 'rem';
			if (scrollAmounnt > 500) {
				// navbarRef.current.style.marginTop = '-4.49rem';
				navbarRef.current.style.borderRadius = '0';
				// navbarRef.current.style.width = '100%';
			} else if (scrollAmounnt < 500) {
				// navbarRef.current.style.marginTop = '-2.5rem';
				navbarRef.current.style.borderRadius = '0.75rem';

				// navbarRef.current.style.width = 'calc(100% - 2.5rem)';
				// navbarRef.current.style.marginLeft = '1rem';
			}
		}

		window.onscroll = scrollFunction;
		console.log('nav on');

		return () => {
			console.log('nav off');
			window.onscroll = null;
		};
	}, [router]);

	return (
		<div className='sticky top-0 w-full z-50 h-16 mt-10'>
			<div className=' rounded-xl bg-white px-4 mx-20 shadow-md duration-[0.3s]' ref={navbarRef}>
				<div className='flex items-center justify-between py-4 '>
					<Link href='/'>
						<Logo height='h-[60px]' width='w-[60px]' specialClasses='-my-3' />
					</Link>
					<div className='hidden md:flex md:items-center'>
						<Links />
					</div>

					<div className='cursor-pointer md:hidden ' onClick={NavbarOpen}>
						<svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 text-black' viewBox='0 0 24 24'>
							<path
								fill='currentColor'
								d='M12.9499909,17 C12.7183558,18.1411202 11.709479,19 10.5,19 C9.29052104,19 8.28164422,18.1411202 8.05000906,17 L3.5,17 C3.22385763,17 3,16.7761424 3,16.5 C3,16.2238576 3.22385763,16 3.5,16 L8.05000906,16 C8.28164422,14.8588798 9.29052104,14 10.5,14 C11.709479,14 12.7183558,14.8588798 12.9499909,16 L20.5,16 C20.7761424,16 21,16.2238576 21,16.5 C21,16.7761424 20.7761424,17 20.5,17 L12.9499909,17 Z M18.9499909,12 C18.7183558,13.1411202 17.709479,14 16.5,14 C15.290521,14 14.2816442,13.1411202 14.0500091,12 L3.5,12 C3.22385763,12 3,11.7761424 3,11.5 C3,11.2238576 3.22385763,11 3.5,11 L14.0500091,11 C14.2816442,9.85887984 15.290521,9 16.5,9 C17.709479,9 18.7183558,9.85887984 18.9499909,11 L20.5,11 C20.7761424,11 21,11.2238576 21,11.5 C21,11.7761424 20.7761424,12 20.5,12 L18.9499909,12 Z M9.94999094,7 C9.71835578,8.14112016 8.70947896,9 7.5,9 C6.29052104,9 5.28164422,8.14112016 5.05000906,7 L3.5,7 C3.22385763,7 3,6.77614237 3,6.5 C3,6.22385763 3.22385763,6 3.5,6 L5.05000906,6 C5.28164422,4.85887984 6.29052104,4 7.5,4 C8.70947896,4 9.71835578,4.85887984 9.94999094,6 L20.5,6 C20.7761424,6 21,6.22385763 21,6.5 C21,6.77614237 20.7761424,7 20.5,7 L9.94999094,7 Z M7.5,8 C8.32842712,8 9,7.32842712 9,6.5 C9,5.67157288 8.32842712,5 7.5,5 C6.67157288,5 6,5.67157288 6,6.5 C6,7.32842712 6.67157288,8 7.5,8 Z M16.5,13 C17.3284271,13 18,12.3284271 18,11.5 C18,10.6715729 17.3284271,10 16.5,10 C15.6715729,10 15,10.6715729 15,11.5 C15,12.3284271 15.6715729,13 16.5,13 Z M10.5,18 C11.3284271,18 12,17.3284271 12,16.5 C12,15.6715729 11.3284271,15 10.5,15 C9.67157288,15 9,15.6715729 9,16.5 C9,17.3284271 9.67157288,18 10.5,18 Z'
							/>
						</svg>
					</div>
				</div>

				<div className={`${isOpen ? 'block' : 'hidden'} bg-ten border-t-2 py-2 md:hidden`}>
					<div className='flex flex-col'>
						<LinksHamburger />
					</div>
				</div>
			</div>
			{/* <Links /> */}
			{/* <NavDataComponent /> */}
		</div>
	);
};

export default Navbar;
const Links = () => {
	const [openSection, setOpenSection] = useState(null);

	const sections = [
		{
			heading: 'Home',
			link: '/',
			items: [],
			disabled: false,
		},
		{
			heading: 'About Us',
			items: [
				{
					id: 1,
					name: 'Life At NUST',
					link: '/gallery',
				},
				{
					id: 2,
					name: 'Our Team',
					link: '/our_team',
				},
			],
			disabled: false,
		},
		{
			heading: 'Events',
			items: [
				{
					id: 1,
					name: 'Sports Fest',
					link: '/sports_fest',
				},
			],
		},
		{
			heading: 'ON Station',
			link: '/on-station',
		},
		{
			heading: 'Resources',
			items: [
				{ id: 3, name: 'Downloads', link: '/downloads', disabled: true },
				{
					id: 4,
					name: 'Mechandise',
					link: '/merchandise',
				},
			],
		},
	];

	const handleSectionClick = (index) => {
		if (openSection === index) {
			setOpenSection(null);
		} else {
			setOpenSection(index);
		}
	};

	return (
		<div className='relative flex flex-row justify-around items-center'>
			{sections.map((section, index) => (
				<div key={section.heading} className='ml-4 relative'>
					{section?.items?.length > 0 ? (
						<>
							<div
								className={`text-gray-700 font-semibold uppercase mb-1 cursor-pointer`}
								onClick={() => handleSectionClick(index)}>
								{section.heading}
							</div>
							{openSection === index && (
								<div className='absolute left-0 my-2 w-max max-w-xs bg-white border rounded-md shadow'>
									{section.items.map((item) => (
										<div key={item.id} className='m-2 p-2'>
											{item.disabled ? (
												<span
													className='lg:text-md mx-1 text-sm font-semibold tracking-tighter cursor-default text-gray-500 p-4 rounded'
													// Prevent click events on disabled items
												>
													{item.name}
												</span>
											) : (
												<Link href={`${item.link}`}>
													<span
														className={`lg:text-md mx-1 text-sm font-semibold tracking-tighter cursor-pointer text-gray-800 hover:text-[#476dae] hover:bg-gray-200 p-4 rounded`}>
														{item.name}
													</span>
												</Link>
											)}
										</div>
									))}
								</div>
							)}
						</>
					) : (
						<Link href={`${section.link}`}>
							<div
								className={`text-gray-700 font-semibold uppercase mb-1 cursor-pointer ${
									section.disabled ? 'pointer-events-none' : 'hover:text-[#476dae]'
								}`}
								onClick={() => handleSectionClick(index)}>
								{section.heading}
							</div>
						</Link>
					)}
				</div>
			))}
		</div>
	);
};

const LinksHamburger = () => {
	const [openSection, setOpenSection] = useState(null);

	const sections = [
		{
			heading: 'Home',
			link: '/',
			items: [],
			disabled: false,
		},
		{
			heading: 'Life At NUST',
			link: '/gallery',
			items: [],
			disabled: false,
		},
		{
			heading: 'Faqs',
			link: '/faqs',
			items: [],
			disabled: false,
		},
		{
			heading: 'Misc',
			items: [
				{ id: 2, name: 'Donations', link: '/donations', disabled: true },
				{ id: 3, name: 'Downloads', link: '/downloads', disabled: true },
			],
		},
		{
			heading: 'NUST',
			items: [
				{ id: 6, name: 'Merch', link: '/merchandise', disabled: true },
				{ id: 7, name: 'Activities', link: '/og-activites', disabled: true },
				{ id: 8, name: 'Team', link: '/our_team', disabled: false },
				{ id: 9, name: 'Sports Fest', link: '/sports_fest', disabled: true },
				{
					id: 10,
					name: 'ON Station',
					link: '/on-station',
					disabled: false,
				},
			],
		},
	];

	const handleSectionClick = (index) => {
		if (openSection === index) {
			setOpenSection(null);
		} else {
			setOpenSection(index);
		}
	};
	return (
		<div className='flex flex-col'>
			{sections.map((section, index) => (
				<div key={section.heading} className='ml-4 relative'>
					{section.items.length > 0 ? (
						<>
							<div
								className={`text-gray-500 font-semibold uppercase mb-1 cursor-pointer ${
									openSection === index ? 'text-[#476dae]' : ''
								}`}
								onClick={() => handleSectionClick(index)}>
								{section.heading}
							</div>
							{openSection === index && (
								<div className='left-0 mt-2 bg-white border rounded shadow'>
									{section.items.map((item) => (
										<div key={item.id} className='mx-2 p-2'>
											{item.disabled ? (
												<div
													className='text-gray-400 font-semibold'
													// Prevent click events on disabled items
												>
													{item.name}
												</div>
											) : (
												<Link
													href={`${item.link}`}
													className={`lg:text-md mx-1 text-sm font-semibold tracking-tighter text-gray-800 hover:text-[#476dae]`}>
													<a>{item.name}</a>
												</Link>
											)}
										</div>
									))}
								</div>
							)}
						</>
					) : (
						<Link href={`${section.link}`}>
							<div
								className={`text-gray-500 font-semibold uppercase mb-1 cursor-pointer ${
									section.disabled ? 'pointer-events-none' : 'hover:text-[#476dae]'
								}`}
								onClick={() => handleSectionClick(index)}>
								{section.heading}
							</div>
						</Link>
					)}
				</div>
			))}
		</div>
	);
};
