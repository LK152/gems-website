import type { NextPage } from 'next';
import { Box, Paper, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import Form from '@components/Form';

const ContactUs: NextPage = () => {
	return (
		<Box width='600px' mx='auto' my={8}>
			<Paper variant='outlined'>
				<Box my={4}>
					<Typography variant='h2' textAlign='center'>
						Contact Us
					</Typography>
					<Form />
				</Box>
			</Paper>
		</Box>
	);
};

export default ContactUs;
