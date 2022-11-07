import {
	Delete,
	DeleteSweep,
	KeyboardArrowLeft,
	KeyboardArrowRight,
	Upload,
} from '@mui/icons-material';
import { memo, useState } from 'react';
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
import UploadFileDialog from '../UploadFileDialog';
import { folderIds } from '../../types/global';
import { fetchFolder, postImages, deleteImage, deleteFolder } from '../../api';

type props = {
	id: folderIds;
	title: string;
	images: imageProps[] | null;
	setImages: React.Dispatch<React.SetStateAction<imageProps[] | null>>;
};

const ImageList = ({ id, title, images, setImages }: props) => {
	const [dialogOpen, setDialogOpen] = useState<boolean>(false);
	const [uploads, setUploads] = useState<File[] | null>(null);

	console.log(uploads);

	const handleDeleteImage = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		if (images)
			setImages(images?.filter(({ id }) => id !== e.currentTarget.id));

		deleteImage(e.currentTarget.id);
	};

	const handleBulkDelete = () => {
		deleteFolder(id).then(() => {
			if (images) setImages(null);
		});
	};

	const handleUpload = () => {
		const fd = new FormData();
		if (uploads)
			Array.from(uploads).forEach((upload) => fd.append('image', upload));

		postImages(fd, id).then(async () => {
			setUploads(null);
			setDialogOpen(false);
			setImages(await fetchFolder(id));
		});
	};

	return (
		<>
			<Box width='80%' mx='auto' my={4}>
				<Typography variant='h3'>{title}</Typography>
				<Paper variant='outlined'>
					{images && images.length !== 0 ? (
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
										<Typography>{`Order: ${
											order + 1
										}`}</Typography>
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
					) : (
						<Typography textAlign='center' m={10}>
							No items in list
						</Typography>
					)}
				</Paper>
				<Stack my={1} direction='row' justifyContent='space-between'>
					<Button onClick={() => setDialogOpen(true)}>
						<Upload />
						<Typography>Upload File(s)</Typography>
					</Button>
					<Button onClick={handleBulkDelete}>
						<DeleteSweep />
						<Typography textAlign='center'>Bulk Delete</Typography>
					</Button>
				</Stack>
			</Box>
			<UploadFileDialog
				open={dialogOpen}
				handleClose={() => setDialogOpen(false)}
				handleChange={(files: File[]) => setUploads(files)}
				handleUpload={handleUpload}
			/>
		</>
	);
};

export default memo(ImageList);
