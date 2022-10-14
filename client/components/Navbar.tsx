import { AppBar, Box, Toolbar, Stack, Typography, styled } from '@mui/material';
import Image from 'next/image';
import NextMuiLink from '@components/NextMuiLink';
import logo from '@public/Pics/logo.png';
import usePreloadCtx from '@context/PreloadCtx';
import Dropdown from './Dropdown';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const Navbar = () => {
	const { navbarCtx } = usePreloadCtx();

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
							<Box display='flex'>
								<Image
									src={logo}
									alt='logo'
									quality={100}
									width={128}
									height={45}
                                    priority
								/>
							</Box>
						</NextMuiLink>
						<div style={{ flexGrow: 1 }} />
						{navbarCtx.map(({ title, subItems }, idx) => {
							return (
								<Dropdown
									key={idx}
									title={title}
									subItems={subItems}
								/>
							);
						})}
					</Stack>
				</Toolbar>
			</AppBar>
			<Offset />
		</Box>
	);
};

export default Navbar;
