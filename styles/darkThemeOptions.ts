import { ThemeOptions } from '@mui/material/styles';

const darkThemeOptions: ThemeOptions = {
	palette: {
		mode: 'dark',
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
	},
};
