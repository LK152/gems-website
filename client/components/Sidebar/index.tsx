import NextMuiLink from '@components/NextMuiLink';
import { Box, Typography } from '@mui/material';
import styles from '@styles/Sidebar.module.css';
import { useRouter } from 'next/router';
import React from 'react';

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
											? '#a4d0f5'
											: '#c7c7c7',
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
