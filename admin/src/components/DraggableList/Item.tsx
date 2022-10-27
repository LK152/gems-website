import { Box, ListItem } from '@mui/material';
import { Draggable } from 'react-beautiful-dnd';

const Item = ({ item, index }: draggableListItemProps) => {
	return (
		<Draggable draggableId={item.id} index={index}>
			{(provided, snapshot) => (
				<ListItem
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
				>
					<Box width='100%'>
						<img src={`/${item.path}`} width='50%' />
					</Box>
				</ListItem>
			)}
		</Draggable>
	);
};

export default Item;
