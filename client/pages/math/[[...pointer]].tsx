import { NextPage } from 'next';
import { Box, Grid, Typography, Stack, IconButton } from '@mui/material';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import Sidebar from '@components/Sidebar';
import { useState } from 'react';
import { useRouter } from 'next/router';

const mathSidebar: sidebarElProps[] = [
	{ title: 'Aim & Our Focus', pointer: '/math/aim-and-our-focus' },
	{ title: 'Curriculum', pointer: '/math/curriculum' },
];

const Math: NextPage = () => {
	const { pointer } = useRouter().query;
	const [grade, setGrade] = useState<number>(7);

	return (
		<Grid container flexDirection='column'>
			<Grid item>
				<Typography
					variant='h3'
					textAlign='center'
					mt={4}
					sx={{
						textShadow: '3px 2px 6px rgba(0, 0, 0, 0.7)',
					}}
				>
					{pointer == 'curriculum' ? 'Curriculum' : 'Aim & Our Focus'}
				</Typography>
			</Grid>
			<Grid item container flexDirection='row'>
				<Grid item xs>
					<Sidebar props={mathSidebar} />
				</Grid>
				<Grid item xs={9} mr={4}>
					{pointer == 'curriculum' ? (
						<Box>
							<Grid container>
								<Stack>
									<IconButton
										disabled={grade === 7}
										onClick={() => setGrade(grade - 1)}
									>
										<NavigateBefore />
									</IconButton>
									<Typography>{`G${grade}`}</Typography>
									<IconButton
										disabled={grade === 12}
										onClick={() => setGrade(grade + 1)}
									>
										<NavigateNext />
									</IconButton>
								</Stack>
							</Grid>
						</Box>
					) : (
						<>
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
										Our Aim
									</Typography>
								</Grid>
								<Grid item xs={6}>
									<Typography variant='h6'>
										Learning math at GEMS Academy, every
										child can carve out a niche for
										themselves. We believe in tailoring our
										teaching to each individual, providing
										learning opportunities in accordance
										with students&apos; aptitude and needs.
										To learn math here at GEMS, students may
										exchange their ideas with the teacher
										freely, overcome barriers they face in
										their learning, and nurture an
										enthusiasm for math. We aim to provide
										the rare sense of humanity through the
										cold rigor of math, eventually polish
										each student towards becoming that
										shining and unique diamond.
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
										In a class of smaller size, each child
										will have the opportunity to join
										discussions and share their ideas
										comfortably. On the other hand, teachers
										are more likely to capture the rare “Aha
										moment” from the students and truly
										grasp the current learning situation.
										Smaller class leads to a closer bond
										between students, then leads to a
										smoother flow of idea-exchanging in the
										class, eventually allows the class to
										bond into a positive cooperative group!
									</Typography>
								</Grid>
								<Grid item xs></Grid>
							</Grid>
							<Grid
								item
								container
								flexDirection='column'
								alignItems='end'
								my={4}
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
								<Grid item xs></Grid>
								<Grid item xs={6}>
									<Typography variant='h6' textAlign='right'>
										Teaching in English can avoid the nuance
										from the language transition, and help
										students show their true mathematical
										abilities in tests!
									</Typography>
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
										We wish to exemplify the holistic view
										of each mathematical concepts in every
										stage of learning, and also their
										development and connections in future
										learnings. We believe this can help
										students build a solid and comprehensive
										knowledge system, create more meaningful
										learning opportunities in the future.
										Also, we focus on a dynamic style of
										teaching, instead of just transition of
										information. We truly hope students can
										learn and grow through interactions and
										discussions with the teacher, avoiding
										lonely and dull education.
									</Typography>
								</Grid>
								<Grid item xs></Grid>
							</Grid>
						</>
					)}
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Math;
