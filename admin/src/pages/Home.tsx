import { Box, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import ImageList from '../components/ImageList';

const fetchFolder = async (folder: string) => {
	const res = await fetch(`http://localhost:8000/images/folder/${folder}`);

	return res.json();
};

const Home = () => {
	const [sliderImages, setSliderImages] = useState<imageProps[] | null>(null);
	const [galleryImages, setGalleryImages] = useState<imageProps[] | null>(
		null
	);

	useEffect(() => {
		fetchFolder('homeSlider').then((images) => setSliderImages(images));
		fetchFolder('homeGallery').then((images) => setGalleryImages(images));
	}, []);

	return (
		<Box width='100%'>
			<Stack direction='column'>
				<ImageList images={sliderImages} />
				<ImageList images={galleryImages} />
			</Stack>
		</Box>
	);
};

export default Home;
