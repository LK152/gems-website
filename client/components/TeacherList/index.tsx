import { Box } from '@mui/material';
import Image from 'next/legacy/image';

type props = {
	image: imageProps;
	text: string;
};

const TeacherList = ({ image, text }: props) => {
	return (
		<Box>
			<Image
				alt='teacher pic'
				src={`http://localhost:8000/${image.path}`}
				layout='fill'
			/>
		</Box>
	);
};

export default TeacherList;
