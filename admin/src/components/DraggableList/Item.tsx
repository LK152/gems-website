import { LoadingButton } from '@mui/lab';
import { Card, Stack, Typography } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { Draggable } from 'react-beautiful-dnd';
import { useState } from 'react';
import axios from 'axios';

const Item = ({ item, index, setItems }: draggableListItemProps) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const handleDelete = async (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		setIsLoading(true);
		setItems((curr) => {
			const itemIdx = curr.findIndex(
				(it) => it.id === e.currentTarget.id
			);

			if (itemIdx !== -1) curr.splice(itemIdx, 1);

			return curr;
		});

		await axios
			.delete(`http://localhost:8000/images/${e.currentTarget.id}`)
			.then(() => {
				setIsLoading(false);
			});
	};

	return (
		<Draggable draggableId={item.id} index={index}>
			{(provided, snapshot) => (
				<Card
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					elevation={4}
					sx={{ minWidth: '20%', height: 'fit-content' }}
				>
					<img
						src={`http://localhost:8000/${item.path}`}
						alt='slider images'
						width='100%'
						style={{
							objectFit: 'contain',
						}}
					/>
					<Stack
						direction='row'
						alignItems='center'
						justifyContent='space-evenly'
					>
						<Typography variant='caption'>
							{`Order: ${item.order + 1}`}
						</Typography>
						<LoadingButton
							id={item.id}
							loading={isLoading}
							onClick={handleDelete}
						>
							<Delete />
						</LoadingButton>
					</Stack>
				</Card>
			)}
		</Draggable>
	);
};

export default Item;
