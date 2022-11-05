import { Delete, KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import {
	Box,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	IconButton,
	Paper,
	Stack,
	Typography,
} from '@mui/material';

const ImageList = ({ images }: { images: imageProps[] | null }) => {
	console.log(images);

	return (
		<Paper variant='outlined' sx={{ width: '80%', mx: 'auto' }}>
			<Stack direction='row' alignItems='center' overflow='scroll'>
				{images?.map(({ path, order }, idx) => (
					<Card
						sx={{ minWidth: '300px', height: 'fit-content', mx: 4 }}
						key={idx}
					>
						<CardMedia
							component='img'
							image={`http://localhost:8000/${path}`}
							alt='slider'
						/>
						<CardContent>
							<Typography>{`Order: ${order + 1}`}</Typography>
						</CardContent>
						<CardActions>
							<Stack width='100%' direction='row' justifyContent='space-between'>
								<IconButton>
									<KeyboardArrowLeft />
								</IconButton>
                                <IconButton>
                                    <Delete />
                                </IconButton>
								<IconButton>
									<KeyboardArrowRight />
								</IconButton>
							</Stack>
						</CardActions>
					</Card>
				))}
			</Stack>
		</Paper>
	);
};

export default ImageList;
