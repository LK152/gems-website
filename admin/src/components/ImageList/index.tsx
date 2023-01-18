import { DeleteSweep, Update, Upload } from '@mui/icons-material';
import { memo, useEffect, useState } from 'react';
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
import {
	fetchFolder,
	postImages,
	deleteImage,
	deleteFolder,
	patchImages,
} from '../../api';
import CardItem from './CardItem';

type props = {
	id: folderIds;
	title: string;
	images: imageProps[] | null;
	setImages: React.Dispatch<React.SetStateAction<imageProps[] | null>>;
};

const deletes: imageProps[] = [];

const ImageList = ({ id, title, images, setImages }: props) => {
	const [newImages, setNewImages] = useState<imageProps[] | null>(null); // New image array
	const [uploadOpen, setUploadOpen] = useState<boolean>(false); // Upload dialog open state
	const [bulkOpen, setBulkOpen] = useState<boolean>(false); // Bulk delete dialog open state
	const [uploads, setUploads] = useState<File[] | null>(null); // Image uploads

	useEffect(() => setNewImages(images), [images]);

	const handleUpdate = () => {
		deletes.forEach(({ id }) => deleteImage(id));
		patchImages(newImages).then(() => setImages(newImages));
	};

	const handleDeleteImage = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		if (newImages) {
			const itemIdx = newImages.findIndex(
				({ id }) => id === e.currentTarget.id
			);

			deletes.push(newImages[itemIdx]);
			setNewImages(
				newImages
					.filter(({ id }) => id !== e.currentTarget.id)
					.map((image, idx) =>
						idx >= itemIdx
							? { ...image, order: image.order - 1 }
							: image
					)
			);
		}
	};

	const handleBulkDelete = () => {
		deleteFolder(id).then(() => {
			setImages(null);
			setNewImages(null);
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
			setNewImages(await fetchFolder(id));
		});
	};

	const handleLeftShift = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		const currIdx = newImages?.findIndex(
			({ id }) => id === e.currentTarget.id
		);

		if (newImages && currIdx !== undefined)
			setNewImages(
				newImages
					.map((image, idx) => {
						if (currIdx) {
							if (idx === currIdx)
								return { ...image, order: image.order - 1 };
							else if (idx === currIdx - 1)
								return { ...image, order: image.order + 1 };
							else return image;
						} else {
							if (idx === currIdx)
								return {
									...image,
									order: newImages.slice(-1)[0].order,
								};
							else return { ...image, order: image.order - 1 };
						}
					})
					.sort((a, b) => a.order - b.order)
			);
	};

	const handleRightShift = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		const currIdx = newImages?.findIndex(
			({ id }) => id === e.currentTarget.id
		);

		if (newImages && currIdx !== undefined)
			setNewImages(
				newImages
					.map((image, idx) => {
						if (currIdx !== newImages.slice(-1)[0].order) {
							if (idx === currIdx)
								return { ...image, order: image.order + 1 };
							else if (idx === currIdx + 1)
								return { ...image, order: image.order - 1 };
							else return image;
						} else {
							if (idx === currIdx)
								return {
									...image,
									order: newImages.slice(0)[0].order,
								};
							else return { ...image, order: image.order + 1 };
						}
					})
					.sort((a, b) => a.order - b.order)
			);
	};

	return (
		<>
			<Box width='80%' mx='auto' my={4}>
				<Stack
					height='100%'
					direction='column'
					justifyContent='space-between'
				>
					<Typography variant='h3'>{title}</Typography>
					<Paper variant='outlined'>
						{newImages && newImages.length !== 0 ? (
							<Stack
								direction='row'
								alignItems='center'
								sx={{ overflowX: 'scroll' }}
							>
								{newImages?.map((image, idx) => (
									<CardItem
										key={idx}
										image={image}
										handleDelete={handleDeleteImage}
										handleLeftShift={handleLeftShift}
										handleRightShift={handleRightShift}
									/>
								))}
							</Stack>
						) : (
							<Typography textAlign='center' m={10}>
								No items in list
							</Typography>
						)}
					</Paper>
					<Stack direction='row' justifyContent='space-between'>
						<Button onClick={() => setUploadOpen(true)}>
							<Upload />
							<Typography>Upload File(s)</Typography>
						</Button>
						<Button
							onClick={handleUpdate}
							disabled={
								JSON.stringify(newImages) ===
								JSON.stringify(images)
							}
						>
							<Update />
							<Typography>Update</Typography>
						</Button>
						<Button
							disabled={images === null || images?.length === 0}
							onClick={() => setBulkOpen(true)}
						>
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
				disabled={!uploads || uploads?.length === 0}
				handleClose={() => setUploadOpen(false)}
				handleChange={(files: File[]) => setUploads(files)}
				handleUpload={handleUpload}
			/>
			<Dialog open={bulkOpen} onClose={() => setBulkOpen(false)}>
				<DialogTitle>Confirm to delete all newImages</DialogTitle>
				<DialogActions>
					<Button onClick={handleBulkDelete}>Confirm</Button>
					<Button onClick={() => setBulkOpen(false)}>Cancel</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default memo(ImageList);
