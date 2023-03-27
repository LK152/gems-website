import { Box } from '@mui/material';
import Slider from '@components/Slider';

const Curriculum = ({ images }: { images: imageProps[] }) => {
	return (
		<Box width={500} my={4} mx='auto'>
			<Slider images={images} alt='Math Curriculums' />
		</Box>
	);
};

export default Curriculum;
