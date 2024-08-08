import Image from 'next/image';
import React from 'react';
import styles from './ECCard.module.css';

const VPcards = [
	{
		id: 1,
		name: 'Huzaifa Abbasi',
		role: 'President',
		image: '/EC-Pics/HUZAIFA_ABBASI_PRESIDENT.png',
		'one-liner': 'Little by little, we made it.',
		school: 'SEECS',
		batch: '2019',
	},
	{
		id: 3,
		name: 'Shaiza Fatima',
		role: 'VP Coordinations',
		image: '/EC-Pics/SHAIZA_FATIMA_VP_COORD.png',
		'one-liner': 'Smol but Lethal',
		school: 'S3H',
		batch: '2019',
	},
	{
		id: 7,
		name: 'Nad e Ali',
		role: 'VP QA&HR',
		image: '/EC-Pics/NADE_ALI_VP_QA&HR.png',
		'one-liner': 'I know a guy who knows a guy',
		school: 'NBS',
		batch: '2020',
	},
	
	{
		id: 2,
		name: 'Maryam Batool',
		role: 'VP Operations',
		image: '/EC-Pics/MARYAM_BATOOL_VP_OPS.png',
		'one-liner': 'Work hard, Party harder!',
		school: 'NBS',
		batch: '2019',
	},

	{
		id: 4,
		name: 'Syed Ali Raza Kazmi',
		role: 'VP Media',
		image: '/EC-Pics/SYED_ALI_RAZA_KAZMI_VP_MEDIA.png',
		'one-liner': 'Mujhe kya main tou SADA ki hun',
		school: 'SADA',
		batch: '2019',
	},
	{
		id: 5,
		name: 'Anas Javed',
		role: 'VP Resources',
		image: '/EC-Pics/ANAS_JAVED_VP_RESOURCES.png',
		'one-liner': 'Follow your dreams, Keep sleeping',
		school: 'NBS',
		batch: '2019',
	},
	{
		id: 6,
		name: 'Wasiq Usman Rana',
		role: 'VP Outreach',
		image: '/EC-Pics/WASIQ_USMAN_RANA_VP_OUTREACH.png',
		'one-liner': 'I know a guy who knows a guy',
		school: 'NBS',
		batch: '2020',
	},
	
];

const ECCards = () => {
	return (
		<div className={styles.teamCard}>
			<div className={styles.grid}>
				{VPcards.map((card) => (
					<div key={card.id} className={styles.card}>
						<img src={card.image} alt={card.name} className={styles.image} />
						<div className={styles.imageContainer}></div>
						<div className={styles.textContainer}>
							<p className={styles.name}>{card.name}</p>
							<p className={styles.role}>{card.role}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ECCards;
