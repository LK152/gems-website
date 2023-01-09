import NextMuiLink from '@components/NextMuiLink';
import { Box, Typography } from '@mui/material';
import styles from '@styles/Sidebar.module.css';
import { useRouter } from 'next/router';

const Sidebar = ({ props }: { props: sidebarElProps[] }) => {
	const path = useRouter().asPath;

	return (
		<Box p={4} position='sticky' sx={{ top: '40px' }}>
			<ul className={styles.sidebarList}>
				{props.map(({ title, pointer }, idx) => {
					return (
						<NextMuiLink href={pointer} key={idx}>
							<li
								className={styles.sidebarListItem}
								style={{
									backgroundColor:
										path === pointer
											? '#616161'
											: '#b1b2b3',
								}}
							>
								<Box p={1}>
									<Typography variant='h6' textAlign='left'>
										{title}
									</Typography>
								</Box>
							</li>
						</NextMuiLink>
					);
				})}
			</ul>
		</Box>
	);
};

export default Sidebar;
