import { Button, Typography } from '@mui/material';
import styles from '@styles/Dropdown.module.css';
import NextMuiLink from './NextMuiLink';

const Dropdown = (props: dropdownProps) => {
	return (
		<div className={styles.dropdown}>
			<Button>
				<Typography>{props.title}</Typography>
			</Button>
			<ul className={styles.content}>
				{props.subItems.map(({ title, path }, idx) => {
					return (
						<li key={idx}>
							<a>
								<Typography>{title}</Typography>
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Dropdown;
