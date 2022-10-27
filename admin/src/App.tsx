import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import useCommonContext from './context/commonContext';

const App = () => {
	const { drawerWidth } = useCommonContext();

	return (
		<Box ml={drawerWidth}>
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</Box>
	);
};

export default App;
