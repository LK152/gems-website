import Carousel from 'react-material-ui-carousel';
import usePreloadCtx from '@context/PreloadCtx';
import ImageItem from './ImageItem';

const Slider = () => {
	const { imageArray } = usePreloadCtx();

	return (
		<Carousel height={480} animation='slide' duration={700}>
			{imageArray.map((id, idx) => {
				return <ImageItem key={idx} id={id} />;
			})}
		</Carousel>
	);
};

export default Slider;