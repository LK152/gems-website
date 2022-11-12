import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import {
	Box,
	Paper,
	Stack,
	Typography,
	TextField,
	Button,
	Switch,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import useSessionStorage from '@hooks/useSessionStorage';
import Line from '@public/line.svg';
import { Phone } from '@mui/icons-material';
import Image from 'next/legacy/image';

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

const ContactUs: NextPage = () => {
	const [wordCount, setWordCount] = useState<number>(0);
	const [persist, setPersist] = useState<boolean>(false);
	const [isPhone, setIsPhone] = useState<boolean>(false);
	const [persistedForm, setPersistedForm] =
		useSessionStorage<formInputs | null>('persistedForm', null);
	const {
		formState: { isSubmitSuccessful, isDirty },
		control,
		handleSubmit,
		reset,
		watch,
		getValues,
	} = useForm<formInputs>({ defaultValues: defaultForm });
	const watchForm = watch();

	const onSubmit = async (data: formInputs) => {
		console.log(data);
		await axios.post('http://localhost:8000/forms', data);
	};

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
		setWordCount(
			persistedForm?.question ? persistedForm.question.length : 0
		);
	}, [persistedForm?.question]);

	// Set session storage useEffect hook
	useEffect(() => {
		setPersistedForm(persist ? watchForm : null);
	}, [watchForm, persist, setPersistedForm]);

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
							<Controller
								render={({ field }) => (
									<TextField
										required
										margin='normal'
										label='Name'
										autoComplete='name'
										{...field}
									/>
								)}
								name='name'
								control={control}
								rules={{ required: true }}
							/>
							<Controller
								render={({ field }) => (
									<TextField
										required
										margin='normal'
										label='School'
										autoComplete='school'
										{...field}
									/>
								)}
								name='school'
								control={control}
								rules={{ required: true }}
							/>
							<Controller
								render={({ field }) => (
									<TextField
										required
										margin='normal'
										label='Grade'
										autoComplete='off'
										{...field}
									/>
								)}
								name='grade'
								control={control}
								rules={{ required: true }}
							/>
							<Stack
								direction='row'
								alignItems='center'
								justifyContent='space-between'
							>
								<Controller
									render={({ field }) => {
										return isPhone ? (
											<TextField
												required
												margin='normal'
												label='Mobile'
												autoComplete='phone'
												{...field}
											/>
										) : (
											<TextField
												required
												margin='normal'
												label='Line ID'
												autoComplete='lineId'
												{...field}
											/>
										);
									}}
									name='contact'
									control={control}
									rules={{ required: true }}
								/>
								<Stack
									direction='row'
									alignItems='center'
									mx='auto'
								>
									<Box width='24px' height='100%'>
										<Image
											src={Line}
											alt='line'
											layout='responsive'
										/>
									</Box>
									<Switch
										checked={isPhone}
										onClick={() => setIsPhone(!isPhone)}
									/>
									<Phone />
								</Stack>
							</Stack>
							<Controller
								render={({ field }) => (
									<TextField
										required
										multiline
										minRows={4}
										maxRows={8}
										margin='normal'
										label='Question'
										inputProps={{ maxLength: charLim }}
										helperText={`${wordCount}/${charLim}`}
										{...field}
									/>
								)}
								name='question'
								control={control}
								rules={{ required: true }}
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
				</Box>
			</Paper>
		</Box>
	);
};

export default ContactUs;
