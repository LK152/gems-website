import { AppBar, Box, Toolbar, Stack, Typography, styled } from '@mui/material';
import Image from 'next/image';
import NextMuiLink from '@components/NextMuiLink';
import navbarStyles from '@styles/Navbar.module.css';
import logo from '@public/Pics/logo.png';
import usePreloadCtx from '@context/PreloadCtx';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const Navbar = () => {
	const { navbarLinks } = usePreloadCtx();

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='fixed'>
				<Toolbar component='nav' sx={{ minHeight: '72px' }}>
					<Stack
						direction='row'
						spacing={2}
						alignItems='center'
						width='100vw'
					>
						<NextMuiLink href='/'>
							<Box display='block'>
								<Image
									src={logo}
									alt='logo'
									quality={100}
                                    width={128}
                                    height={45} 
								/>
							</Box>
						</NextMuiLink>
						<div style={{ flexGrow: 1 }} />
						{navbarLinks.map(({ title, path }, i) => (
							<NextMuiLink
								key={`${title}${i}`}
								href={path}
								variant='button'
								sx={{ textDecoration: 'none' }}
							>
								<Typography
									className={navbarStyles.navbarLink}
									textTransform='none'
								>
									{title}
								</Typography>
							</NextMuiLink>
						))}
					</Stack>
				</Toolbar>
			</AppBar>
			<Offset />
		</Box>
	);
};

export default Navbar;
