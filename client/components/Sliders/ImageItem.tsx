import Image from 'next/image';

const Item = ({ id }: idProp) => {
	return (
		<div style={{ position: 'relative', width: '100%', height: '100%' }}>
			<Image
				alt='slider image'
				src={`https://drive.google.com/uc?export=view&id=${id}`}
				layout='fill'
				objectFit='contain'
				quality={100}
				priority 
			/>
		</div>
	);
};

export default Item;
