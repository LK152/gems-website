import DraggableList from '../components/DraggableList';
import { Box } from '@mui/material';
import { DropResult } from 'react-beautiful-dnd';
import reorder from '../utilities/reorder';
import { useEffect, useState } from 'react';
import getAsyncApi from '../utilities/getAsyncApi';

const Home = () => {
	const [items, setItems] = useState<draggableItemProps[]>([]);

	useEffect(() => {
		getAsyncApi('http://localhost:8000/images/folder/homeSlider').then(
			(data: imageProps[]) => {
				setItems(
					data.map(({ id, path }) => {
						return {
							id: id,
							path: path.replaceAll('\\', '/'),
						};
					})
				);
			}
		);
	}, []);

	const onDragEnd = ({ destination, source }: DropResult) => {
		if (!destination) return;

		const newItems = reorder(items, source.index, destination.index);

		setItems(newItems);
	};

	return (
		<Box>
			<DraggableList items={items} onDragEnd={onDragEnd} />
		</Box>
	);
};

export default Home;
