import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { Box, Card, Paper, Stack } from '@mui/material';

const ImageList = ({ images }: { images: imageProps[] | null }) => {
	console.log(images);

	return (
		<Paper variant='outlined' sx={{ width: '80%', mx: 'auto' }}>
			<Stack direction='row' overflow='hidden'>
				{images?.map(({ path }, idx) => (
					<Card sx={{minWidth: '100px'}} key={idx}>
						<img
							alt='slider'
							width='100%'
							src={`http://localhost:8000/${path}`}
						/>
					</Card>
				))}
			</Stack>
		</Paper>
	);
};

export default ImageList;
