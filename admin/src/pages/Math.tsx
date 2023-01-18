import { Box } from '@mui/material';
import { useState } from 'react';
import ImageList from '../components/ImageList';
import { folderIds } from '../types/global';

const Math = () => {
	const [curriculumImages, setCurriculumImages] = useState<
		imageProps[] | null
	>(null);

	return (
		<Box width='100%'>
			<ImageList
				id={folderIds.mathCurriculums}
				title='Math Curriculums'
				images={curriculumImages}
				setImages={setCurriculumImages}
			/>
		</Box>
	);
};

export default Math;
