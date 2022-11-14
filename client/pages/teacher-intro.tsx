import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import TeacherList from '@components/TeacherList';
import { Box } from '@mui/material';

export const getStaticProps = async () => {
	const res = await (
		await fetch('http://localhost:8000/images/folder/teachers')
	).json();

	return { props: { images: res } };
};

type props = {
	images: imageProps[] | null;
};

const TeacherIntro: NextPage<props> = ({ images }) => {
	const [teacherImages, setTeacherImages] = useState<imageProps[] | null>(
		null
	);

	useEffect(() => {
		setTeacherImages(images);
	}, [images]);

	return (
		<Box>
			{teacherImages?.map((img, idx) => (
				<TeacherList image={img} key={idx} text='s' />
			))}
		</Box>
	);
};

export default TeacherIntro;
