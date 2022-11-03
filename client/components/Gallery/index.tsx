import Image from 'next/image';
import { Box, Grid } from '@mui/material';

const Gallery = ({ images }: { images: imageProps[] | null }) => {
    console.log(images)

	return (
		<Grid container width='100%' minHeight='1200px'>
			{images?.map(({ path }, idx) => (
				<Grid item xs={4} key={idx} position='relative'>
					<Image
						alt='Gallery image'
						src={`http://localhost:8000/${path}`}
						layout='fill'
						objectFit='contain'
					/>
				</Grid>
			))}
		</Grid>
	);
};

export default Gallery;
