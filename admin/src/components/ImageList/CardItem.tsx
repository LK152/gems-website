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
	imgPath: string;
	order: number;
	id: string;
	handleDelete: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const CardItem = ({ imgPath, order, id, handleDelete }: props) => {
	return (
		<Box minWidth={300} maxWidth={300} mx={4}>
			<Card>
				<CardMedia
					component='img'
					image={`http://localhost:8000/${imgPath}`}
					alt='slider'
				/>
				<CardContent>
					<Typography>{`Order: ${order + 1}`}</Typography>
				</CardContent>
				<CardActions>
					<Stack
						width='100%'
						direction='row'
						justifyContent='space-between'
					>
						<IconButton>
							<KeyboardArrowLeft />
						</IconButton>
						<IconButton id={id} onClick={handleDelete}>
							<Delete />
						</IconButton>
						<IconButton>
							<KeyboardArrowRight />
						</IconButton>
					</Stack>
				</CardActions>
			</Card>
		</Box>
	);
};

export default CardItem;
