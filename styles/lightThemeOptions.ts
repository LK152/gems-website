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
                fontFamily: 'Nunito Sans',
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
