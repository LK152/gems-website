import CardItem from './CardItem';
import { Box, Grid } from '@mui/material';

type props = {
	forms: formProps[] | null;
};

const FormList = ({ forms }: props) => {
	const handleDeleteForm = () => {};

	return (
		<Box>
			<Grid container>
				{forms && forms?.length !== 0
					? forms?.map((form, idx) => (
							<Grid key={idx} item>
								<CardItem
									form={form}
									handleDeleteForm={handleDeleteForm}
								/>
							</Grid>
					  ))
					: 'none'}
			</Grid>
		</Box>
	);
};

export default FormList;
