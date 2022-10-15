import { Button, Typography } from '@mui/material';
import styles from '@styles/Dropdown.module.css';
import NextMuiLink from './NextMuiLink';

const Dropdown: React.FC<dropdownProps> = (props) => {
	return (
		<div className={styles.dropdown}>
			<Button
				disableElevation
				disableFocusRipple
				disableRipple
				disableTouchRipple
			>
				<Typography>{props.title}</Typography>
			</Button>
			<ul className={styles.content}>
				{props.subItems.map(({ title, path }, idx) => {
					return (
						<li key={idx}>
							<NextMuiLink href={path}>
								<Button sx={{ mx: 2, my: 1 }}>
									<Typography noWrap>{title}</Typography>
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
