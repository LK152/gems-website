import { AppBar, Box, Toolbar, Stack, Typography } from '@mui/material';
import NextMuiLink from 'components/NextMuiLink';
import navbarStyles from 'styles/Navbar.module.css';

const Navbar = () => {
	const navbarLinks: navbarLinkProps[] = [
		{ title: 'TOEFL', path: '/toefl' },
		{ title: 'IELTS', path: '/ielts' },
		{ title: 'SAT', path: '/sat' },
		{ title: 'GRE', path: '/gre' },
		{ title: 'GMAT', path: '/gmat' },
	];

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='fixed'>
				<Toolbar component='nav'>
					<Stack direction='row' spacing={2}>
						{navbarLinks.map(({ title, path }, i) => (
							<NextMuiLink
								key={`${title}${i}`}
								href={path}
								variant='button'
								sx={{ textDecoration: 'none' }}
							>
								<Typography className={navbarStyles.navbarLink}>{title}</Typography>
							</NextMuiLink>
						))}
					</Stack>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navbar;
