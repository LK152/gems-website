import Image from 'next/image';

const Item = (props: sliderItemProps) => {
	return (
		<Image
			alt='slider image'
			src={`https://drive.google.com/uc?export=view&id=${props.id}`}
			layout='fill'
			objectFit='contain'
		/>
	);
};

export default Item;