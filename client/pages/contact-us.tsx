import type { NextPage } from 'next';
import { useState } from 'react';
import {
	Box,
	Paper,
	Stack,
	Typography,
	TextField,
	Button,
	Switch,
	FormControlLabel,
} from '@mui/material';
import theme from '@styles/lightThemeOptions';
import { useForm } from 'react-hook-form';
import axios from 'axios';

interface formInputs {
	name: string;
	school: string;
	grade: string | number;
	contact: string;
	question: string;
}

const charLim = 150;

const ContactUs: NextPage = () => {
	const [persist, setPersist] = useState<boolean>(false);
	const { register, watch, handleSubmit, reset } = useForm<formInputs>();
	const watchQuestion = watch('question', '');

	const onSubmit = async (data: formInputs) => {
		console.log(data);
		await axios
			.post('http://localhost:8000/forms', data)
			.then(() => reset());
	};

	return (
		<Box width='40%' mx='auto' my={8}>
			<Paper variant='outlined'>
				<Box my={4}>
					<Typography variant='h2' textAlign='center'>
						Contact Us
					</Typography>
					<Box
						component='form'
						onSubmit={handleSubmit(onSubmit)}
						width='60%'
						mx='auto'
					>
						<Stack
							height='100%'
							direction='column'
							justifyContent='space-evenly'
						>
							<TextField
								required
								margin='normal'
								label='Name'
								{...register('name')}
							/>
							<TextField
								required
								margin='normal'
								label='School'
								{...register('school')}
							/>
							<TextField
								required
								margin='normal'
								label='Grade'
								{...register('grade')}
							/>
							<TextField
								required
								margin='normal'
								label='Contact'
								helperText='Phone number or Line ID'
								{...register('contact')}
							/>
							<TextField
								required
								multiline
								minRows={4}
								maxRows={8}
								margin='normal'
								label='Question'
								inputProps={{ maxLength: charLim }}
								helperText={
									watchQuestion &&
									`${watchQuestion.length}/${charLim}`
								}
								{...register('question')}
							/>
							<Button variant='contained' type='submit'>
								<Typography color='white'>Submit</Typography>
							</Button>
							<Stack direction='row' alignItems='center'>
								<Switch
									checked={persist}
									onChange={() => setPersist(!persist)}
								/>
								<Typography>Persist form?</Typography>
							</Stack>
						</Stack>
					</Box>
				</Box>
			</Paper>
		</Box>
	);
};

export default ContactUs;
