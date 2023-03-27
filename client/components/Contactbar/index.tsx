import { Box, IconButton, Stack } from '@mui/material';
import { Facebook, Email, Instagram } from '@mui/icons-material';

const Contactbar = () => {
	return (
		<Box
			sx={{
				position: 'fixed',
				bottom: '100px',
				right: '20px',
				backgroundColor: 'white',
				borderRadius: '20px',
			}}
		>
			<Stack>
				<IconButton href='https://www.facebook.com/profile.php?id=100083182389754'>
					<Facebook />
				</IconButton>
				<IconButton href='mailto: social.media@gems.com.tw'>
					<Email />
				</IconButton>
				<IconButton href='https://www.instagram.com/gems.academy_/'>
					<Instagram />
				</IconButton>
			</Stack>
		</Box>
	);
};

export default Contactbar;
