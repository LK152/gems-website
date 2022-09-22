import type { NextPage } from 'next';
import Slider from '@components/Sliders/Home';
import Gallery from '@components/Gallery/Home';

const Home: NextPage = () => {
	return (
		<>
			<Slider />
			<Gallery />
		</>
	);
};

export default Home;
