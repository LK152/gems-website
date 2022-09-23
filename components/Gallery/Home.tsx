import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import usePreloadCtx from '@context/PreloadCtx';
import Image from 'next/image';

const Home = () => {
	const { homeGallery } = usePreloadCtx();

	return (
		<ImageList sx={{ width: '80vw', minHeight: '1200px', mx: 'auto' }} cols={4}>
			{homeGallery.map((id, idx) => {
				return (
					<ImageListItem key={idx}>
						<Image
							src={`https://drive.google.com/uc?id=${id}`}
							alt='gallery image'
							layout='fill'
                            objectFit='contain'
							quality={100} 
                            priority
						/>
                        <ImageListItemBar title={'igem'}  />
					</ImageListItem>
				);
			})}
		</ImageList>
	);
};

export default Home;
