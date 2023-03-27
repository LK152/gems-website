import { Box, Stack, Typography } from '@mui/material';
import NextMuiLink from './NextMuiLink';
import { navbarPaths } from './Navbar';
import { Map, Phone } from '@mui/icons-material';

const Footer: React.FC = () => {
	return (
		<Box
			component='footer'
			sx={{
				width: '100%',
				minHeight: '480px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: '#192148',
			}}
		>
			<Stack direction='row' spacing={3}>
				{navbarPaths.map(({ title, subItems }, idx) => {
					return (
						<Stack key={idx} direction='column'>
							<Typography
								fontWeight='bold'
								fontSize='1.5rem'
								color='white'
							>
								{title}
							</Typography>
							{subItems.map(({ title, path }, i) => {
								return (
									<NextMuiLink
										key={i}
										href={path}
										sx={{ textDecoration: 'none' }}
									>
										<Typography color='white'>
											{title}
										</Typography>
									</NextMuiLink>
								);
							})}
						</Stack>
					);
				})}
				<Stack direction='column'>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1685.8081602328343!2d121.59096464009326!3d25.081270035180296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ada919cd3a7d%3A0x7620850f4694429!2sGEMS%20Academy!5e0!3m2!1sen!2stw!4v1679540205773!5m2!1sen!2stw'
						width='400'
						height='300'
						style={{ border: 0 }}
						allowFullScreen
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'
					></iframe>
					<Stack
						direction='row'
						spacing={1}
						mt={2}
						style={{ color: 'white' }}
					>
						<Phone />
						<Typography>
							<a
								href='tel: 0287924755'
								style={{
									textDecoration: 'none',
									color: 'white',
								}}
							>
								02-8792-4755
							</a>
						</Typography>
					</Stack>
					<Stack
						direction='row'
						spacing={1}
						mt={2}
						style={{ color: 'white' }}
					>
						<Map />
						<Typography color='white'>
							114台北市內湖區成功路三段174巷15號2號樓之 1
						</Typography>
					</Stack>
				</Stack>
			</Stack>
		</Box>
	);
};

export default Footer;
