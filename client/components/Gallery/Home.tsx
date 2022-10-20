import { Box, Grid } from '@mui/material';
import getAsyncApi from '@utilities/getAsyncApi';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Home: React.FC = () => {
	const [paths, setPaths] = useState<string[]>([]);

	useEffect(() => {
		getAsyncApi('public/images/get/folder/homeGallery').then(
			(data: imageProps[]) => {
				setPaths(
					data.map(({ path }) =>
						path.replaceAll('\\', '/').replace('public', '')
					)
				);
			}
		);
	}, []);

	return <Box width='100vw' height='100vh'></Box>;
};

export default Home;
