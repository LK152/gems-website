import {
	Box,
	Button,
	Stack,
	Typography,
	Snackbar,
	Alert,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
} from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ImageList from '../components/ImageList';
import UploadFileDialog from '../components/UploadFileDialog';

const fetchFolder = async (folder: string) => {
	const res = await fetch(`http://localhost:8000/images/folder/${folder}`);

	return res.json();
};

const Home = () => {
	const [sliderImages, setSliderImages] = useState<imageProps[] | null>(null);
	const [galleryImages, setGalleryImages] = useState<imageProps[] | null>(
		null
	);
	const [uploadedImages, setUploadImages] = useState<File[] | null>(null);
	const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
	const [dialogOpen, setDialogOpen] = useState<boolean>(false);
    const [uploadTarget, setUploadTarget] = useState<string | null>(null);

	console.log(uploadedImages);

	useEffect(() => {
		fetchFolder('homeSlider').then((images) => setSliderImages(images));
		fetchFolder('homeGallery').then((images) => setGalleryImages(images));
	}, []);

	const handleDialogOpen = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		setDialogOpen(true);
        setUploadTarget(e.currentTarget.id);
	};

	const handleClose = () => {
		setDialogOpen(false);
		setUploadImages(null);
	};

	const handleUpload = async (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		// const fd = new FormData();
		// uploadedImages?.forEach((file) => {
		//     fd.append('image', file);
		// })
		console.log(e.currentTarget.name);
	};

	return (
		<Box width='100%' my={4}>
			<ImageList
				id='homeSlider'
				title='Slider Images'
				images={sliderImages}
				setSnackbarOpen={setSnackbarOpen}
				handleDialogOpen={handleDialogOpen}
			/>
			<ImageList
				id='homeGallery'
				title='Gallery Images'
				images={galleryImages}
				setSnackbarOpen={setSnackbarOpen}
				handleDialogOpen={handleDialogOpen}
			/>
			<Snackbar
				open={snackbarOpen}
				autoHideDuration={6000}
				onClose={() => setSnackbarOpen(false)}
			>
				<Alert
					severity='success'
					sx={{ width: '100%' }}
					onClose={() => setSnackbarOpen(false)}
				>
					Image deleted
				</Alert>
			</Snackbar>
			<UploadFileDialog
				open={dialogOpen}
				handleClose={handleClose}
				handleChange={(files: File[]) => setUploadImages(files)}
                handleUpload={handleUpload}
			/>
		</Box>
	);
};

export default Home;
