import NextMuiLink from '@components/NextMuiLink';
import { Box, Grid, Typography } from '@mui/material';
import { NextPage } from 'next';
import { NextRouter, withRouter } from 'next/router';
import styles from '@styles/Math.module.css';
import AimAndOurFocus from './aimAndOurFocus';
import Curriculum from './Curriculum';

const tabs = [
	{ title: 'Aim & Our Focus', tabId: 'aim-and-our-focus' },
	{ title: 'Curriculum', tabId: 'curriculum' },
];

export const getStaticProps = async () => {
	const curriculumImages = await (
		await fetch('http://localhost:8000/images/folder/mathCurriculums')
	).json();

	return { props: { curriculumImages } };
};

const Math: NextPage<{
	router: NextRouter;
	curriculumImages: imageProps[];
}> = ({ router, curriculumImages }) => {
	const {
		query: { tab },
	} = router;

	return (
		<Box>
			<Typography
				variant='h3'
				textAlign='center'
				mt={4}
				sx={{
					textShadow: '3px 2px 6px rgba(0, 0, 0, 0.7)',
				}}
			>
				{tab === 'aim-and-our-focus' || tab == null
					? 'Aim & Our Focus'
					: 'Curriculum'}
			</Typography>
			<Grid container flexDirection='row'>
				<Grid item xs={3}>
					<Box position='sticky' p={4} top='40px'>
						<ul className={styles.sidebarList}>
							{tabs.map(({ title, tabId }, idx) => {
								return (
									<NextMuiLink
										href={{
											pathname: '/math',
											query: { tab: tabId },
										}}
										key={idx}
									>
										<li
											className={styles.sidebarListItem}
											style={{
												backgroundColor:
													tab == null
														? tabId ===
														  'aim-and-our-focus'
															? '#a4d0f5'
															: '#c7c7c7'
														: tabId === tab
														? '#a4d0f5'
														: '#c7c7c7',
											}}
										>
											<Typography variant='h6' p={1}>
												{title}
											</Typography>
										</li>
									</NextMuiLink>
								);
							})}
						</ul>
					</Box>
				</Grid>
				<Grid item container xs flexDirection='column'>
					{tab === 'curriculum' ? (
						<Curriculum images={curriculumImages} />
					) : (
						<AimAndOurFocus />
					)}
				</Grid>
				{tab === 'curriculum' && <Grid item xs={3} />}
			</Grid>
		</Box>
	);
};

export default withRouter(Math);
