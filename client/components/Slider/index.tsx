import { Box, Skeleton } from '@mui/material';
import Image from 'next/image';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Slider = ({ images }: { images: imageProps[] | null }) => {
	return (
		<Slide transitionDuration={700} indicators easing='ease-in'>
			{images && images.length !== 0 ? (
				images.map(({ path }, idx) => (
					<Box height={480} position='relative' key={idx}>
						<Image
							alt='Slider image'
							src={`http://localhost:8000/${path}`}
							layout='fill'
							objectFit='contain'
							quality={1}
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
