import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import Item from './ImageItem';

const Home = ({ids}: idArrayProp) => {
	return (
		<ImageList sx={{ width: '80vw', minHeight: '1800px', mx: 'auto' }} cols={4}>
			{ids.map((id, idx) => {
				return (
					<ImageListItem key={idx}>
                        <Item id={id} />
                        <ImageListItemBar title={'igem'}  />
					</ImageListItem>
				);
			})}
		</ImageList>
	);
};

export default Home;
