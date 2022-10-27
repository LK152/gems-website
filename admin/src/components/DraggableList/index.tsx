import { DragDropContext } from 'react-beautiful-dnd';
import Item from './Item';
import StrictModeDroppable from './StrictModeDroppable';
import {
	Box,
	Stack,
	Paper,
	Typography,
	Button,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
} from '@mui/material';
import { Delete, Update, Upload } from '@mui/icons-material';
import { useState } from 'react';
import axios from 'axios';

const Index = ({ items, onDragEnd, setItems }: draggableListProps) => {
	const [open, setOpen] = useState<boolean>(false);
	const [files, setFiles] = useState<File[] | null>(null);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		setFiles(null);
	};

	const handleFileChange = (input: File[]) => {
		console.log(input);
	};

	const handleUpload = async () => {
		console.log(files);
		await axios.post('http://localhost:8000/images/homeSlider', files, {
			headers: { 'Content-Type': 'multipart/form-data' },
		});
	};

	return (
		<>
			<DragDropContext onDragEnd={onDragEnd}>
				<StrictModeDroppable
					droppableId='images'
					direction='horizontal'
				>
					{(provided) => (
						<Box
							ref={provided.innerRef}
							{...provided.droppableProps}
						>
							<Box mt='50px' maxWidth='90%' mx='auto'>
								<Typography variant='h3' my={1}>
									Slider Images
								</Typography>
								<Paper variant='outlined'>
									<Stack
										direction='row'
										alignItems='center'
										gap={4}
										margin={4}
									>
										{items.map((item, idx) => {
											return (
												<Item
													key={item.id}
													item={item}
													index={idx}
													setItems={setItems}
												/>
											);
										})}
										{provided.placeholder}
									</Stack>
								</Paper>
								<Stack direction='row'>
									<Button startIcon={<Update />}>
										Update
									</Button>
									<Button
										startIcon={<Upload />}
										onClick={handleOpen}
									>
										Upload image(s)
									</Button>
									<Button startIcon={<Delete />}>
										Bulk delete
									</Button>
								</Stack>
							</Box>
						</Box>
					)}
				</StrictModeDroppable>
			</DragDropContext>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Upload image(s)</DialogTitle>
				<DialogContent>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button onClick={handleUpload}>Confirm</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default Index;
