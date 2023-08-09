import Link from 'next/link';

const Card = ({ children, image, type, id, content }) => {
	return (
		<>
			<div
				style={{
					backgroundColor: 'rgba(114,2,64,0.1)',
					backgroundImage: `url(${image})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					display: 'flex',
					overflow: 'auto',
					flexDirection: 'column',
					justifyContent: 'space-between',
				}}
				className='rounded h-96 w-96 school_link drop-shadow-2xl shadow-lg'
				onClick={() => window[id + children]?.showModal()}>
				<div className=''></div>
				<div className='px-6 py-3 school_link_textMain h-full'>
					<p className='pb-4 text-3xl font-bold text-white'>{children}</p>
					<p>{content.split('', 200).join('') + '...'}</p>
				</div>
			</div>
			<Modal title={children} image={image} id={id + children} content={content} />
		</>
	);
};

const Modal = ({ title, image, id, content }) => {
	return (
		<dialog id={id} className='modal modal-bottom sm:modal-middle'>
			<form method='dialog' className='modal-box'>
				<h3 className='font-bold text-lg'>{title}</h3>
				<p className='py-4 prose'>{content}</p>
			</form>
			<form method='dialog' className='modal-backdrop'>
				<button>close</button>
			</form>
		</dialog>
	);
};

export default Card;
