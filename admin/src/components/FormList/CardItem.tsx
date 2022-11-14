import {
	Box,
	Card,
	CardActions,
	CardContent,
	Stack,
	Typography,
	IconButton,
} from '@mui/material';
import { Delete } from '@mui/icons-material';

type props = {
	form: formProps;
    handleDeleteForm: any;
};

const CardItem = ({ form, handleDeleteForm }: props) => {
	return (
		<Box minWidth='200px'>
			<Card>
				<CardContent>
					<Typography variant='h4' textAlign='center'>
						{form.name}
					</Typography>
					<Stack direction='row' justifyContent='space-around'>
						<Typography variant='h6'>{form.school}</Typography>
						<Typography variant='h6'>{`G${form.grade}`}</Typography>
					</Stack>
					<Typography>{form.question}</Typography>
				</CardContent>
				<CardActions>
					<IconButton onClick={handleDeleteForm}>
						<Delete />
					</IconButton>
				</CardActions>
			</Card>
		</Box>
	);
};

export default CardItem;
