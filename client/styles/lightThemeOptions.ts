import { ThemeOptions } from '@mui/material/styles';
import { Nunito } from '@next/font/google';

const nunito = Nunito({ subsets: ['latin'] });

const lightThemeOptions: ThemeOptions = {
	palette: {
		mode: 'light',
		primary: {
			main: '#FFF',
		},
		secondary: {
			main: '#000',
		},
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
		MuiButton: {
			defaultProps: {
				color: 'secondary',
			},
		},
	},
};

export default lightThemeOptions;
