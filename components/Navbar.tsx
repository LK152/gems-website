import { AppBar, Box, Toolbar, Stack, Typography } from '@mui/material';
import NextMuiLink from 'components/NextMuiLink';
import lightThemeOptions from 'styles/lightThemeOptions';

const Navbar = () => {
	const navbarLinks: navbarLinkProps[] = [{ title: 'TOEFL', path: '/toefl' }, {title: 'IELTS', path: '/ielts'}];

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar component='nav'>
					<Stack direction='row' spacing={2}>
						{navbarLinks.map(({ title, path }, i) => (
							<NextMuiLink
								key={`${title}${i}`}
								href={path}
								variant='button'
							>
								<Typography color='white'>{title}</Typography>
							</NextMuiLink>
						))}
					</Stack>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navbar;
