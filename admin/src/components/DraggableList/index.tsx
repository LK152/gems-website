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
import { FileUploader } from 'react-drag-drop-files';
import getAsyncApi from '../../utilities/getAsyncApi';

const Index = ({ items, onDragEnd, setItems }: draggableListProps) => {
	const [open, setOpen] = useState<boolean>(false);
	const [bulkOpen, setBulkOpen] = useState<boolean>(false);
	const [files, setFiles] = useState<File[] | null>(null);

	const handleFileChange = (input: File[]) => {
		setFiles(Array.from(input));
	};

	const handleUpload = async () => {
		const formData = new FormData();

		files?.forEach((file) => {
			formData.append('image', file);
		});

		await axios
			.post('http://localhost:8000/images/homeSlider', formData, {
				headers: { 'Content-Type': 'multipart/form-data' },
			})
			.then(async () => {
				getAsyncApi(
					'http://localhost:8000/images/folder/homeSlider'
				).then((data: imageProps[]) => {
					setItems(
						data.map(({ id, path, order }) => {
							return {
								id: id,
								path: path.replaceAll('\\', '/'),
								order: order,
							};
						})
					);
					setFiles(null);
					setOpen(false);
				});
			});
	};

	const handleBulkDelete = async () => {
		await axios
			.delete('http://localhost:8000/images/folder/homeSlider')
			.then(() => {
				setItems([]);
				setBulkOpen(false);
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
									{items.length ? (
										<Stack
											direction='row'
											alignItems='center'
											gap={4}
											margin={4}
											overflow='scroll'
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
									) : (
										<Typography textAlign='center' m='10px'>
											No items at the moment
										</Typography>
									)}
								</Paper>
								<Stack
									direction='row'
									justifyContent='space-between'
								>
									<Button startIcon={<Update />}>
										Update
									</Button>
									<Button
										startIcon={<Upload />}
										onClick={() => setOpen(true)}
									>
										Upload image(s)
									</Button>
									<Button
										startIcon={<Delete />}
										disabled={!items.length}
										onClick={() => setBulkOpen(true)}
									>
										Bulk delete
									</Button>
								</Stack>
							</Box>
						</Box>
					)}
				</StrictModeDroppable>
			</DragDropContext>
			<Dialog
				open={open}
				onClose={() => {
					setOpen(false);
					setFiles(null);
				}}
			>
				<DialogTitle>Upload image(s)</DialogTitle>
				<DialogContent>
					<FileUploader
						multiple
						handleChange={handleFileChange}
						types={['PNG', 'JPG', 'JPEG']}
					/>
				</DialogContent>
				<DialogActions>
					<Button
						onClick={() => {
							setOpen(false);
							setFiles(null);
						}}
					>
						Cancel
					</Button>
					<Button onClick={handleUpload} disabled={!files}>
						Confirm
					</Button>
				</DialogActions>
			</Dialog>
			<Dialog open={bulkOpen} onClose={() => setBulkOpen(false)}>
				<DialogTitle>Bulk delete?</DialogTitle>
				<DialogContent>
					Are you sure you want to delete this folder and all of its
					contents?
				</DialogContent>
				<DialogActions>
					<Button onClick={() => setBulkOpen(false)}>No</Button>
					<Button onClick={handleBulkDelete}>Yes</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default Index;
