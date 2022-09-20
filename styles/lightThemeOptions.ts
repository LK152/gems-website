import { ThemeOptions } from '@mui/material/styles';

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
			defaultProps: {
				elevation: 0,
			},
			styleOverrides: {
				colorPrimary: {
					backgroundColor: 'transparent',
				},
			},
		},
		MuiTypography: {
			defaultProps: {
				textTransform: 'none',
				color: 'black',
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
