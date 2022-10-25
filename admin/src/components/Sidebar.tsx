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
import { KeyboardArrowRight, Pages } from '@mui/icons-material';
import { Link } from 'react-router-dom';

type initStatesType = {
	about: boolean;
	subjects: boolean;
	standardizedTest: boolean;
	extraCurriculums: boolean;
};

const drawerWidth = '260px';

const sidebarProps = {
	pages: [
		{
			id: 'about',
			title: 'About',
			subItems: [
				{ title: 'Contact Us', path: '/contact-us' },
				{ title: 'Teacher Introduction', path: '/teacher-intro' },
				{ title: 'Press Room', path: '/press-room' },
				{ title: 'Awards', path: '/awards' },
				{ title: 'Career', path: '/career' },
			],
		},
		{
			id: 'subjects',
			title: 'Subjects',
			subItems: [
				{ title: 'English', path: '/english' },
				{ title: 'Science', path: '/science' },
				{ title: 'Math', path: '/math' },
			],
		},
		{
			id: 'standardizedTest',
			title: 'Standardized Tests',
			subItems: [
				{ title: 'SAT', path: '/sat' },
				{ title: 'TOEFL', path: '/toefl' },
				{ title: 'APs', path: '/aps' },
			],
		},
		{
			id: 'extraCurriculums',
			title: 'Extra Curriculums',
			subItems: [
				{ title: 'IGEM', path: '/igem' },
				{ title: 'The Earth Prize', path: '/the-earth-prize' },
				{ title: 'AI For Good', path: '/ai-for-good' },
				{ title: 'Podcast Club', path: '/podcast-club' },
				{ title: 'Policy Debate', path: '/policy-debate' },
			],
		},
	],
};

const initStates: initStatesType = {
	about: false,
	subjects: false,
	standardizedTest: false,
	extraCurriculums: false,
};

const Sidebar = () => {
	const [states, setStates] = useState(initStates);
	const { pages } = sidebarProps;

	const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		setStates((prev) => ({
			...prev,
			[e.currentTarget.id]:
				!prev[e.currentTarget.id as keyof initStatesType],
		}));
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
					{pages.map(({ id, title, subItems }, idx) => {
						return (
							<>
								<ListItemButton
									onClick={handleClick}
									id={id}
									key={idx}
								>
									<ListItemText primary={title} />
									<ListItemIcon>
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
									</ListItemIcon>
								</ListItemButton>
								<Collapse
									in={states[id as keyof initStatesType]}
									unmountOnExit
									key={idx}
								>
									<List>
										{subItems.map(
											({ title, path }, idx) => {
												return (
													<ListItemButton
														sx={{ pl: 6 }}
														component={Link}
														to={path}
														key={idx}
													>
														<ListItemText
															primary={title}
														/>
													</ListItemButton>
												);
											}
										)}
									</List>
								</Collapse>
							</>
						);
					})}
				</List>
			</Drawer>
		</Box>
	);
};

export default Sidebar;
