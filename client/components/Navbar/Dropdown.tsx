import { Button, Typography } from '@mui/material';
import styles from '@styles/Dropdown.module.css';
import { dropdownProps } from 'navbarTypes';
import NextMuiLink from '../NextMuiLink';

const Dropdown: React.FC<dropdownProps> = ({ title, subItems }) => {
	return (
		<div className={styles.dropdown}>
			<Button
				disableElevation
				disableFocusRipple
				disableRipple
				disableTouchRipple
			>
				<Typography>{title}</Typography>
			</Button>
			<ul className={styles.content}>
				{subItems.map(({ title, path }, idx) => {
					return (
						<li key={idx}>
							<NextMuiLink href={path}>
								<Button
									sx={{ mx: 2, my: 1 }}
									disableElevation
									disableFocusRipple
									disableRipple
									disableTouchRipple
								>
									<Typography
										sx={{ textDecoration: 'none' }}
										noWrap
									>
										{title}
									</Typography>
								</Button>
							</NextMuiLink>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Dropdown;
