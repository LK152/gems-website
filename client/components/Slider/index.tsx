import { Box, Skeleton } from '@mui/material';
import Image from 'next/legacy/image';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Slider = ({
	images,
	alt,
}: {
	images: imageProps[] | null;
	alt: string;
}) => {
	return (
		<Slide transitionDuration={700} indicators easing='ease-in'>
			{images && images !== undefined && images.length !== 0 ? (
				images.map(({ path }, idx) => (
					<Box height={480} position='relative' key={idx}>
						<Image
							alt={alt}
							src={`http://localhost:8000/${path}`}
							layout='fill'
							objectFit='contain'
							priority
						/>
					</Box>
				))
			) : (
				<Skeleton variant='rectangular' width='100%' height={480} />
			)}
		</Slide>
	);
};

export default Slider;
