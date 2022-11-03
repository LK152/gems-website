import type { NextPage } from 'next';
import Slider from '@components/Slider';
import Gallery from '@components/Gallery';
import { useEffect, useState } from 'react';

const fetchFolderImages = async (folder: string) => {
	const res = await fetch(`http://localhost:8000/images/folder/${folder}`);

	return res.json();
};

const Home: NextPage = () => {
	const [sliderImages, setSliderImages] = useState<imageProps[] | null>(null);
	const [galleryImages, setGalleryImages] = useState<imageProps[] | null>(
		null
	);

	useEffect(() => {
		fetchFolderImages('homeSlider').then((res: imageProps[]) => {
			setSliderImages(res.length != 0 ? res : null);
		});

		fetchFolderImages('homeGallery').then((res: imageProps[]) => {
			setGalleryImages(res.length != 0 ? res : null);
		});
	}, []);
    console.log(sliderImages)

	return (
		<>
			{sliderImages && <Slider images={sliderImages} />}
			{galleryImages && <Gallery images={galleryImages} />}
		</>
	);
};

export default Home;
