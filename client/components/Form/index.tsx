import {
	Stack,
	Box,
	TextField,
	Button,
	Typography,
	Switch,
} from '@mui/material';
import Image from 'next/legacy/image';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useSessionStorage from '@hooks/useSessionStorage';
import axios from 'axios';
import Line from '@public/line.svg';
import { Phone } from '@mui/icons-material';

interface formInputs {
	name: string;
	school: string;
	grade: string;
	contact: string;
	question: string;
}

const defaultForm: formInputs = {
	name: '',
	school: '',
	grade: '',
	contact: '',
	question: '',
};

const charLim = 150;

const Form = () => {
	const [wordCount, setWordCount] = useState<number>(0);
	const [isPhone, setIsPhone] = useState<boolean>(false);
	const [persist, setPersist] = useState<boolean>(false);
	const [persistedForm, setPersistedForm] =
		useSessionStorage<formInputs | null>('persistedForm', null);
	const {
		formState: { isSubmitSuccessful },
		handleSubmit,
		reset,
		watch,
		getValues,
		register,
	} = useForm<formInputs>({ defaultValues: defaultForm });
	const watchForm = watch();

	useEffect(() => {
		if (persistedForm) {
			setPersist(true);
			reset(persistedForm);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// Check persist on component mount
	useEffect(() => {
		if (persist) setPersistedForm(getValues());
		else setPersistedForm(null);
	}, [persist, setPersistedForm, getValues]);

	// Reset after submit useEffect hook
	useEffect(() => {
		if (isSubmitSuccessful) {
			if (persist) setPersistedForm(null);
			reset(defaultForm);
		}
	}, [isSubmitSuccessful, persist, setPersistedForm, reset]);

	// Word count useEffect hook
	useEffect(() => {
		setWordCount(watchForm.question ? watchForm.question.length : 0);
	}, [watchForm.question]);

	// Set session storage useEffect hook
	useEffect(() => {
		setPersistedForm(persist ? watchForm : null);
	}, [watchForm, persist, setPersistedForm]);

	const onSubmit = async (data: formInputs) => {
		console.log(data);
		await axios.post('http://localhost:8000/forms', data);
	};

	return (
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
					autoComplete='name'
					{...register('name')}
				/>
				<TextField
					required
					margin='normal'
					label='School'
					autoComplete='school'
					{...register('school')}
				/>
				<TextField
					required
					margin='normal'
					label='Grade'
					autoComplete='off'
					{...register('grade')}
				/>
				<Stack
					direction='row'
					alignItems='center'
					justifyContent='space-between'
				>
					<TextField
						required
						margin='normal'
						label={isPhone ? 'Mobile' : 'Line ID'}
						autoComplete={isPhone ? 'mobile' : 'lineId'}
						{...register('contact')}
					/>
					<Stack direction='row' alignItems='center' mx='auto'>
						<Box width='24px' height='100%'>
							<Image src={Line} alt='line' layout='responsive' />
						</Box>
						<Switch
							checked={isPhone}
							onClick={() => setIsPhone(!isPhone)}
						/>
						<Phone />
					</Stack>
				</Stack>
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
				<Stack direction='row' alignItems='center'>
					<Switch
						checked={persist}
						onClick={() => setPersist(!persist)}
					/>
					<Typography>Persist form?</Typography>
				</Stack>
			</Stack>
		</Box>
	);
};

export default Form;
