import {ThemeOptions} from '@mui/material/styles';

const lightThemeOptions: ThemeOptions = {
    palette: {
        mode: 'light', 
        primary: {
            main: '#FFF'
        }
    }, 
    components: {
        MuiAppBar: {
            defaultProps: {
                elevation: 0
            },
            styleOverrides: {
                colorPrimary: {
                    backgroundColor: 'transparent'
                }
            }
        }
    }
}

export default lightThemeOptions;