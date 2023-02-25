import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import ImageList from '../components/ImageList';
import { folderIds } from '../types/global';

const fetchFolder = async (folder: string) => {
	const res = await fetch(`http://localhost:8000/images/folder/${folder}`);

	return res.json();
};

const Math = () => {
	const [curriculumImages, setCurriculumImages] = useState<
		imageProps[] | null
	>(null);

	useEffect(() => {
		fetchFolder('mathCurriculums').then((images) => {
			if (images.length !== 0) setCurriculumImages(images);
		});
	}, []);

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
