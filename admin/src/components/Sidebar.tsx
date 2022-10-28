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
import { KeyboardArrowRight } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import useCommonContext from '../context/commonContext';

type initStatesType = {
	about: boolean;
	subjects: boolean;
	standardizedTest: boolean;
	extraCurriculums: boolean;
};

const initStates: initStatesType = {
	about: false,
	subjects: false,
	standardizedTest: false,
	extraCurriculums: false,
};

const Sidebar = () => {
	const [states, setStates] = useState(initStates);
	const { sidebarProps, drawerWidth } = useCommonContext();
	const { pages } = sidebarProps;

	const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		setStates({
			...states,
			[e.currentTarget.id]:
				!states[e.currentTarget.id as keyof initStatesType],
		});
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
						<Typography variant='overline'>Pages</Typography>
					</Divider>
				</div>
				<List>
					<ListItemButton component={Link} to='/'>
						<ListItemText primary='Home' />
					</ListItemButton>
					{pages.map(({ id, title, subItems }) => {
						return (
							<div key={id}>
								<ListItemButton onClick={handleClick} id={id}>
									<ListItemText primary={title} />
									{states[id as keyof initStatesType] ? (
										<KeyboardArrowRight
											sx={{
												transform: 'rotate(90deg)',
												transition:
													'transform .2s cubic-bezier(0.25, 0.1, 0.25, 1)',
											}}
										/>
									) : (
										<KeyboardArrowRight
											sx={{
												transition:
													'transform .2s cubic-bezier(0.25, 0.1, 0.25, 1)',
											}}
										/>
									)}
								</ListItemButton>
								<Collapse
									in={states[id as keyof initStatesType]}
									unmountOnExit
								>
									<List component='div' disablePadding>
										{subItems.map(({ title, path }) => {
											return (
												<ListItemButton
													sx={{ pl: 6 }}
													component={Link}
													to={path}
													key={title}
												>
													<ListItemText
														primary={title}
													/>
												</ListItemButton>
											);
										})}
									</List>
								</Collapse>
							</div>
						);
					})}
				</List>
			</Drawer>
		</Box>
	);
};

export default Sidebar;
