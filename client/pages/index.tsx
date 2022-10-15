import type { NextPage } from 'next';
import Slider from '@components/Sliders/Home';
import Gallery from '@components/Gallery/Home';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home: NextPage = () => {
	const [imagePaths, setImagePaths] = useState<any | null>(null);

	useEffect(() => {
		axios.get('http://localhost:8000/images').then((res) => {
			const response = res?.data;

			const data: { homeSlider: string[] | null } = {
				homeSlider: response.data
					.filter((image: imageProps) => image.folder == 'homeSlider')
					.map((image: imageProps) => image.path),
			};
            console.log(data)

			setImagePaths(data);
		});
	}, []);

	return (
		<>
			<Slider paths={imagePaths?.homeSlider} />
		</>
	);
};

export default Home;
