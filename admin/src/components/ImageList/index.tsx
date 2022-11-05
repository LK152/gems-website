import {
	Delete,
	DeleteSweep,
	KeyboardArrowLeft,
	KeyboardArrowRight,
	Upload,
} from '@mui/icons-material';
import { memo } from 'react';
import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	IconButton,
	Paper,
	Stack,
	Typography,
} from '@mui/material';
import axios from 'axios';

type props = {
	id: string;
	title: string;
	images: imageProps[] | null;
	setSnackbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
	handleDialogOpen: (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => void;
};

const ImageList = ({
	id,
	title,
	images,
	setSnackbarOpen,
	handleDialogOpen,
}: props) => {
	console.log(images);

	const handleDeleteImage = async (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		await axios
			.delete(`http://localhost:8000/images/${e.currentTarget.id}`)
			.then(() => {
				setSnackbarOpen(true);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<Box width='80%' mx='auto' my={4}>
			<Typography variant='h3'>{title}</Typography>
			<Paper variant='outlined'>
				<Stack
					direction='row'
					alignItems='center'
					sx={{ overflowX: 'scroll' }}
				>
					{images?.map(({ id, path, order }, idx) => (
						<Card
							sx={{
								minWidth: '300px',
								height: 'fit-content',
								mx: 4,
							}}
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
								<Stack
									width='100%'
									direction='row'
									justifyContent='space-between'
								>
									<IconButton>
										<KeyboardArrowLeft />
									</IconButton>
									<IconButton
										id={id}
										onClick={handleDeleteImage}
									>
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
			<Stack direction='row'>
				<Button id={id} onClick={handleDialogOpen}>
					<Upload />
					<Typography>Upload File(s)</Typography>
				</Button>
				<Button>
					<DeleteSweep />
					<Typography textAlign='center'>Bulk Delete</Typography>
				</Button>
			</Stack>
		</Box>
	);
};

export default memo(ImageList);
