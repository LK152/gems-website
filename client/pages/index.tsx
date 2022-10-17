import type { NextPage } from 'next';
import Slider from '@components/Sliders/Home';
import Gallery from '@components/Gallery/Home';
import { useEffect, useState } from 'react';
import getAsyncApi from '@utilities/getAsyncApi';

const Home: NextPage = () => {
	const [imagePaths, setImagePaths] = useState<any | null>(null);

	useEffect(() => {
		getAsyncApi('images/list').then((res) => {
			const data: { homeSlider: string[] | null } = {
				homeSlider: res
					?.filter(
						(image: imageProps) => image.folderId == 'homeSlider'
					)
					.map((image: imageProps) => image.path),
			};

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
