import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import Item from './ImageItem';
import getAsyncApi from '@utilities/getAsyncApi';
import { useState, useEffect } from 'react';

const Home: React.FC = () => {
	const [paths, setPaths] = useState<string[]>([]);

	useEffect(() => {
		getAsyncApi('images/get/folder/homeGallery').then(
			(data: imageProps[]) => {
				setPaths(
					data.map(({ path }) =>
						path.replaceAll('\\', '/').replace('public', '')
					)
				);
			}
		);
	}, []);

	return (
		<ImageList
			sx={{ width: '80vw', minHeight: '1800px', mx: 'auto' }}
			cols={4}
		>
			{paths.map((path, idx) => {
				return (
					<ImageListItem key={idx}>
						<Item path={path} />
					</ImageListItem>
				);
			})}
		</ImageList>
	);
};

export default Home;
