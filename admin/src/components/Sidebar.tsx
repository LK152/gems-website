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
	Toolbar,
} from '@mui/material';
import { KeyboardArrowDown, Home } from '@mui/icons-material';

const drawerWidth = '260px';

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
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: drawerWidth,
						boxSizing: 'border-box',
					},
				}}
				variant='permanent'
			>
				<Toolbar />
				<div>
					<Divider textAlign='left'>
						<Typography variant='body2'>Images</Typography>
					</Divider>
				</div>
				<List>
					<ListItemButton onClick={handleClick} id='home'>
						<ListItemIcon>
							<Home />
						</ListItemIcon>
						<ListItemText primary='Home' />
						{home ? (
							<KeyboardArrowDown
								sx={{
									transform: 'rotateX(180deg)',
									transition:
										'transform .2s cubic-bezier(0.25, 0.1, 0.25, 1)',
								}}
							/>
						) : (
							<KeyboardArrowDown
								sx={{
									transition:
										'transform .2s cubic-bezier(0.25, 0.1, 0.25, 1)',
								}}
							/>
						)}
					</ListItemButton>
					<Collapse in={home} unmountOnExit>
						<List>
							{pages.home.map((title, idx) => {
								return (
									<ListItemButton sx={{ pl: 10 }} key={idx}>
										<ListItemText primary={title} />
									</ListItemButton>
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
