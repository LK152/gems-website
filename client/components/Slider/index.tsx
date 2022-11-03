import { Box } from '@mui/material';
import Image from 'next/image';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Slider = ({ images }: { images: imageProps[] | null }) => {
	return (
		<Slide transitionDuration={700} indicators easing='ease-in'>
			{images?.map(({ path }, idx) => (
				<Box height={480} position='relative' key={idx}>
					<Image
						alt='Slider image'
						src={`http://localhost:8000/${path}`}
						layout='fill'
						objectFit='contain'
						priority
					/>
				</Box>
			))}
		</Slide>
	);
};

export default Slider;
