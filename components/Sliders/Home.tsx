import Carousel from 'react-material-ui-carousel';
import ImageItem from './ImageItem';

const Slider = ({ids}: idArrayProp) => {
	return (
		<Carousel height={480} animation='slide' duration={700}>
			{ids.map((id, idx) => {
				return <ImageItem key={idx} id={id} />;
			})}
		</Carousel>
	);
};

export default Slider;
