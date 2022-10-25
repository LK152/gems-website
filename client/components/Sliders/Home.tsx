import Carousel from 'react-material-ui-carousel';
import ImageItem from './ImageItem';
import getAsyncApi from '@utilities/getAsyncApi';
import { useEffect, useState } from 'react';

const Slider: React.FC = () => {
	const [paths, setPaths] = useState<string[]>([]);

	useEffect(() => {
		getAsyncApi('http://localhost:8000/images/folder/homeSlider').then(
			(data: imageProps[]) =>
				setPaths(data.map(({ path }) => path.replaceAll('\\', '/')))
		);
	}, []);

	return (
		<Carousel height={480} animation='slide' duration={700}>
			{paths?.map((path, idx) => {
				return <ImageItem key={idx} path={path} />;
			})}
		</Carousel>
	);
};

export default Slider;
