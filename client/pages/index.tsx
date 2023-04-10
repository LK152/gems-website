import type { NextPage } from 'next';
import Slider from '@components/Slider';
import Gallery from '@components/Gallery';
import { useState, useEffect } from 'react';

export const getServerSideProps = async () => {
	const slider = await (
		await fetch('http://localhost:8000/images/folder/homeSlider')
	).json();
	const gallery = await (
		await fetch('http://localhost:8000/images/folder/homeGallery')
	).json();

	return { props: { slider, gallery } };
};

type props = {
	slider: imageProps[] | null;
	gallery: imageProps[] | null;
};

const Home: NextPage<props> = ({ slider, gallery }) => {
	const [sliderImages, setSliderImages] = useState<imageProps[] | null>(null);
	const [galleryImages, setGalleryImages] = useState<imageProps[] | null>(
		null
	);

	useEffect(() => {
		setSliderImages(slider);
		setGalleryImages(gallery);
	}, [slider, gallery]);

	return (
		<>
			<Slider images={sliderImages} alt='Slider Images' />
			<Gallery images={galleryImages} alt='Gallery Images' />
		</>
	);
};

export default Home;
