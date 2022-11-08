import {
	Card,
	CardContent,
	CardMedia,
	CardActions,
	Stack,
	IconButton,
	Typography,
	Box,
} from '@mui/material';
import {
	Delete,
	KeyboardArrowLeft,
	KeyboardArrowRight,
} from '@mui/icons-material';

type props = {
	image: imageProps;
	handleDelete: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	handleLeftShift: any;
	handleRightShift: any;
};

const CardItem = ({
	image,
	handleDelete,
	handleLeftShift,
	handleRightShift,
}: props) => {
	return (
		<Box minWidth={300} maxWidth={300} mx={4}>
			<Card>
				<CardMedia
					component='img'
					image={`http://localhost:8000/${image.path}`}
					alt='slider'
				/>
				<CardContent>
					<Typography>{`Order: ${image.order + 1}`}</Typography>
				</CardContent>
				<CardActions>
					<Stack
						width='100%'
						direction='row'
						justifyContent='space-between'
					>
						<IconButton id={image.id} onClick={handleLeftShift}>
							<KeyboardArrowLeft />
						</IconButton>
						<IconButton id={image.id} onClick={handleDelete}>
							<Delete />
						</IconButton>
						<IconButton id={image.id} onClick={handleRightShift}>
							<KeyboardArrowRight />
						</IconButton>
					</Stack>
				</CardActions>
			</Card>
		</Box>
	);
};

export default CardItem;
