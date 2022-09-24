import type { NextPage } from 'next';
import Slider from '@components/Sliders/Home';
import Gallery from '@components/Gallery/Home';
import { google } from 'googleapis';
import auth from '@utilities/createJWT';

const Home: NextPage<{ sliderId: string[]; galleryId: [] }> = ({
	sliderId,
	galleryId,
}) => {
	return (
		<>
        {console.log(sliderId)}
			<Slider ids={sliderId} />
			<Gallery ids={galleryId} />
		</>
	);
};

export const getStaticProps = async () => {
	const drive = google.drive({ version: 'v3', auth });
	const slider = await drive.files.list({
		q: "'1C9JmIZ5ZqFrxdOMid3H0h70yUhU51RnE' in parents",
		fields: 'nextPageToken, files(id)',
		spaces: 'drive',
	});

	const gallery = await drive.files.list({
		q: "'1Bw7n9K5Z4b7xHfUE4MSW-n6Y8QHuCPzv' in parents",
		fields: 'nextPageToken, files(id)',
		spaces: 'drive',
	});

	const sliderId = slider.data.files?.map((file) => file.id);
	const galleryId = gallery.data.files?.map((file) => file.id);

	return {
		props: {
			sliderId,
			galleryId,
		},
	};
};

export default Home;
