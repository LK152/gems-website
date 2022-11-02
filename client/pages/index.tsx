import type { NextPage } from 'next';
import Slider from '@components/Slider';
import Gallery from '@components/Gallery';
import { useEffect, useState, use } from 'react';

const fetchImages = async () => {
	const res = await fetch('http://localhost:8000/images', {
		cache: 'force-cache',
	});

	return res.json();
};

const Home: NextPage = () => {
	const [images, setImages] = useState<imageProps[] | null>(null);
    const res = use(fetchImages())
    console.log(res)

	return (
		<>
			<Slider images={images} />
		</>
	);
};

export default Home;
