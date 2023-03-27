import { AppBar, Box, Toolbar, Stack, styled } from '@mui/material';
import { navbarPathsProps } from 'navbarTypes';
import Image from 'next/legacy/image';
import NextMuiLink from '@components/NextMuiLink';
import Dropdown from './Dropdown';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

export const navbarPaths: navbarPathsProps[] = [
	{
		title: 'About',
		subItems: [
			{ title: 'Teacher Introduction', path: '/teacher-intro' },
			{ title: 'Press Room', path: '/press-room' },
			{ title: 'Awards', path: '/awards' },
			{ title: 'Career', path: '/career' },
			{ title: 'Contact Us', path: '/contact-us' },
		],
	},
	{
		title: 'Subjects',
		subItems: [
			{ title: 'English', path: '/english' },
			{ title: 'Science', path: '/science' },
			{ title: 'Math', path: '/math' },
		],
	},
	{
		title: 'Standardized Tests',
		subItems: [
			{ title: 'SAT', path: '/sat' },
			{ title: 'TOEFL', path: '/toefl' },
			{ title: 'APs', path: '/aps' },
		],
	},
	{
		title: 'Extra Curriculums',
		subItems: [
			{ title: 'IGEM', path: '/igem' },
			{ title: 'The Earth Prize', path: '/the-earth-prize' },
			{ title: 'AI For Good', path: '/ai-for-good' },
			{ title: 'Podcast Club', path: '/podcast-club' },
			{ title: 'Policy Debate', path: '/policy-debate' },
		],
	},
];

const Navbar = () => {
	return (
		<Box flexGrow={1}>
			<AppBar position='fixed'>
				<Toolbar component='nav' sx={{ minHeight: '72px' }}>
					<Stack
						direction='row'
						spacing={2}
						alignItems='center'
						width='100vw'
					>
						<NextMuiLink href='/'>
							<Box display='flex'>
								<Image
									src={'/logo.png'}
									alt='logo'
									quality={100}
									width={128}
									height={45}
									priority
								/>
							</Box>
						</NextMuiLink>
						<div style={{ flexGrow: 1 }} />
						{navbarPaths.map(({ title, subItems }, idx) => {
							return (
								<Dropdown
									key={idx}
									title={title}
									subItems={subItems}
								/>
							);
						})}
					</Stack>
				</Toolbar>
			</AppBar>
			<Offset />
		</Box>
	);
};

export default Navbar;
