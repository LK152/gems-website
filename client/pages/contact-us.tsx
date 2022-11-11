import type { NextPage } from 'next';
import { useCallback, useEffect, useState } from 'react';
import {
	Box,
	Paper,
	Stack,
	Typography,
	TextField,
	Button,
	Switch,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import useSessionStorage from '@hooks/useSessionStorage';

interface formInputs {
	name?: string | undefined;
	school?: string | undefined;
	grade?: string | undefined;
	contact?: string | undefined;
	question?: string | undefined;
}

const charLim = 150;

const defaultForm = {
	name: '',
	school: '',
	grade: '',
	contact: '',
	question: '',
};

const ContactUs: NextPage = () => {
	const [wordCount, setWordCount] = useState<number>(0);
	const [persistedForm, setPersistedForm] = useSessionStorage<formInputs>(
		'persistedForm',
		defaultForm
	);
	const { register, handleSubmit, reset, watch } = useForm<formInputs>({
		defaultValues: persistedForm,
	});

	const onSubmit = async (data: formInputs) => {
		console.log(data);
		await axios
			.post('http://localhost:8000/forms', data)
			.then(() => reset());
	};

	useEffect(() => {
		if (persistedForm.question !== undefined)
			setWordCount(persistedForm.question.length);
	}, [persistedForm.question]);

	useEffect(() => {
		const sub = watch((val) => setPersistedForm(val));
		return () => sub.unsubscribe();
	}, [setPersistedForm, watch]);

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
								helperText={`${wordCount}/${charLim}`}
								{...register('question')}
							/>
							<Button variant='contained' type='submit'>
								<Typography color='white'>Submit</Typography>
							</Button>
						</Stack>
					</Box>
				</Box>
			</Paper>
		</Box>
	);
};

export default ContactUs;
