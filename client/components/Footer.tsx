import usePreloadCtx from '@context/PreloadCtx';
import { Box, Stack, Typography } from '@mui/material';
import NextMuiLink from './NextMuiLink';

const Footer = () => {
	const { navbarCtx } = usePreloadCtx();

	return (
		<Box
			component='footer'
			sx={{
				width: '100%',
				height: '480px',
				display: 'flex',
				alignItems: 'center', 
                justifyContent: 'center', 
                backgroundColor: '#192148'
			}}
		>
			<Stack direction='row' spacing={4}>
				{navbarCtx.map(({ title, subItems }, idx) => {
					return (
						<Stack key={idx} direction='column'>
							<Typography fontWeight='bold' fontSize='1.5rem' color='white'>{title}</Typography>
							{subItems.map(({ title, path }, i) => {
								return (
									<NextMuiLink key={i} href={path} sx={{textDecoration: 'none'}}>
										<Typography color='white'>{title}</Typography>
									</NextMuiLink>
								);
							})}
						</Stack>
					);
				})}
			</Stack>
		</Box>
	);
};

export default Footer;
