import { AppBar, Toolbar, styled, Box } from '@mui/material';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const Navbar = () => {
	return (
		<Box flexGrow={1}>
			<AppBar
				position='fixed'
				sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
			>
				<Toolbar></Toolbar>
			</AppBar>
			<Offset />
		</Box>
	);
};

export default Navbar;
