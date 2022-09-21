import { Button, Typography } from '@mui/material';
import styles from '@styles/Dropdown.module.css';
import NextMuiLink from './NextMuiLink';

const Dropdown = (props: dropdownProps) => {
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
								<Typography noWrap>{title}</Typography>
							</NextMuiLink>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Dropdown;
