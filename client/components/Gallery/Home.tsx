import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import Item from './ImageItem';

const Home: React.FC<{ paths: string[] }> = ({ paths }) => {
	return (
		<ImageList
			sx={{ width: '80vw', minHeight: '1800px', mx: 'auto' }}
			cols={4}
		>
			{paths.map((path, idx) => {
				return (
					<ImageListItem key={idx}>
						<Item path={path} />
						<ImageListItemBar title={'igem'} />
					</ImageListItem>
				);
			})}
		</ImageList>
	);
};

export default Home;
