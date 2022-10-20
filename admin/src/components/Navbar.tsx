import { AppBar, Toolbar } from '@mui/material';

const Navbar = () => {
	return (
		<AppBar
			position='fixed'
			sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
		>
			<Toolbar></Toolbar>
		</AppBar>
	);
};

export default Navbar;
