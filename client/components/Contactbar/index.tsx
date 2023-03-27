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
                borderRadius: '20px'
			}}
		>
			<Stack>
				<IconButton>
					<Facebook />
				</IconButton>
				<IconButton>
					<Email />
				</IconButton>
				<IconButton>
					<Instagram />
				</IconButton>
			</Stack>
		</Box>
	);
};

export default Contactbar;
