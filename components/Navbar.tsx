import { AppBar, Box, Toolbar, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import NextMuiLink from '@components/NextMuiLink';
import navbarStyles from '@styles/Navbar.module.css';
import logo from '@public/Pics/logo.png';
import usePreloadCtx from '@context/PreloadCtx';

const Navbar = () => {
	const { navbarLinks } = usePreloadCtx();

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='fixed'>
				<Toolbar component='nav'>
					<Stack direction='row' spacing={2} alignItems='center' width="100vw">
                        <Image src={logo} alt='logo' quality={100} width={140} height={50} />
                        <div style={{flexGrow: 1}}></div>
						{navbarLinks.map(({ title, path }, i) => (
							<NextMuiLink
								key={`${title}${i}`}
								href={path}
								variant='button'
								sx={{ textDecoration: 'none' }}
							>
								<Typography className={navbarStyles.navbarLink} textTransform="none">{title}</Typography>
							</NextMuiLink>
						))}
					</Stack>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navbar;
