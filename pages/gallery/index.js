import React, { useEffect, useRef } from 'react';
import gallery from '../../util/gallery.json';
import CardList from '../../components/CardList/CardList';
import Layout from '../../components/Layout';

const Gallery = ({ schools, lifeAtNUST }) => {
	return (
		<Layout title={'Life At NUST'}>
			<div className='w-full flex justify-center'>
				<div className='flex justify-center items-center container border-2 border-blue-900'>
					<CardList schools={schools} lifeAtNUST={lifeAtNUST} />
				</div>
			</div>
		</Layout>
	);
};

export const getStaticProps = async () => {
	return {
		props: gallery,
	};
};

export default Gallery;
