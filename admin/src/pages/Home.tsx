import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import ImageList from '../components/ImageList';
import { folderIds } from '../types/global';

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
		fetchFolder('homeSlider').then((images) => {
			if (images.length !== 0) setSliderImages(images);
		});
		fetchFolder('homeGallery').then((images) => {
			if (images.length !== 0) setGalleryImages(images);
		});
	}, []);

	return (
		<Box width='100%' my={4}>
			<ImageList
				id={folderIds.homeSlider}
				title='Slider Images'
				images={sliderImages}
				setImages={setSliderImages}
			/>
			<ImageList
				id={folderIds.homeGallery}
				title='Gallery Images'
				images={galleryImages}
				setImages={setGalleryImages}
			/>
		</Box>
	);
};

export default Home;
