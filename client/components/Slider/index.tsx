import { Circle } from '@mui/icons-material';
import { Box, Stack } from '@mui/material';

const Slider = (props: {images: imageProps[] | null}) => {
	return (
		<Box height={480}>
			<Stack direction='column'>
				<Stack direction='row'>
					<Circle sx={{opacity: 0.2}} />
					<Circle />
				</Stack>
			</Stack>
		</Box>
	);
};

export default Slider;
