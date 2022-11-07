import { DeleteSweep, Update, Upload } from '@mui/icons-material';
import { memo, useState } from 'react';
import {
	Box,
	Button,
	Paper,
	Stack,
	Typography,
	Dialog,
	DialogActions,
	DialogTitle,
} from '@mui/material';
import UploadFileDialog from '../UploadFileDialog';
import { folderIds } from '../../types/global';
import { fetchFolder, postImages, deleteImage, deleteFolder } from '../../api';
import CardItem from './CardItem';

type props = {
	id: folderIds;
	title: string;
	images: imageProps[] | null;
	setImages: React.Dispatch<React.SetStateAction<imageProps[] | null>>;
};

const deletes: imageProps[] = [];

const ImageList = ({ id, title, images, setImages }: props) => {
	const [uploadOpen, setUploadOpen] = useState<boolean>(false); // Upload dialog open state
	const [bulkOpen, setBulkOpen] = useState<boolean>(false); // Bulk delete dialog open state
	const [change, setChange] = useState<boolean>(false); // Update change flag
	const [uploads, setUploads] = useState<File[] | null>(null); // Image uploads

	console.log(images, deletes);

	const handleUpdate = () => {
		deletes.forEach(({ id }) => deleteImage(id));
	};

	const handleDeleteImage = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		if (images) {
			const item = images.find(({ id }) => id === e.currentTarget.id);

			if (item) deletes.push(item);
			setImages(images.filter(({ id }) => id !== e.currentTarget.id));
			setChange(true);
		}
	};

	const handleBulkDelete = () => {
		deleteFolder(id).then(() => {
			setImages(null);
			setBulkOpen(false);
		});
	};

	const handleUpload = () => {
		const fd = new FormData();
		if (uploads)
			Array.from(uploads).forEach((upload) => fd.append('image', upload));

		postImages(fd, id).then(async () => {
			setUploads(null);
			setUploadOpen(false);
			setImages(await fetchFolder(id));
		});
	};

	return (
		<>
			<Box
				width='80%'
				height={images && images.length !== 0 ? 700 : 'auto'}
				mx='auto'
				my={4}
			>
				<Stack
					height='100%'
					direction='column'
					justifyContent='space-between'
				>
					<Typography variant='h3'>{title}</Typography>
					<Paper variant='outlined'>
						{images && images.length !== 0 ? (
							<Stack
								direction='row'
								alignItems='center'
								sx={{ overflowX: 'scroll' }}
							>
								{images?.map(({ id, path, order }, idx) => (
									<CardItem
										id={id}
										imgPath={path}
										key={idx}
										order={order}
										handleDelete={handleDeleteImage}
									/>
								))}
							</Stack>
						) : (
							<Typography textAlign='center' m={10}>
								No items in list
							</Typography>
						)}
					</Paper>
					<Stack
						my={1}
						direction='row'
						justifyContent='space-between'
					>
						<Button onClick={() => setUploadOpen(true)}>
							<Upload />
							<Typography>Upload File(s)</Typography>
						</Button>
						<Button onClick={handleUpdate} disabled={!change}>
							<Update />
							<Typography>Update</Typography>
						</Button>
						<Button onClick={() => setBulkOpen(true)}>
							<DeleteSweep />
							<Typography textAlign='center'>
								Bulk Delete
							</Typography>
						</Button>
					</Stack>
				</Stack>
			</Box>
			<UploadFileDialog
				open={uploadOpen}
				handleClose={() => setUploadOpen(false)}
				handleChange={(files: File[]) => setUploads(files)}
				handleUpload={handleUpload}
			/>
			<Dialog open={bulkOpen} onClose={() => setBulkOpen(false)}>
				<DialogTitle>Confirm to delete all images</DialogTitle>
				<DialogActions>
					<Button onClick={handleBulkDelete}>Confirm</Button>
					<Button onClick={() => setBulkOpen(false)}>Cancel</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default memo(ImageList);
