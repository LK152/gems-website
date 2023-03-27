import { Grid, Typography } from '@mui/material';

const AimAndOurFocus = () => {
	return (
		<>
			<Grid item container flexDirection='column'>
				<Grid item>
					<Typography
						variant='h4'
						textAlign='left'
						my={5}
						sx={{
							textShadow: '#42ecff 1px 0 10px',
						}}
					>
						Our Aim
					</Typography>
				</Grid>
				<Grid item xs={6}>
					<Typography variant='h6'>
						Learning math at GEMS Academy, every child can carve out
						a niche for themselves. We believe in tailoring our
						teaching to each individual, providing learning
						opportunities in accordance with students&apos; aptitude
						and needs. To learn math here at GEMS, students may
						exchange their ideas with the teacher freely, overcome
						barriers they face in their learning, and nurture an
						enthusiasm for math. We aim to provide the rare sense of
						humanity through the cold rigor of math, eventually
						polish each student towards becoming that shining and
						unique diamond.
					</Typography>
				</Grid>
				<Grid item xs></Grid>
			</Grid>
			<Grid item container flexDirection='column' my={4}>
				<Grid item>
					<Typography
						variant='h4'
						textAlign='left'
						my={5}
						sx={{
							textShadow: '#42ecff 1px 0 10px',
						}}
					>
						Small Size
					</Typography>
				</Grid>
				<Grid item xs={6}>
					<Typography variant='h6'>
						In a class of smaller size, each child will have the
						opportunity to join discussions and share their ideas
						comfortably. On the other hand, teachers are more likely
						to capture the rare “Aha moment” from the students and
						truly grasp the current learning situation. Smaller
						class leads to a closer bond between students, then
						leads to a smoother flow of idea-exchanging in the
						class, eventually allows the class to bond into a
						positive cooperative group!
					</Typography>
				</Grid>
				<Grid item xs></Grid>
			</Grid>
			<Grid item container flexDirection='row' my={4}>
				<Grid item xs></Grid>
				<Grid
					item
					container
					flexDirection='column'
					alignItems='end'
					xs
					mr={10}
				>
					<Grid item>
						<Typography
							variant='h4'
							my={5}
							sx={{
								textShadow: '#42ecff 1px 0 10px',
							}}
						>
							Teaching in English
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant='h6' textAlign='right'>
							Teaching in English can avoid the nuance from the
							language transition, and help students show their
							true mathematical abilities in tests!
						</Typography>
					</Grid>
				</Grid>
			</Grid>
			<Grid item container flexDirection='column' my={4}>
				<Grid item>
					<Typography
						variant='h4'
						my={5}
						textAlign='left'
						sx={{
							textShadow: '#42ecff 1px 0 10px',
						}}
					>
						Early Preparation and Dynamic Teaching
					</Typography>
				</Grid>
				<Grid item xs={6}>
					<Typography variant='h6'>
						We wish to exemplify the holistic view of each
						mathematical concepts in every stage of learning, and
						also their development and connections in future
						learnings. We believe this can help students build a
						solid and comprehensive knowledge system, create more
						meaningful learning opportunities in the future. Also,
						we focus on a dynamic style of teaching, instead of just
						transition of information. We truly hope students can
						learn and grow through interactions and discussions with
						the teacher, avoiding lonely and dull education.
					</Typography>
				</Grid>
				<Grid item xs></Grid>
			</Grid>
		</>
	);
};

export default AimAndOurFocus;
