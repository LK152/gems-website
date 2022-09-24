import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import Image from 'next/image';

const Home = ({ids}: idArrayProp) => {
	return (
		<ImageList sx={{ width: '80vw', minHeight: '1200px', mx: 'auto' }} cols={4}>
			{ids.map((id, idx) => {
				return (
					<ImageListItem key={idx}>
						<Image
							src={`https://drive.google.com/uc?export=view&id=${id}`}
							alt='gallery image'
							layout='fill'
                            objectFit='contain'
							quality={100} 
						/>
                        <ImageListItemBar title={'igem'}  />
					</ImageListItem>
				);
			})}
		</ImageList>
	);
};

export default Home;
