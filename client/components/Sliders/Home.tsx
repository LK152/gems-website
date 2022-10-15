import Carousel from 'react-material-ui-carousel';
import ImageItem from './ImageItem';

const Slider: React.FC<{ paths: string[] }> = ({ paths }) => {
    console.log(paths)
	return (
		<Carousel height={480} animation='slide' duration={700}>
			{paths?.map((path, idx) => {
				return <ImageItem key={idx} path={path} />;
			})}
		</Carousel>
	);
};

export default Slider;
