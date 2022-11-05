import {
	Button,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Typography,
	Slide,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { FileUploader } from 'react-drag-drop-files';
import { forwardRef, ReactElement, Ref } from 'react';

const transition = forwardRef(
	(
		props: TransitionProps & { children: ReactElement<any, any> },
		ref: Ref<unknown>
	) => <Slide direction='up' ref={ref} {...props} />
);

type props = {
	open: boolean;
	handleClose: () => void;
	handleChange: (file: File[]) => void;
	handleUpload: (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => Promise<void>;
};

const UploadFileDialog = ({
	open,
	handleClose,
	handleChange,
	handleUpload,
}: props) => {
	return (
		<Dialog
			open={open}
			TransitionComponent={transition}
			onClose={handleClose}
			keepMounted
		>
			<DialogTitle>
				<Typography>Upload File(s)</Typography>
			</DialogTitle>
			<DialogContent>
				<FileUploader
					multiple
					name='file'
					handleChange={handleChange}
					types={['PNG', 'JPG', 'JPEG']}
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleUpload}>
					<Typography>Upload</Typography>
				</Button>
				<Button onClick={handleClose}>
					<Typography>Cancel</Typography>
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default UploadFileDialog;
