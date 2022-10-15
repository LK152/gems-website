import Image from 'next/image';
import { useState } from 'react';
import { Button, Modal, Box } from '@mui/material';
import { ZoomIn } from '@mui/icons-material';
import styles from '@styles/ImageItem.module.css';

const Item: React.FC<{ path: string }> = ({ path }) => {
	const [open, setOpen] = useState<boolean>(false);
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<div className={styles.imgContainer}>
				<Button
					style={{
						width: '100%',
						height: '100%',
						background: `url(https://drive.google.com/uc?export=view&id=${path})`,
						backgroundSize: 'contain',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
					}}
					onClick={handleOpen}
				>
					<ZoomIn fontSize='large' className={styles.zoominIcon} />
				</Button>
			</div>
			<Modal open={open} onClose={handleClose}>
				<Box
					sx={{
						width: '55vw',
						height: '80vh',
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
					}}
				>
					<Image
						alt='gallery image'
						src={`https://drive.google.com/uc?export=view&id=${path}`}
						objectFit='contain'
						layout='fill'
						quality={100}
					/>
				</Box>
			</Modal>
		</>
	);
};

export default Item;
