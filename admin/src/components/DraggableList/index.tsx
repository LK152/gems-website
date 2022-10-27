import { DragDropContext } from 'react-beautiful-dnd';
import { memo } from 'react';
import Item from './Item';
import StrictModeDroppable from './StrictModeDroppable';
import { Stack } from '@mui/material';

const index = memo(({ items, onDragEnd }: draggableListProps) => {
	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<StrictModeDroppable droppableId='images' direction='horizontal'>
				{(provided) => (
					<div ref={provided.innerRef} {...provided.droppableProps}>
						<Stack direction='row'>
							{items.map((item, idx) => {
								return (
									<Item
										item={item}
										index={idx}
										key={item.id}
									/>
								);
							})}
						</Stack>
						{provided.placeholder}
					</div>
				)}
			</StrictModeDroppable>
		</DragDropContext>
	);
});

export default index;
