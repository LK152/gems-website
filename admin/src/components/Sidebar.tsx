import React, { useState } from 'react';
import {
	Box,
	Collapse,
	Divider,
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	ListItemButton,
	Typography,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const sidebarProps = {
	pages: {
		home: ['Slider Images', 'Gallery Images'],
	},
};

const openInitStates = {
	home: false,
};

const Sidebar = () => {
	const [open, setOpen] = useState(openInitStates);
	const { home } = open;
	const { pages } = sidebarProps;

	const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		setOpen((prev) => ({ ...prev, [e.currentTarget.id]: !home }));
	};

	return (
		<Box>
			<Drawer sx={{ width: '260px' }} variant='permanent'>
				<Divider textAlign='left'>Images</Divider>
				<List>
					<ListItemButton onClick={handleClick} id='home'>
						<ListItemText primary='Home' />
						{home ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
					<Collapse in={home} unmountOnExit>
						<List>
							{pages.home.map((title, idx) => {
								return (
									<ListItem key={idx}>
										<Typography>{title}</Typography>
									</ListItem>
								);
							})}
						</List>
					</Collapse>
				</List>
			</Drawer>
		</Box>
	);
};

export default Sidebar;
