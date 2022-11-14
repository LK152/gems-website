import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import FormList from '../components/FormList';

const fetchForms = async () => {
	const res = await fetch('http://localhost:8000/forms');

	return res.json();
};

const ContactUs = () => {
	const [forms, setForms] = useState<formProps[] | null>(null);

	console.log(forms);
	useEffect(() => {
		fetchForms().then((forms) => setForms(forms));
	}, []);

	return (
		<Box>
			<FormList forms={forms} />
		</Box>
	);
};

export default ContactUs;
