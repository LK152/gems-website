import Image from 'next/image';
import { Box, Grid } from '@mui/material';

const Gallery = ({ images }: { images: imageProps[] | null }) => {
	console.log(images);

	return (
		<Box width='80%' mx='auto' my={20}>
			<Grid container rowSpacing={4} spacing={4}>
				{images?.map(({ path }, idx) => (
					<Grid item xs={4} key={idx}>
						<Box
							position='relative'
							width='100%'
							height='100%'
							sx={{
								boxShadow:
									'10px 10px 18px -1px rgba(0,0,0,0.7)',
							}}
						>
							<Image
								alt='Gallery image'
								src={`http://localhost:8000/${path}`}
								width={1587}
								height={2245}
								layout='responsive'
								objectFit='contain'
								priority
								quality={1}
							/>
						</Box>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default Gallery;
