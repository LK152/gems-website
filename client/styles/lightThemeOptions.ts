import { ThemeOptions } from '@mui/material/styles';
import { Nunito } from '@next/font/google';

const nunito = Nunito({ subsets: ['latin'] });

const lightThemeOptions: ThemeOptions = {
	palette: {
		mode: 'light',
	},
	components: {
		MuiAppBar: {
			styleOverrides: {
				colorPrimary: {
					backgroundColor: '#ededed',
				},
			},
		},
		MuiTypography: {
			defaultProps: {
				textTransform: 'none',
				color: 'black',
				fontFamily: nunito.style.fontFamily,
			},
		},
		MuiLink: {
			styleOverrides: {
				root: {
					textDecoration: 'none',
				},
			},
		},
	},
};

export default lightThemeOptions;
