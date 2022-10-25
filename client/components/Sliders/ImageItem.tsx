import Image from 'next/image';

const Item: React.FC<{ path: string }> = ({ path }) => {
	return (
		<div style={{ position: 'relative', width: '100%', height: '100%' }}>
			<Image
				alt='slider image'
				src={`/${path}`}
				layout='fill'
				objectFit='contain'
				quality={100}
				priority
			/>
		</div>
	);
};

export default Item;
